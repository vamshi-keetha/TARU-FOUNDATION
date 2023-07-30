import react from 'react';
import { BiHeart } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import './ProductItemCard.css';
import "bootstrap";
import { useState, useEffect } from 'react';
import { VscDebugBreakpointLog } from 'react-icons/vsc';
import { useForm } from 'react-hook-form';
import { addProductToCart } from '../../slices/userSlice.js';
import { useDispatch } from 'react-redux';

function ProductItemCard(props) {


  let [DisplayImage, setDisplayImage] = useState(props.productObj.ProductImage1);

  let [modalname1, setModalName1] = useState("modalname1" + props.productObj.id)
  let [modalnamehash1, setModalNamehash1] = useState("#" + "modalname1" + props.productObj.id)

  let [modalname2, setModalName2] = useState("modalname2" + props.productObj.id)
  let [modalnamehash2, setModalNamehash2] = useState("#" + "modalname2" + props.productObj.id)

  const updateDisplayImage = (temporary) => {
    setDisplayImage(temporary)
  }

  let [details, setDetails] = ([])
  const { register, handleSubmit, formState: { errors } } = useForm()

  let dispatch = useDispatch()


  const addToCart = (userObj) => {

    const temp = { subTotalCost: Number(userObj.quantitySelected) * Number(props.productObj.discountcost) };

    console.log(temp)

    let Obj = Object.assign(userObj, props.productObj, temp)

    // console.log(Obj)

    let actionObj = addProductToCart(Obj)
    dispatch(actionObj)

  }






  return (
    <div>
      <div className=''>
        <div className='card border-0 product mx-auto me-5 ms-5 me-sm-0 me-md-0 me-lg-0 me-xl-0 ms-sm-0 ms-md-0 ms-lg-0 ms-xl-0' >
          <div className='product-image'>
            <a href="#" className='image'>
              <img src={props.productObj.ProductImage1} className='pic-1'></img>
              <img src={props.productObj.ProductImage2} className='pic-2'></img>
            </a>

            {props.productObj.key == "pant" && (
              <div>
                <span className='discount'>Sale</span>
              </div>

            )}

            {props.productObj.key == "shirt" && (
              <div>
                <span className='discount bg-success rounded-pill'>New</span>
              </div>
            )}


            <a onClick={() => updateDisplayImage(props.productObj.ProductImage1)} className="cart fw-bold p-2" data-bs-toggle="modal" href={modalnamehash1} role="button" >Buy Now</a>

            <div className='links'>
              <ul>
                <li><a href="#"><BiHeart /></a></li>
                <li><a href="#"><BiSearch /></a></li>
              </ul>
            </div>
            <div className='content'>
              <span className='category'><a href="#">{props.productObj.key}</a></span>
              <h3 className='title'><a href="#">{props.productObj.model}</a></h3>

              {props.productObj.quantity == 0 && (
                <div className='price'>
                  Out of Stock!
                </div>
              )}


              {props.productObj.quantity != 0 && (
                <div className='price'>
                  <span className='text-decoration-line-through'>Rs.jewkrwk</span>Rs.{props.productObj.discountcost}
                </div>
              )}

            </div>
          </div>

        </div>

      </div>



      <div className="modal fade" id={modalname1} aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <div className='col-10 mx-auto border border-3 border-dark'>
                <img src={DisplayImage} style={{ "width": "100%", "height": "100%" }}></img>
              </div>


              <div className='row '>


                {DisplayImage != props.productObj.ProductImage1 && (
                  <>
                    <div className='col-md-4 col-sm-4 mx-auto col-4  mt-2'>
                      <a onClick={() => updateDisplayImage(props.productObj.ProductImage1)}><img src={props.productObj.ProductImage1} style={{ "width": "100%" }} className="ms-auto" ></img></a>
                    </div>
                  </>
                )}

                {DisplayImage != props.productObj.ProductImage2 && (
                  <>
                    <div className='col-md-4 col-sm-4 mx-auto col-4  mt-2'>
                      <a onClick={() => updateDisplayImage(props.productObj.ProductImage2)}><img src={props.productObj.ProductImage2} style={{ "width": "100%" }} className="ms-auto" ></img></a>
                    </div>
                  </>
                )}



                {DisplayImage != props.productObj.ProductImage3 && (
                  <>
                    <div className='col-md-4 col-sm-4 mx-auto col-4  mt-2'>
                      <a onClick={() => updateDisplayImage(props.productObj.ProductImage3)}><img src={props.productObj.ProductImage3} style={{ "width": "100%" }} className="ms-auto" ></img></a>
                    </div>
                  </>
                )}



                {DisplayImage != props.productObj.ProductImage4 && (
                  <>
                    <div className='col-md-4 col-sm-4 mx-auto col-4  mt-2'>
                      <a onClick={() => updateDisplayImage(props.productObj.ProductImage4)}><img src={props.productObj.ProductImage4} style={{ "width": "100%" }} className="ms-auto" ></img></a>
                    </div>
                  </>
                )}





              </div>

              <hr />

              {/* <div class="row">
            <div class="col-md-4">.col-md-4<br></br>kjdsfkjsdkl   111 </div>
            <div class="col-md-4 ">.col-md-4 .ms-auto sdjhdsjdgsfg b asdhkajhdk<p>djsfhdskhfjkjsdkfjlksdjlfkjlk xjhfsd kjdsfhksjdhf sjdkfhs</p></div>
          </div> */}

              <h4 className="pt-2" >{props.productObj.model}</h4>

              <p className='fs-6' >text one line</p>
              <div className='pb-2'>
                <i className="bi bi-star-fill" style={{ color: "#FFA41C" }}></i>
                <i className="bi bi-star-fill" style={{ color: "#FFA41C" }}></i>
                <i className="bi bi-star-fill" style={{ color: "#FFA41C" }}></i>
                <i className="bi bi-star-fill" style={{ color: "#FFA41C" }}></i>
                <i className="bi bi-star-half" style={{ color: "#FFA41C" }}></i>
                <span> 4.5</span>
              </div>



              {props.productObj.quantity == 0 && (
                <div className='fw-bold fs-4' style={{ "color": "#c66" }}>
                  Out of Stock!
                </div>
              )}

              {props.productObj.quantity <= 10 && props.productObj.quantity != 0 && (
                <div className='fw-bold fs-4' style={{ "color": "#c66" }}>
                  Huury up! only {props.productObj.quantity} are left
                </div>
              )}










              <div className='price'>
                <span className='text-decoration-line-through'>Rs.jewkrwk</span><span className='fw-bold fs-5' > Rs.{props.productObj.discountcost}</span>
              </div>


              <hr />
              <div>
                <p className='fs-6 fw-bold mt-4'>Available offers</p>

                <p className='text-break'><VscDebugBreakpointLog className='text-success fs-4' /><span><span className='fw-bold'>Special Price</span> Get extra 18% off (price inclusive of discount)T&C</span></p>

                <p className='text-break'><VscDebugBreakpointLog className='text-success fs-4' /><span><span className='fw-bold'>Partner Offer</span> Sign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*Know More</span></p>

                <p className='text-break'><VscDebugBreakpointLog className='text-success fs-4' /><span><span className='fw-bold'>Bank Offer</span> 5% Cashback on Flipkart Axis Bank CardT&C</span></p>

              </div>

              <hr />

              <p className='fs-6 fw-bold mt-4'>Description</p>

              <p className='text-break'>The Flipkart Help Centre page lists out various types of issues that you may have encountered so that there can be quick resolution and you can go back to shopping online. For example, you can get more information regarding order tracking, delivery date changes, help with returns (and refunds), and much more. The Flipkart Help Centre also lists out more information that you may need regarding Flipkart Plus, payment, shopping, and more. The page has various filters listed out on the left-hand side so that you can get your queries solved quickly, efficiently, and without a hassle. You can get the Flipkart Help Centre number or even access Flipkart Help Centre support if you need professional help regarding various topics. The support executive will ensure speedy assistance so that your shopping experience is positive and enjoyable. You can even inform your loved ones of the support page so that they can properly get their grievances addressed as well. Once you have all your queries addressed, you can pull out your shopping list and shop for all your essentials in one place. You can shop during festive sales to get your hands on some unbelievable deals online. This information is updated on 26-May-22</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" data-bs-target={modalnamehash2} data-bs-toggle="modal">Open second modal</button>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(addToCart)}>
        <div className="modal fade" id={modalname2} aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">


                {/* <select className="form-select" {...register("selectOptions")} aria-label="Default select example">
                  <option selected>Open this select Size</option>
                  <option value="1">S</option>
                  <option value="2">M</option>
                  <option value="3">L</option>
                </select> */}

                <div className="row g-3 align-items-center mt-2">
                  <div className="col-auto">
                    <label for="inputPassword6" className="col-form-label">Size</label>
                  </div>

                  <div className="col-auto">
                    <input type="number"  {...register("quantitySelected")} className="form-control" aria-describedby="passwordHelpInline" placeholder='0' />
                  </div>

                </div>

                <p>{props.productObj.model}</p>
              </div>

              <div className="modal-footer">
                <a className="btn btn-primary" data-bs-target={modalnamehash1} data-bs-toggle="modal">Back to first</a>

                <button className="btn btn-primary" type="submit" >Add To Cart</button>
              </div>

            </div>
          </div>
        </div>
      </form>


    </div>







  );
}

export default ProductItemCard