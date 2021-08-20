import React from 'react';
import OrderList from '../OrderList/OrderList';
import Sidebar from './../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <OrderList/>
            </div>
        </section>
    );
};

export default Dashboard;