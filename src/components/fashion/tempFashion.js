import react from 'react';
import ProductItemCard from '../productItemCard/ProductItemCard';
import { useState } from 'react';
import './Fashion.css';

function Fashion(){
    let ProductList12355=[
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm<h1>dshfsjhfj</h1>jhdsjfh",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
    ]


    let [ProductList,setProduct] = useState([
        {
            ProductImage1:"https://assets.ajio.com/medias/sys_master/root/20211207/Qwg7/61af8386aeb2690110fca04a/-473Wx593H-462845451-black-MODEL.jpg",
            ProductImage2:"https://assets.ajio.com/medias/sys_master/root/20211207/EOWL/61af8386aeb2690110fc9fc8/-473Wx593H-462845451-black-MODEL6.jpg",
            originalcost:500,
            discountcost:400,
            key:"shirt",
            model:"us polo4tg4t",
            color:"red",
            catergory:"men",
        },
        {
            ProductImage1:"https://assets.ajio.com/medias/sys_master/root/20211207/Qwg7/61af8386aeb2690110fca04a/-473Wx593H-462845451-black-MODEL.jpg",
            ProductImage2:"https://assets.ajio.com/medias/sys_master/root/20211207/EOWL/61af8386aeb2690110fc9fc8/-473Wx593H-462845451-black-MODEL6.jpg",
            originalcost:500,
            discountcost:400,
            key:"pant",
            model:"us polo43tgt43",
            color:"red",
            catergory:"men",
        },
        {
            ProductImage1:"https://assets.ajio.com/medias/sys_master/root/20211207/Qwg7/61af8386aeb2690110fca04a/-473Wx593H-462845451-black-MODEL.jpg",
            ProductImage2:"https://assets.ajio.com/medias/sys_master/root/20211207/EOWL/61af8386aeb2690110fc9fc8/-473Wx593H-462845451-black-MODEL6.jpg",
            originalcost:500,
            discountcost:400,
            key:"shirt",
            model:"us polo4tg434",
            color:"red",
            catergory:"men",
        },
        {
            ProductImage1:"https://assets.ajio.com/medias/sys_master/root/20211207/Qwg7/61af8386aeb2690110fca04a/-473Wx593H-462845451-black-MODEL.jpg",
            ProductImage2:"https://assets.ajio.com/medias/sys_master/root/20211207/EOWL/61af8386aeb2690110fc9fc8/-473Wx593H-462845451-black-MODEL6.jpg",
            originalcost:500,
            discountcost:400,
            key:"pant",
            model:"us polo34tgrgg",
            color:"red",
            catergory:"men",
        },
        {
            ProductImage1:"https://assets.ajio.com/medias/sys_master/root/20211207/Qwg7/61af8386aeb2690110fca04a/-473Wx593H-462845451-black-MODEL.jpg",
            ProductImage2:"https://assets.ajio.com/medias/sys_master/root/20211207/EOWL/61af8386aeb2690110fc9fc8/-473Wx593H-462845451-black-MODEL6.jpg",
            originalcost:500,
            discountcost:400,
            key:"shirt",
            model:"us polo4trgre",
            color:"red",
            catergory:"men",
        },
        {
            ProductImage1:"https://assets.ajio.com/medias/sys_master/root/20211207/Qwg7/61af8386aeb2690110fca04a/-473Wx593H-462845451-black-MODEL.jpg",
            ProductImage2:"https://assets.ajio.com/medias/sys_master/root/20211207/EOWL/61af8386aeb2690110fc9fc8/-473Wx593H-462845451-black-MODEL6.jpg",
            originalcost:500,
            discountcost:400,
            key:"shirt",
            model:"us polofdg45",
            color:"red",
            catergory:"men",
        },
        {
            ProductImage1:"https://assets.ajio.com/medias/sys_master/root/20211207/Qwg7/61af8386aeb2690110fca04a/-473Wx593H-462845451-black-MODEL.jpg",
            ProductImage2:"https://assets.ajio.com/medias/sys_master/root/20211207/EOWL/61af8386aeb2690110fc9fc8/-473Wx593H-462845451-black-MODEL6.jpg",
            originalcost:500,
            discountcost:400,
            key:"pant",
            model:"us polo/lk/lk",
            color:"red",
            catergory:"men",
        },
        {
            ProductImage1:"https://assets.ajio.com/medias/sys_master/root/20211207/Qwg7/61af8386aeb2690110fca04a/-473Wx593H-462845451-black-MODEL.jpg",
            ProductImage2:"https://assets.ajio.com/medias/sys_master/root/20211207/EOWL/61af8386aeb2690110fc9fc8/-473Wx593H-462845451-black-MODEL6.jpg",
            originalcost:500,
            discountcost:400,
            key:"shirt",
            model:"us polo4tt43",
            color:"red",
            catergory:"men",
        },
        {
            ProductImage1:"https://assets.ajio.com/medias/sys_master/root/20211207/Qwg7/61af8386aeb2690110fca04a/-473Wx593H-462845451-black-MODEL.jpg",
            ProductImage2:"https://assets.ajio.com/medias/sys_master/root/20211207/EOWL/61af8386aeb2690110fc9fc8/-473Wx593H-462845451-black-MODEL6.jpg",
            originalcost:500,
            discountcost:400,
            key:"shirt",
            model:"us polo4g544gr",
            color:"red",
            catergory:"men",
        },
        {
            ProductImage1:"https://assets.ajio.com/medias/sys_master/root/20211207/Qwg7/61af8386aeb2690110fca04a/-473Wx593H-462845451-black-MODEL.jpg",
            ProductImage2:"https://assets.ajio.com/medias/sys_master/root/20211207/EOWL/61af8386aeb2690110fc9fc8/-473Wx593H-462845451-black-MODEL6.jpg",
            originalcost:500,
            discountcost:400,
            key:"pant",
            model:"us polo54grhgd",
            color:"red",
            catergory:"men",
        },
        {
            ProductImage1:"https://assets.ajio.com/medias/sys_master/root/20211207/Qwg7/61af8386aeb2690110fca04a/-473Wx593H-462845451-black-MODEL.jpg",
            ProductImage2:"https://assets.ajio.com/medias/sys_master/root/20211207/EOWL/61af8386aeb2690110fc9fc8/-473Wx593H-462845451-black-MODEL6.jpg",
            originalcost:500,
            discountcost:400,
            key:"pant",
            model:"us polodfgdfg",
            color:"red",
            catergory:"men",
        },
        {
            ProductImage1:"https://assets.ajio.com/medias/sys_master/root/20211207/Qwg7/61af8386aeb2690110fca04a/-473Wx593H-462845451-black-MODEL.jpg",
            ProductImage2:"https://assets.ajio.com/medias/sys_master/root/20211207/EOWL/61af8386aeb2690110fc9fc8/-473Wx593H-462845451-black-MODEL6.jpg",
            originalcost:500,
            discountcost:400,
            key:"pant",
            model:"us polo233",
            color:"red",
            catergory:"men",
        }

    ]);
    
let [name,setName]=useState("shirts")

let [product,setpro] = useState([])

const filterproducts=(text)=>{
    const temp = ProductList.filter((product)=>product.key==text);
    setpro(temp);
    setName(text)
}







    return (
        <div>

            <div className='row text-center'>
                <div className='col'>
                    <a href='/mens' className='btn btn-primary'>Mens</a>
                </div>

                <div className='col'>
                    <a href='/mens' className='btn btn-primary'>Womens</a>
                </div>

                <div className='col'>
                    <a href='/mens' className='btn btn-primary'>Kids</a>
                </div>

            </div>



{/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button>
<div className='col-xl-3'>
<div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Colored with scrolling</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>
</div>




 


<div className="offcanvas offcanvas-start offcanvas-expand-sm" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
  </div>
</div> */}



<div className='row'>
<div className='col-lg-2 bg-light'>

<nav className="vertical-nav sticky-top navbar-expand-lg  navbar-light bg-light">
  <div className="container-fluid ">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      <a className="navbar-brand" href="#">Navbar</a>
    </button>
    
    
    <div className="collapse navbar-collapse come" id="navbarNavDropdown">
      <ul className="navbar-nav flex-column">



        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={()=>filterproducts('all')}>All</a>
        </li>
        <li className="nav-item">
          <btn className="nav-link" onClick={()=>filterproducts('shirt')}>Shirts</btn>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>filterproducts('pant')}>Pants</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">T-shirts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">shoes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">sandals</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">slippers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Perfumes</a>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>


          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>



<div className='col-md-10'>

    <div className='row text-center'>
                <div className='col'>
                    <a href='/mens' className='btn btn-primary'>Mens</a>
                </div>

                <div className='col'>
                    <a href='/mens' className='btn btn-primary'>Womens</a>
                </div>

                <div className='col'>
                    <a href='/mens' className='btn btn-primary'>Kids</a>
                </div>

            </div>

    <h1 className='text-center'>{name}</h1>
       
            {product.length > 1 &&(
                <div className='row g-3'>
                        {product.map(pro=>(<div className="col-sm-6 col-xl-3 col-md-6 col-lg-4 col-xs-6"><ProductItemCard productObj={pro} /></div>))}
                </div>
            )}
      

            {product.length<1 &&(
                <div>
                    <div className="row  carouselboxes">

                


<div className="col-sm-6 col-xl-3 col-md-6 col-lg-4 col-xs-6">
    <ProductItemCard productObj={ProductList[0]} />
</div>

<div className="col-sm-6 col-xl-3 col-md-6 col-lg-4 col-xs-3">
    <ProductItemCard productObj={ProductList[1]} />
</div>

<div className="col-sm-6 col-xl-3 col-md-6 col-lg-4 col-xs-3">
    <ProductItemCard productObj={ProductList[2]} />
</div>

<div className="col-sm-6 col-xl-3 col-md-6 col-lg-4 col-xs-3">
    <ProductItemCard productObj={ProductList[3]} />
</div>

</div>

<div className="row m-3 carouselboxes">
<div className="col-sm-3">
    <ProductItemCard productObj={ProductList[4]} />
</div>

<div className="col-sm-3">
    <ProductItemCard productObj={ProductList[5]} />
</div>

<div className="col-sm-3">
    <ProductItemCard productObj={ProductList[6]} />
</div>

<div className="col-sm-3">
    <ProductItemCard productObj={ProductList[7]} />
</div>

</div>


<div className="row m-3 carouselboxes">
<div className="col-sm-3">
    <ProductItemCard productObj={ProductList[8]} />
</div>

<div className="col-sm-3">
    <ProductItemCard productObj={ProductList[9]} />
</div>

<div className="col-sm-3">
    <ProductItemCard productObj={ProductList[10]} />
</div>

<div className="col-sm-3">
    <ProductItemCard productObj={ProductList[11]} />
</div>

</div>

<div className="row m-3 carouselboxes">
<div className="col-sm-3">
    <ProductItemCard productObj={ProductList[8]} />
</div>

<div className="col-sm-3">
    <ProductItemCard productObj={ProductList[9]} />
</div>

<div className="col-sm-3">
    <ProductItemCard productObj={ProductList[10]} />
</div>

<div className="col-sm-3">
    <ProductItemCard productObj={ProductList[11]} />
</div>

</div>
                </div>
            )}

            



            
        </div>

        </div>
        </div>
    )
};

export default Fashion