import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Contact from '../Contact/Contact';
import HeaderMain from '../HeaderMain/HeaderMain';
import Services from '../Services/Services';
import Navbars from './../../Shared/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbars></Navbars>
            <HeaderMain/>
            <Services/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;