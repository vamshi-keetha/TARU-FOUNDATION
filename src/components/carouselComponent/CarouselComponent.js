import react from 'react';
import 'bootstrap';
import { Carousel } from 'react-bootstrap';
import './CarouselComponent';

function Carouselcomponent(props) {

    return (
        <div>
            <Carousel>
                <Carousel.Item >
                    <img className="d-block w-100" src={props.productObj.carouselImage1} style={{ "height": "600px" }} alt="First slide" />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={props.productObj.carouselImage2} style={{ "height": "600px" }} alt="Second slide" />
                    {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={props.productObj.carouselImage3} style={{ "height": "600px" }} alt="Third slide" />
                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={props.productObj.carouselImage4} style={{ "height": "600px" }} alt="Third slide" />
                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={props.productObj.carouselImage5} style={{ "height": "600px" }} alt="Third slide" />
                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>

        </div>
    );
}

export default Carouselcomponent