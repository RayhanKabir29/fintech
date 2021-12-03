import React from 'react';
import Banner from '../../Banner/Banner';
import Services from '../../Services/Services';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Services/>
            <Footer/>
        </div>
    );
};

export default Home;