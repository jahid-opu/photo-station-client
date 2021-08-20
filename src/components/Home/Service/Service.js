import React from 'react';
import { useHistory } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const history = useHistory()
    const handleClick = (id) =>{
        const url = `checkout/${id}`;
        history.push(url);
    }
    const handleClickView = (id) =>{
        const url = `details/${id}`;
        history.push(url);
    }
    return (
        <div className="col-md-4">
        <div className="text-center service-card">
            <img style={{ width: "70%" }} src={service.imageURL} alt="" />
            <h4 className="py-3">{service.name}</h4>
            <div className="d-flex justify-content-around">
            <button onClick={() => handleClickView(service._id)} className="btn btn-primary">View More</button>
            <button onClick={() => handleClick(service._id)} className="btn btn-primary">Buy for ${service.price}</button>
            </div>
        </div>
    </div>
    );
};

export default Service;