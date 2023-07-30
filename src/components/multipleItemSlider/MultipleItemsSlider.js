import React from 'react';
import Slider from 'react-slick';
import './MultipleItemSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function MultipleItemSlider(props) {

  const displayitems = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        displayitems: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        displayitems: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        displayitems: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div>
      <div className='p-4 m-2 rounded  multiitemslider' >
        {/* <Slider {...displayitems}>
              
            <div className="card border-0 multi" style="width: 18rem;">
                <img src={props.productObj.Image1}  className="card-img-top img mx-auto p-2" style={{width:"121px",height:"150px"}} alt="..." />
                <div className="card-body">
                    <p className="card-text text-center fw-bold">{props.productObj.Text1}</p>
                </div>
            </div>

            <div className="card border-0 multi" style="width: 18rem;">
                <img src={props.productObj.Image2}  className="card-img-top img mx-auto p-2" style={{width:"121px",height:"150px"}} alt="..." />
                <div className="card-body"> 
                    <p className="card-text text-center fw-bold">{props.productObj.Text2}</p>
                </div>
            </div>

            <div className="card border-0 multi" style="width: 18rem;">
                <img src={props.productObj.Image3}  className="card-img-top img mx-auto p-2" style={{width:"121px",height:"150px"}} alt="..." />
                <div className="card-body">
                    <p className="card-text text-center fw-bold">{props.productObj.Text3}</p>
                </div>
            </div>

            <div className="card border-0 multi" style="width: 18rem;">
                <img src={props.productObj.Image4}  className="card-img-top img mx-auto p-2" style={{width:"121px",height:"150px"}} alt="..." />
                <div className="card-body">
                    <p className="card-text text-center fw-bold">{props.productObj.Text4}</p>
                </div>
            </div>

            <div className="card border-0 multi" style="width: 18rem;">
                <img src={props.productObj.Image5}  className="card-img-top img mx-auto p-2" style={{width:"121px",height:"150px"}} alt="..." />
                <div className="card-body">
                    <p className="card-text text-center fw-bold">{props.productObj.Text5}</p>
                </div>
            </div>

            <div className="card border-0 multi" style="width: 18rem;">
                <img src={props.productObj.Image6}  className="card-img-top img mx-auto p-2" style={{width:"121px",height:"150px"}} alt="..." />
                <div className="card-body">
                    <p className="card-text text-center fw-bold">{props.productObj.Text6}</p>
                </div>
            </div>

            <div className="card border-0 multi" style="width: 18rem;">
                <img src={props.productObj.Image7}  className="card-img-top img mx-auto p-2" style={{width:"121px",height:"150px"}} alt="..." />
                <div className="card-body">
                    <p className="card-text text-center fw-bold">{props.productObj.Text7}</p>
                </div>
            </div>

            <div className="card border-0 multi" style="width: 18rem;">
                <img src={props.productObj.Image8}  className="card-img-top img mx-auto p-2" style={{width:"121px",height:"150px"}} alt="..." />
                <div className="card-body">
                    <p className="card-text text-center fw-bold">{props.productObj.Text8}</p>
                </div>
            </div>

            <div className="card border-0 multi" style="width: 18rem;">
                <img src={props.productObj.Image9}  className="card-img-top img mx-auto p-2" style={{width:"121px",height:"150px"}} alt="..." />
                <div className="card-body">
                    <p className="card-text text-center fw-bold">{props.productObj.Text9}</p>
                </div>
            </div>

            
            


            </Slider> */}

        <Slider {...displayitems}>


          {
            (props.productObj).map((userObj) => (

              <div className="card border-0 multi" style="width: 18rem;">
                <img src={userObj.Image} className="card-img-top img mx-auto p-2" style={{ width: "121px", height: "150px" }} alt="..." />
                <div className="card-body">
                  <p className="card-text text-center fw-bold">{userObj.Text}</p>
                </div>
              </div>


            ))
          }

        </Slider>


      </div>
    </div>
  );

}

export default MultipleItemSlider