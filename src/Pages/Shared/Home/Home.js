import React from 'react';
import Banner from '../../Banner/Banner';
import NewsLetter from '../../NewsLettet/NewsLetter';
import Quation from '../../Quation/Quation';
import Services from '../../Services/Services';
import Social from '../../Social/Social';
import Work from '../../Work/Work';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Services/>
            <Work/>
            <Quation/>
            <NewsLetter/>
            <Social/>
            <Footer/>
        </div>
    );
};

export default Home;