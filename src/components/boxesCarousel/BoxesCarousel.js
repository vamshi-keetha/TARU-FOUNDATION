import react from 'react';
import 'bootstrap';
import './BoxesCarousel.css';

function BoxesCarousel(props) {


    return (
        <div>
            <div className="row m-3 carouselboxes">
                <div className="col-sm-3 col-sm-12 col-md-6 col-xl-4 col-xxl-3 mx-auto">
                    <div className="card p-3 border border-light rounded-0 m-2" style={{ width: "350px" }}>
                        <div className="card-body">
                            <h5 className="card-title text-center">{props.productObj.Text1}</h5>
                        </div>
                        <img src={props.productObj.Image1} style={{ height: "280px" }} alt="..." />
                        <h5 className='pt-2 text-success fs-6'>see more</h5>
                    </div>
                </div>


                <div className="col-sm-3 col-sm-12 col-md-6 col-xl-4 col-xxl-3 mx-auto">
                    <div className="card p-3 border border-light rounded-0 m-2" style={{ width: "350px" }}>
                        <div className="card-body">
                            <h5 className="card-title text-center">{props.productObj.Text2}</h5>
                        </div>
                        <img src={props.productObj.Image2} style={{ height: "280px" }} alt="..." />
                        <h5 className='pt-2 text-success fs-6'>see more</h5>
                    </div>
                </div>

                <div className="col-sm-3 col-sm-12 col-md-6 col-xl-4 col-xxl-3 mx-auto">
                    <div className="card p-3 border border-light rounded-0 m-2" style={{ width: "350px" }}>
                        <div className="card-body">
                            <h5 className="card-title text-center">{props.productObj.Text3}</h5>
                        </div>
                        <img src={props.productObj.Image3} style={{ height: "280px" }} alt="..." />
                        <h5 className='pt-2 text-success fs-6'>see more</h5>
                    </div>
                </div>

                <div className="col-sm-3 col-sm-12 col-md-6 col-xl-4 col-xxl-3 mx-auto">
                    <div className="card p-3 border border-light rounded-0 m-2" style={{ width: "350px" }}>
                        <div className="card-body">
                            <h5 className="card-title text-center">{props.productObj.Text4}</h5>
                        </div>
                        <img src={props.productObj.Image4} style={{ height: "280px" }} alt="..." />
                        <h5 className='pt-2 text-success fs-6'>see more</h5>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default BoxesCarousel