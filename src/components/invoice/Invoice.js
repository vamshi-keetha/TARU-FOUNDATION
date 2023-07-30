import React from 'react'
import './Invoice';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Footer from '../footer/Footer';

function Invoice() {

    let productsList = useSelector(state => state.users);

    let [total, setTotal] = useState(0)

    useEffect(() => {
        let obj = productsList.reduce((sum, userObj) => sum + Number(userObj.subTotalCost), 0);
        console.log(obj)
        setTotal(obj)
    })

    return (
        <div className='pb-5'>
            <div className='Container'>
                <div className='col-sm-6 mx-auto bg-white m-5 p-5'>
                    <h1 className='text-center'>Tax Invoice</h1>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Product Id</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Sub-Cost</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                productsList.map((userObj, index) => <tr>
                                    <td>{userObj.id}</td>
                                    <td>{userObj.model}</td>
                                    <td>{userObj.quantitySelected}</td>
                                    <td>{userObj.subTotalCost}</td>
                                </tr>
                                )}
                        </tbody>
                    </table>
                    <h4 className='text-end pt-5'>Total : {total}</h4>

                    <p className='text-center'>Payment Status : Success</p>
                    <p className='text-center'>Transaction Id : <span className='fw-bold'>POE14563SDD7896</span></p>
                    <p className='text-center'>Order Id : <span className='fw-bold'>TSHJ156DDS</span></p>

                </div>



            </div>
            <Footer />
        </div>
    )
}

export default Invoice