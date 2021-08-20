import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../App';
import { Table } from 'react-bootstrap';
import ManageService from './ManageService';
import Sidebar from '../Sidebar/Sidebar';


const ManageServices = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [services,setServices] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        reload();
     },[])

   const reload = () => {
        fetch('http://localhost:5000/service')
        .then(response =>response.json())
        .then(data =>setServices(data))

   }

//  Check Admin or not
    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete/${id}`,{
            method: 'DELETE'
        })
        .then(response=>response.json())
        .then(result =>{
            console.log(result);
            reload();
        })
    }
    return (
        <section className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-5">

            { isAdmin &&
              
              <Table striped bordered hover variant="primary">

              <thead>
                  <tr>
                    <th>#</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Delete Service</th>
                  </tr>
                  {
                      services.map(service => <ManageService handleDelete={handleDelete} service={service}></ManageService>)
                  }
                  </thead>
                </Table>
            }
           

           </div>
        </section>
    );
};

export default ManageServices;