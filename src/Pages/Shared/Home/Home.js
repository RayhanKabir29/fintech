import React from 'react';
import Banner from '../../Banner/Banner';
import NewsLetter from '../../NewsLettet/NewsLetter';
import Quation from '../../Quation/Quation';
import Services from '../../Services/Services';
import Social from '../../Social/Social';
import TaxTable from '../../TaxTable/TaxTable';
import Testimonial from '../../Testimonial/Testimonial';
import Work from '../../Work/Work';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <TaxTable/>
            <Work/>
            <Testimonial/>
            <Quation/>
            <NewsLetter/>
            <Social/>
            
        </div>
    );
};

export default Home;