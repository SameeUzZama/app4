import { Carousel } from "react-bootstrap";

export const Caros = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img height="300px" width="200px"
          className="d-block w-100"
          src="./images/download.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
                  height="300px"
                  width="200px"
          className="d-block w-100"
          src="./images/download (2).jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height="300px"
                  width="200px"
          className="d-block w-100"
          src="./images/download (1).jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

