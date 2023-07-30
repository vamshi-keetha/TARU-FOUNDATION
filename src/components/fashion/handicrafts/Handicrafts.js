import react from 'react';
import ProductItemCard from '../../productItemCard/ProductItemCard.js';
import { useState,useEffect} from 'react';
import './Handicrafts.css';
import Footer from '../../footer/Footer.js';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Handicrafts(){

    const { register , handleSubmit , formState:{errors} , reset} = useForm();

    

    

    let [ProductList,setProduct] = useState([
        {
            ProductImage1:"https://cdn.discordapp.com/attachments/989473099386847237/990295409945641020/unknown.png",
            ProductImage2:"https://cdn.discordapp.com/attachments/989473099386847237/990295543332864050/opop.png",
            originalcost:500,
            discountcost:1400,
            key:"jewllery",
            model:"jewllery-58",
            color:"red",
            catergory:"men",
            id:"789886",
            quantity:100,
            company:"Rathod"
        },
        {
            ProductImage1:"https://cdn.discordapp.com/attachments/989473099386847237/990295409945641020/unknown.png",
            ProductImage2:"https://cdn.discordapp.com/attachments/989473099386847237/990295543332864050/opop.png",
            originalcost:500,
            discountcost:800,
            key:"pottery",
            model:"pottery-58",
            color:"red",
            catergory:"men",
            id:"78535",
            quantity:100,
            company:"Rathod"
        },
        {
            ProductImage1:"https://cdn.discordapp.com/attachments/989473099386847237/990295409945641020/unknown.png",
            ProductImage2:"https://cdn.discordapp.com/attachments/989473099386847237/990295543332864050/opop.png",
            originalcost:500,
            discountcost:600,
            key:"pottery",
            model:"pottery-58",
            color:"red",
            catergory:"men",
            id:"789451",
            quantity:100,
            company:"Rathod"
        },
        {
            ProductImage1:"https://cdn.discordapp.com/attachments/989473099386847237/990295409945641020/unknown.png",
            ProductImage2:"https://cdn.discordapp.com/attachments/989473099386847237/990295543332864050/opop.png",
            originalcost:500,
            discountcost:2400,
            key:"pottery",
            model:"pottery-58",
            color:"red",
            catergory:"men",
            id:"7894552",
            quantity:100,
            company:"Rathod"
        },
        {
            ProductImage1:"https://cdn.discordapp.com/attachments/989473099386847237/990295409945641020/unknown.png",
            ProductImage2:"https://cdn.discordapp.com/attachments/989473099386847237/990295543332864050/opop.png",
            originalcost:500,
            discountcost:8400,
            key:"pottery",
            model:"pottery-58",
            color:"red",
            catergory:"men",
            id:"7894575",
            quantity:100,
            company:"Rathod"
        },
        {
            ProductImage1:"https://cdn.discordapp.com/attachments/989473099386847237/990295409945641020/unknown.png",
            ProductImage2:"https://cdn.discordapp.com/attachments/989473099386847237/990295543332864050/opop.png",
            originalcost:500,
            discountcost:2400,
            key:"dolls",
            model:"dolls-58",
            color:"red",
            catergory:"men",
            id:"7894556",
            quantity:100,
            company:"Rathod"
        },
        {
            ProductImage1:"https://cdn.discordapp.com/attachments/989473099386847237/990295409945641020/unknown.png",
            ProductImage2:"https://cdn.discordapp.com/attachments/989473099386847237/990295543332864050/opop.png",
            originalcost:500,
            discountcost:500,
            key:"pottery",
            model:"pottery-58",
            color:"red",
            catergory:"men",
            id:"7894578",
            quantity:100,
            company:"Rathod"
        },
        {
            ProductImage1:"https://cdn.discordapp.com/attachments/989473099386847237/990295409945641020/unknown.png",
            ProductImage2:"https://cdn.discordapp.com/attachments/989473099386847237/990295543332864050/opop.png",
            originalcost:500,
            discountcost:1000,
            key:"dolls",
            model:"dolls-58",
            color:"red",
            catergory:"men",
            id:"7894502",
            quantity:100,
            company:"Rathod"
        },
        {
            ProductImage1:"https://cdn.discordapp.com/attachments/989473099386847237/990295409945641020/unknown.png",
            ProductImage2:"https://cdn.discordapp.com/attachments/989473099386847237/990295543332864050/opop.png",
            originalcost:500,
            discountcost:400,
            key:"pottery",
            model:"pottery-58",
            color:"red",
            catergory:"men",
            id:"7894569",
            quantity:100,
            company:"Rathod"
        },
        {
            ProductImage1:"https://cdn.discordapp.com/attachments/989473099386847237/990295409945641020/unknown.png",
            ProductImage2:"https://cdn.discordapp.com/attachments/989473099386847237/990295543332864050/opop.png",
            originalcost:500,
            discountcost:1800,
            key:"pottery",
            model:"pottery-58",
            color:"red",
            catergory:"men",
            id:"78945714",
            quantity:100,
            company:"Rathod"
        },
        {
            ProductImage1:"https://cdn.discordapp.com/attachments/989473099386847237/990295409945641020/unknown.png",
            ProductImage2:"https://cdn.discordapp.com/attachments/989473099386847237/990295543332864050/opop.png",
            originalcost:500,
            discountcost:100,
            key:"pottery",
            model:"pottery-58",
            color:"red",
            catergory:"men",
            id:"78945036",
            quantity:100,
            company:"Rathod"
        },
        {
            ProductImage1:"https://cdn.discordapp.com/attachments/989473099386847237/990295409945641020/unknown.png",
            ProductImage2:"https://cdn.discordapp.com/attachments/989473099386847237/990295543332864050/opop.png",
            originalcost:500,
            discountcost:700,
            key:"bags",
            model:"bags-58",
            color:"red",
            catergory:"men",
            id:"78945780",
            quantity:100,
            company:"Rathod"
        },
        {
            ProductImage1:"https://cdn.discordapp.com/attachments/989473099386847237/990295409945641020/unknown.png",
            ProductImage2:"https://cdn.discordapp.com/attachments/989473099386847237/990295543332864050/opop.png",
            originalcost:500,
            discountcost:400,
            key:"pottery",
            model:"pottery-58",
            color:"red",
            catergory:"men",
            id:"7894542",
            quantity:100,
            company:"Rathod"
        },
        {
            ProductImage1:"https://cdn.discordapp.com/attachments/989473099386847237/990295409945641020/unknown.png",
            ProductImage2:"https://cdn.discordapp.com/attachments/989473099386847237/990295543332864050/opop.png",
            originalcost:500,
            discountcost:650,
            key:"bags",
            model:"bags-58",
            color:"red",
            catergory:"men",
            id:"7894523",
            quantity:100,
            company:"Rathod"
        },

        

    ]);
    
let [name,setName]=useState("all")

let [product,setPro] = useState(ProductList)

let [shirtFilter,setShirtFilter] = useState(["US polo","Allen Solly","Flying Machine","Indian Terran","Net Play"]);

let [pantFilter,setPantFilter] = useState(["US polo","Allen Solly","Flying Machine","Indian Terran","Net Play"]);

const filterproducts=(text)=>{
    reset()
    setFiltersSelected(0);
    if(text==="all"){
        setPro(ProductList)
    }
    else{
        const temp = ProductList.filter((product)=>product.key==text);
        setPro(temp);
    }
    setName(text)
}

let [filtersSelected,setFiltersSelected] = useState(0)

let [productsFiltered,setProductsFiltered] = useState([])

const update = () =>{
    
    setProductsFiltered([])
}

const onFormSubmit = (filterData) => {
    update()
    let temp =[]
    setProductsFiltered(temp)
    console.log(productsFiltered)
    setFiltersSelected(filterData.appliedFilter.length)
    let object = []
    for (let key in filterData.appliedFilter){
            let temp = filterData.appliedFilter[key]
            
            if(temp==="500"){
                const filtered1 = product.filter((user) => user.discountcost<=500);
                object = object.concat(filtered1)
            }
            else if(temp==="500-1000"){
                const filtered2 = product.filter((user) => user.discountcost>500 && user.discountcost<=1000);
                object = object.concat(filtered2)
            }
            else if(temp==="1000-1500"){
                const filtered3 = product.filter((user) => user.discountcost>1000 && user.discountcost<=1500);
                object = object.concat(filtered3)
            }
            else if(temp==="1500-2000"){
                const filtered4 = product.filter((user) => user.discountcost>1500 && user.discountcost<=2000);
                object = object.concat(filtered4)
            }
            else if(temp==="2000-2500"){
                const filtered5 = product.filter((user) => user.discountcost>2000 && user.discountcost<=2500);
                object = object.concat(filtered5)
            }
            else{
                const filtered6 = product.filter((user) => temp===user.company);
                object = object.concat(filtered6)
            }
    }
    setProductsFiltered(object)
}


const clearData = ()=> {
    setFiltersSelected(0);
    reset()
}




    return (
        <div>

            {/* <div className='row text-center'>
                <div className='col'>
                    <a href='/mens' className='btn btn-primary'>Mens</a>
                </div>

                <div className='col'>
                    <a href='/mens' className='btn btn-primary'>Womens</a>
                </div>

                <div className='col'>
                    <a href='/mens' className='btn btn-primary'>Kids</a>
                </div>

            </div> */}



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



<div className='row pb-5'>
<div className='col-lg-2 bg-light'>

<nav className="vertical-nav navbar-expand-lg  navbar-light bg-light">
  <div className="container-fluid ">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      <a className="navbar-brand" href="#">Navbar</a>
    </button>
    {/* <p href='#' className='text-md-end'>Category</p> */}
    
    <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul className="navbar-nav flex-column">

    

        <li className="nav-item">
          <a className="nav-link" aria-current="page" onClick={()=>filterproducts('all')}>All</a>
        </li>
        <li className="nav-item">
          <btn className="nav-link" onClick={()=>filterproducts('pottery')}>Pottery</btn>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>filterproducts('bags')}>Bags</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>filterproducts('dolls')}>Wooden Dolls</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>filterproducts('artifacts')}>Artifacts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>filterproducts('jewllery')}>Jewllery</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</div>



