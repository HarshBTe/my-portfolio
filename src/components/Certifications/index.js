import Carousel from 'react-bootstrap/Carousel';
import './index.css'

function Certifications() {
  return (
    <div className='main-container' id="features">
    <Carousel data-bs-theme="dark" slide={true}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/di3u22t0w/image/upload/v1721148122/Screenshot_3102_wtqczk.png"
          alt="First slide"
        />


      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/di3u22t0w/image/upload/v1721148135/Screenshot_3101_i5kr2o.png"
          alt="Second slide"
        />


      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/di3u22t0w/image/upload/v1721148124/Screenshot_3103_qxrtjo.png"
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/di3u22t0w/image/upload/v1721148123/Screenshot_3100_vnjnyp.png"
          alt="First slide"
        />

      </Carousel.Item>
    </Carousel>
    </div>
  );
}


export default Certifications;


