import React from 'react';
import Banner from '../../Banner/Banner';
import News from '../../News/News';
import Services from '../../Services/Services';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Services/>
            <News/>
            <Footer/>
        </div>
    );
};

export default Home;