import React from 'react';
import { Outlet } from 'react-router-dom';
import './LogInSignUp';

function LogInSignUp () {

    
    return (
        <div>
            <h1>login signup</h1>

            <div className='mx-auto text-center row  col-xl-6'>
                <div className='col-md-6 bg-secondary'>
                    <button className='btn btn-secondary'>Customer</button>
                </div>

                
            </div>
            <div className='mx-auto border border-danger container m-5 p-5 col-xl-6 text-end'>
                    <button className='btn btn-primary'>Admin</button>
                </div>

            <Outlet />
            

        </div>
    )
}

export default LogInSignUp