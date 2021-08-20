import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from './../../../App';
import OrderListTable from './../OrderListTable/OrderListTable';
import OrderListCard from './../OrderListCard/OrderListCard';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])


    return (
        <div className='row'>
            {isAdmin &&


<Table striped bordered hover variant="primary">

    <thead>
        <tr>
            <th>Name</th>
            <th>Email ID</th>
            <th>Service</th>
            <th>Status</th>
            <th>Change Status</th>
        </tr>

        {orders.map((order) => <OrderListTable order={order}></OrderListTable>)}

    </thead>
</Table>
}

{!isAdmin &&
                orders.map((order) => <OrderListCard order={order}></OrderListCard>)

            }
        </div>
    );
};

export default OrderList;