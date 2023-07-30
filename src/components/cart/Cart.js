import React from 'react';
import './Cart.css';
import { useSelector } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { AiFillCaretLeft } from 'react-icons/ai';
import { AiFillCaretRight } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { removeProductFromCart } from '../../slices/userSlice.js';
import { incrementQuantityOfProduct } from '../../slices/userSlice.js';
import { decrementQuantityOfProduct } from '../../slices/userSlice.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom';

function Cart() {

    let productsList = useSelector(state => state.users)

    let dispatch = useDispatch()

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement('script')
            script.src = src
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }

    let navigate = useNavigate();

    const navigate12 = () => {
        navigate('/invoice')
    }

    const displayRazorpay = async () => {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?')
            return
        }

        let data;
        try {


            var body = {
                key: "rzp_test_pBr97twzdijv1J",
                secret: "OvOCDUDLguYCOOvlvaYqr2EF",
                amount: 40000

            };
            console.log(body);
            await axios.post("https://payment-gateway-02.herokuapp.com/order", body, {
                headers: { 'Access-Control-Allow-Origin': '*' }
            }
            ).then((response) => {
                // console.log(response);
                data = response.data;

            })
        } catch (err) {
            console.log(err)
        }

        const options = {
            key: 'rzp_test_pBr97twzdijv1J',
            amount: 40000,
            order_id: data,
            name: 'Payment',
            description: 'Thank you for nothing. Please give us some money',
            image: 'data:image/jpeg;base64,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',
            handler: async function (response) {
                // await setPayId(response.razorpay_payment_id);
                alert("Payment Successful! Thank You")
                console.log(response.razorpay_payment_id)
                console.log(response.razorpay_order_id)
                console.log(response.razorpay_signature)
                // await getPayment(response.razorpay_payment_id); 
            },
            prefill: {
                name: 'VamshiKeetha',
                email: 'VamshiKeetha123@gmail.com',
                contact: '9705943898'
            },
            timeout: 240,
            theme: { 'color': '#6bc7eb', 'backdrop_color': '#bde4eb' }
        }
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()

        navigate12()
    }

    const removeItem = (indexvalue) => {
        let actionObj = removeProductFromCart(indexvalue);
        dispatch(actionObj)
    }

    const incrementQuantity = (indexvalue) => {
        let actionObj = incrementQuantityOfProduct(indexvalue)

        dispatch(actionObj)
    }

    const decrementQuantity = (indexvalue) => {

        if (productsList[indexvalue].quantitySelected === 1) {
            let actionObj = removeProductFromCart(indexvalue);
            dispatch(actionObj)
        }
        else {
            let actionObj = decrementQuantityOfProduct(indexvalue)
            dispatch(actionObj)
        }
    }

    let [total, setTotal] = useState(0)

    useEffect(() => {
        let obj = productsList.reduce((sum, userObj) => sum + Number(userObj.subTotalCost), 0);
        console.log(obj)
        setTotal(obj)
    })


    return (
        <div>
            <div className='container mx-auto container mb-5 pb-5'>


                <h1 className='temp text-center'>Cart</h1>

                {
                    productsList.length == 0 && (
                        <h2 className='text-center'>Sorry There are no products to show</h2>
                    )

                }

                {
                    productsList.map((userObj, index) => <div className='col-12 bg-dark p-2 m-2'>
                        <div className=' row m-2 p-2 border bg-white'>
                            <div className='col-2'>
                                <img src={userObj.ProductImage1} className="img-fluid border"></img>
                            </div>

                            <div className='col-3'>
                                <h4 className="pt-2 fs-xs-6" >{userObj.model}</h4>

                                <p className='fs-6' >text one line</p>
                                <div className='pb-2'>
                                    <i className="bi bi-star-fill" style={{ color: "#FFA41C" }}></i>
                                    <i className="bi bi-star-fill" style={{ color: "#FFA41C" }}></i>
                                    <i className="bi bi-star-fill" style={{ color: "#FFA41C" }}></i>
                                    <i className="bi bi-star-fill" style={{ color: "#FFA41C" }}></i>
                                    <i className="bi bi-star-half" style={{ color: "#FFA41C" }}></i>
                                    <span> 4.5</span>
                                </div>

                                <span className='fw-bold fs-5' style={{ "color": "#c66" }} > Rs.{userObj.discountcost}</span>

                            </div>

                            <div className='col-3 text-center mt-5 mt-5'>
                                <br />
                                <div>
                                    <span onClick={() => decrementQuantity(index)}>
                                        <button className='btn border'><AiFillCaretLeft /></button>
                                    </span>
                                    <span className=' p-3 ps-3 pe-3'>
                                        {userObj.quantitySelected}
                                    </span>
                                    <span>
                                        <button className='btn border' onClick={() => incrementQuantity(index)}><AiFillCaretRight /></button>
                                    </span>
                                </div>


                            </div>

                            <div className='col-4 border text-center mt-5 mt-5'>
                                <br />
                                <p>{userObj.subTotalCost}</p>

                            </div>


                        </div>
                        <div className='text-end pe-2'>
                            <button className='btn btn-sm btn-danger fs-6' onClick={() => removeItem(index)}>Remove</button>
                        </div>
                    </div>
                    )}

                <h1 className='text-end'>Total : {total}</h1>


                <div className='text-end'>
                    <button className='btn btn-danger' type="button" onClick={displayRazorpay}>Buy Now</button>
                </div>







            </div>
            <Footer />
        </div>
    );
}

export default Cart