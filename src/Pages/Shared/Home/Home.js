import React from 'react';
import AppSection from '../../AppSection/AppSection';
import Banner from '../../Banner/Banner';
import News from '../../News/News';
import Quation from '../../Quation/Quation';
import Services from '../../Services/Services';
import Work from '../../Work/Work';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Services/>
            <News/>
            <AppSection/>
            <Quation/>
            <Work/>
            <Footer/>
        </div>
    );
};

export default Home;