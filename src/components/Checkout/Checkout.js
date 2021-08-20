import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router-dom';
import { UserContext } from './../../App';

const Checkout = () => {
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [order,setOrder] = useState({});

    const {id} = useParams();
    useEffect(() => {
        const url = `http://localhost:5000/service/${id}`
        fetch(url) 
        .then(response=>response.json())
        .then(data =>{
            const orderData = {...loggedInUser,status:'pending',name: data.name, price:data.price, imageURL:data.imageURL, description:data.description};
            setOrder(orderData);
        })
    },[])
    
    const onSubmit = (data) => {
        const newOrder = {...order, address: data.address, phone: data.phone};
        fetch('http://localhost:5000/addOrder',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newOrder)
        })
        .then(result =>{
            console.log(result);
        })
        history.push('/orders');

    }

    return (
        <div>
                <Form className="form-section" onSubmit={handleSubmit(onSubmit)} >
            <input className="form-control" id="email" value={loggedInUser.email} {...register("email")} />
            <br />
            <input className="form-control" id="name" value={loggedInUser.userName} {...register("name")}  />
            <br />
            <input className="form-control" id="address" placeholder="Address" {...register("address")}  />
            <br />
            <input className="form-control" id="phone" placeholder="Phone" {...register("phone")}  />
            <br />
            <br />

            <input className="btn btn-primary" value="Confirm Order" type="submit" />
            <br/><br/>
            
        </Form>
        </div>
    );
};

export default Checkout;