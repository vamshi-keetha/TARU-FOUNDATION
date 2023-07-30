import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Fashion.css';
import Footer from '../footer/Footer.js'
import Carouselcomponent from '../carouselComponent/CarouselComponent';
import BackToTop from '../backToTop/BackToTop';

function Fashion(){

    let carouselList = [
        {
            carouselImage1: "https://assets.ajio.com/cms/AJIO/WEB/25052022-D-unisex-topbannercarousel-p6-brands-4080.jpg",
            carouselImage2: "https://assets.ajio.com/cms/AJIO/WEB/25052022-D-unisex-topbannercarousel-p2-trends-brands-under599.jpg",
            carouselImage3: "https://assets.ajio.com/cms/AJIO/WEB/25052022-D-unisex-topbannercarousel-p3-dennislingo-min60.jpg"
        }
    ]

    return (
        <div>
            

            <Outlet />

            <Carouselcomponent productObj={carouselList[0]} />
            <div className='row justify-content-evenly'>
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-2'>
                    <Link to="/mens" className=''>
                    <div className='card mx-auto' style={{"width":"25rem"}} >
                        <img src="https://cdn3.boutique.humbleandrich.com/wp-content/uploads/2018/04/10003314/Best-Online-Fashion-Shopping-Sites-for-Men.jpg" className='img-fluid' style={{"height":"15rem"}} ></img>
                        <div className='card-body'>
                            <h5 className='card-title text-center text-dark'>Mens</h5>
                        </div>
                    </div>
                    </Link>
                </div>

                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-2'>
                    <Link to="womens">
                        <div className='card mx-auto' style={{"width":"25rem"}}>
                        <img src="https://widneydental.com/wp-content/themes/widney/img/facial/img1_x2.jpg" className='img-fluid' style={{"height":"15rem"}} ></img>
                            <div className='card-body'>
                                <h5 className='card-title text-center text-dark'>Womens</h5>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-2'>
                    <Link to="kids">
                        <div className='card mx-auto' style={{"width":"25rem"}}>
                        <img src="https://th.bing.com/th/id/R.b6db7571da09648553f25200097875b0?rik=dZAGFksg4VX3Pw&riu=http%3a%2f%2fwww.skiphop.com%2fon%2fdemandware.static%2f-%2fSites-Carters-Library%2fdefault%2fdw4d20f748%2fcontent%2fcarters%2fshopscarousel%2fcarters_mobile_shopscarousel_uniformshop_072817.jpg&ehk=y%2bSpk%2f2gQsPVb9PvJ10QlVZ9KG0UDhAMTt9HKROdtqQ%3d&risl=&pid=ImgRaw&r=0" className='img-fluid' style={{"height":"15rem"}}></img>
                            <div>
                                <h5 className='card-title text-center text-dark p-3'>Kids</h5>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
            
            
            
            
            <img src="https://assets.ajio.com/cms/AJIO/WEB/13052022-D-unisex-freedel-notiming.jpg" className="img-fluid mx-auto d-block p-3" ></img>
            
            <BackToTop />

            <div className='mt-5'>
                <Footer className="m-5" />
            </div>
            
        </div>
    )
}

export default Fashion