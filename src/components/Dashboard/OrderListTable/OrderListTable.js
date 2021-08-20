import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const OrderListTable = ({order}) => {
    const [status, setStatus] = useState(order.status);
    const handleChange = (e,id) => {
        fetch(`http://localhost:5000/statusUpdate/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ e })
        })
            .then(response => response.json())
            .then(result => {
                if (result) {
                    setStatus(e);
                }
            })
    }
    return (
        <tr>
        <td>{order.userName}</td>
        <td>{order.email}</td>
        <td>{order.name}</td>
        <td>{status}</td>
        <td>
            <Form.Control onChange={(e) => handleChange(e.target.value, order._id)} as="select">
                <option selected disabled>Choose an option</option>
                <option>Pending</option>
                <option>Inprogress</option>
                <option>Done</option>
            </Form.Control>
        </td>
    </tr>
    );
};

export default OrderListTable;