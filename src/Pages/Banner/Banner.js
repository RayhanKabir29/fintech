import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
      <div>
       <div className="banner-section">
         <div className="banner-img">
            <img src="https://i.ibb.co/Dr14nwv/bannerimg.png" alt="" className="img-fluid"/>
         </div>
       </div>
      </div>
    );
};

export default Banner;


//   style={{
    //      backgroundImage: `url("https://i.ibb.co/wdH7VQv/main-banner.jpg")`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center', height: '100vh'
    //   }}