import react from 'react';
import { Outlet, Link } from 'react-router-dom';
import './ProductBoxes.css';



function ProductBoxes(props) {

    return (
        <div className="card p-3 border border-light rounded-0 m-2" style={{ width: "350px" }}>
            <p className='dispaly-5 fw-bold'>{props.productObj.productName}</p>
            {/* <h1>{props.children}</h1> */}
            <div className=''>
                <div className="d-flex conatiner mt-2 mb-2">
                    <div className='col-sm-6'>
                        <img src={props.productObj.productImage1} className='' style={{ width: "150px", height: "100px" }} alt="" />
                        <p className='text-start ms-3'>{props.productObj.textimage1}</p>
                    </div>

                    <div className='col-sm-6'>
                        <img src={props.productObj.productImage2} className='' style={{ width: "150px", height: "100px" }} alt="" />
                        <p className='text-start ms-3'>{props.productObj.textimage2}</p>
                    </div>
                </div>

                <div className="d-flex conatiner mt-2 mb-2">
                    <div className='col-sm-6'>
                        <img src={props.productObj.productImage3} className='' style={{ width: "150px", height: "100px" }} alt="" />
                        <p className='text-start ms-3'>{props.productObj.textimage3}</p>
                    </div>

                    <div className='col-sm-6'>
                        <img src={props.productObj.productImage4} className='' style={{ width: "150px", height: "100px" }} alt="" />
                        <p className='text-start ms-3'>{props.productObj.textimage4}</p>
                    </div>
                </div>
                <h5 className='text-success fs-6'>see more</h5>


            </div>

        </div>
    );

}

export default ProductBoxes