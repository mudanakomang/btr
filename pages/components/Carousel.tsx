import Carousel from 'react-bootstrap/Carousel';
import style from './Carousel.module.css';
export default function CarouselComponent() {
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src="/first.jpg"
          alt="First slide"
          height={600}
        /> */}
         <div className={style.video_container}>
         <video playsInline autoPlay muted loop className={style.video}>
            <source src="/video/video-bg.mp4" type="video/mp4" />
          </video>
         </div>
        <Carousel.Caption className={style.carousel_caption}>
          <h1>First slide label</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="/second.jpg"
          alt="Second slide"
          height={600}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/third.jpg"
          alt="Third slide"
          height={600}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}
