import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbars from './../Shared/Navbar/Navbar';

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
        <div>
            <Navbars></Navbars>
        <div className="text-center p-5">
            <img className="py-5" style={{ width: "20%" }} src={detail.imageURL} alt="" />
            <h5>Service Name: {detail.name}</h5>
            <h5 className="py-3">Price: ${detail.price}</h5>
            <p className="px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi massa turpis, porttitor ut neque nec, venenatis posuere arcu. Vestibulum et aliquet est. Quisque facilisis rutrum urna, sed rutrum velit euismod sit amet. Phasellus nec nulla vitae metus maximus malesuada quis vitae eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla non varius nisl. Suspendisse ornare laoreet rhoncus. Cras tellus diam, porttitor a pretium eget, convallis a leo. Morbi feugiat arcu vel purus cursus, fermentum feugiat sem malesuada. Nulla ullamcorper, quam quis congue pulvinar, ante eros scelerisque diam, in luctus augue nunc sit amet quam.</p>

        </div>
        <Footer/>
        </div>
    );
};

export default Details;