<div className='col-md-10'>

   
    
<h1 className='text-center'>Handicrafts</h1>

    <button className="btn btn-danger text-end" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Sort</button>

<div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Sort</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>

  

  

  <form onSubmit={handleSubmit(onFormSubmit)} >

  <div className=''>
      <button className='btn btn-primary me-5 ms-5' type="submit">
            Apply
      </button>
      <span className='btn btn-primary' onClick={() => clearData()}>
          Reset
      </span>
  </div>

  <div className="offcanvas-body">

  <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Prices</h5>
    

  <div class="form-check ms-5">
  <input class="form-check-input" type="checkbox" id="flexCheckDefault" value="500" {...register("appliedFilter")} />
  <label class="form-check-label" for="flexCheckDefault">
    Below Rs.500
  </label>
</div>

<div class="form-check ms-5">
  <input class="form-check-input" type="checkbox" id="flexCheckDefault" value="500-1000" {...register("appliedFilter")} />
  <label class="form-check-label" for="flexCheckDefault" >
  Rs.500 - 1000
  </label>
</div>

<div class="form-check ms-5">
  <input class="form-check-input" type="checkbox" id="flexCheckDefault" value="1000-1500" {...register("appliedFilter")} />
  <label class="form-check-label" for="flexCheckDefault" >
    Rs.1000 - 1500
  </label>
