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
          <h1>Experience Bali's beauty with Batur Sunrise trekking & 4WD Jeep tours</h1>
          <p>Explore the island's stunning landscapes on foot and on wheels, and witness the breathtaking beauty of a sunrise over the volcano's crater. Book now and create unforgettable memories with us!</p>
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
