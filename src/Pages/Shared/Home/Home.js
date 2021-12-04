import React from 'react';
import AppSection from '../../AppSection/AppSection';
import Banner from '../../Banner/Banner';
import Information from '../../Information/Information';
import News from '../../News/News';
import NewsLetter from '../../NewsLettet/NewsLetter';
import Quation from '../../Quation/Quation';
import Services from '../../Services/Services';
import Team from '../../Team/Team';
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
            <Team/>
            <Information/>
            <NewsLetter/>
            <Footer/>
        </div>
    );
};

export default Home;