</div>

<div class="form-check ms-5">
  <input class="form-check-input" type="checkbox" id="flexCheckDefault" value="1500-2000" {...register("appliedFilter")} />
  <label class="form-check-label" for="flexCheckDefault" >
    Rs.1500 - 2000
  </label>
</div>

<div class="form-check ms-5">
  <input class="form-check-input" type="checkbox" id="flexCheckDefault" value="2000-2500" {...register("appliedFilter")} />
  <label class="form-check-label" for="flexCheckDefault" >
    Rs.2000 - 2500
  </label>
</div>











  </div>
  </form>


</div>

                { (filtersSelected!=0 && productsFiltered.length >= 1) &&(<div>

                <h1 className='text-center'>{name} (filters)</h1>
                <div className='row g-3'>
                    {productsFiltered.map(pro=>(<div className="col-sm-6 col-xl-3 col-md-6 col-lg-4 col-xs-6"><ProductItemCard productObj={pro} /></div>))}
                </div>
                </div>
                )}

                { (filtersSelected!=0 && productsFiltered.length < 1) &&(<div>

                <h1 className='text-center'>No Items To for The filters applied by you</h1>
                </div>
                
                )}


       
            { (filtersSelected==0 && product.length >= 1) &&(<div>

                    <h1 className='text-center'>{name}</h1>
                <div className='row g-3'>
                        {product.map(pro=>(<div className="col-sm-6 col-xl-3 col-md-6 col-lg-4 col-xs-6"><ProductItemCard productObj={pro} /></div>))}
                </div>
                </div>
            )}
      

            {(filtersSelected==0 && product.length<1) &&(
                <div>
                    <h1 className='text-center'>{name}</h1>

                    <h1>Sorry, We don't ahve any {name}</h1>
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

export default Handicrafts