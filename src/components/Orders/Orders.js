import React, { useContext, useEffect, useState } from 'react';
import Order from '../Order/Order';
import { UserContext } from './../../App';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders,setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className="row">
            <h3>Your Orders:</h3>
            {
                orders.map(order => <Order order={order}></Order>)
            }
        </div>
    );
};

export default Orders;