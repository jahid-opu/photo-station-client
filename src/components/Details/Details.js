import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const [detail, setDetail] = useState({});
    const {id} = useParams();
    useEffect(() => {
        const url = `http://localhost:5000/service/${id}`
        fetch(url) 
        .then(response=>response.json())
        .then(data =>setDetail(data))
    },[])
    console.log(detail)
    return (
        <div className="text-center">
            <h3>Service Details:</h3>
            <img style={{ width: "20%" }} src={detail.imageURL} alt="" />
            <h5>Service Name: {detail.name}</h5>
            <h5>Price: {detail.price}</h5>
            <p>{detail.description}</p>

        </div>
    );
};

export default Details;