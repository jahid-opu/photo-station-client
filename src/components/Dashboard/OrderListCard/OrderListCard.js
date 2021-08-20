import React from 'react';

const OrderListCard = ({order}) => {
    return (
        <div className="col-md-4">
        <div className="service-card px-3">
            <div className="d-flex justify-content-between">
            <img style={{ width: "30%" }} src={order.imageURL} alt="" />
            {order.status}
            </div>
            <h3>{order.name}</h3>
            <p>${order.price}</p>
        </div>
    </div>
    );
};

export default OrderListCard;