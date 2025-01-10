import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './index.css';

function Certifications() {
  return (
    <div className="carousel-container" id="features">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        dynamicHeight={true}
        useKeyboardArrows
        className="carousel-content"
      >
        <div>
          <img 
            src="https://res.cloudinary.com/di3u22t0w/image/upload/v1721148122/Screenshot_3102_wtqczk.png" 
            alt="Certification 1" 
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img 
            src="https://res.cloudinary.com/di3u22t0w/image/upload/v1721148135/Screenshot_3101_i5kr2o.png" 
            alt="Certification 2" 
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img 
            src="https://res.cloudinary.com/di3u22t0w/image/upload/v1721148124/Screenshot_3103_qxrtjo.png" 
            alt="Certification 3" 
          />
          <p className="legend">Legend 3</p>
        </div>
        
        <div>
          <img 
            src="https://res.cloudinary.com/di3u22t0w/image/upload/v1721148123/Screenshot_3100_vnjnyp.png" 
            alt="Certification 4" 
          />
          <p className="legend">Legend 4</p>
        </div>

        <div>
          <img 
            src="https://res.cloudinary.com/di3u22t0w/image/upload/v1735637824/Screenshot_273_bkymkn.png" 
            alt="Certification 5" 
          />
          <p className="legend">Legend 5</p>
        </div>

        <div>
          <img 
            src="https://res.cloudinary.com/di3u22t0w/image/upload/v1735638454/Screenshot_274_yn35as.png" 
            alt="Certification 6" 
          />
          <p className="legend">Legend 6</p>
        </div>

        <div>
          <img 
            src="https://res.cloudinary.com/di3u22t0w/image/upload/v1735638704/2023ProgressReport_zfffx4.png" 
            alt="Certification 7" 
          />
          <p className="legend">Legend 7</p>
        </div>

        <div>
          <img 
            src="https://res.cloudinary.com/di3u22t0w/image/upload/v1735638729/JD9DITKZY6_pkgnob.png" 
            alt="Certification 8" 
          />
          <p className="legend">Legend 8</p>
        </div>

        <div>
          <img 
            src="https://res.cloudinary.com/di3u22t0w/image/upload/v1735638788/10xActivity_ExtendedSeries_dumwt9.png" 
            alt="Certification 9" 
          />
          <p className="legend">Legend 9</p>
        </div>




      </Carousel>
    </div>
  );
}

export default Certifications;
