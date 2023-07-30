import axios from 'axios';
import React from 'react';
import { Form,Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import "./Home.css";
import Footer from '../footer/Footer';

function SellersHome() {


  let [products,setProducts]=useState([])

  useEffect(()=>{
    getData()
  },[])


  const getData=async()=>{
    let res=await axios.get("http://localhost:4000/products")
    setProducts(res.data)
  }


  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //state for image
  let [img,setImg] = useState(null);

  //on image select
  const onImageSelect = (event) => {

    setImg(event.target.files[0]);
    //setFile(event.target.files[0])
    // console.log(event.target.files[0]);
    // console.log(event);
  };

  const  onFormSubmit=async(prodObj)=>{

    let res=await axios.post("http://localhost:4000/products",prodObj)

    let massage=res.data;
    alert("product created")

  
    // let formData = new FormData();
    // formData.append("userObj",JSON.stringify(userObj));
    // formData.append("photo",img);
    // formData.append("productsincart",JSON.stringify([]));

    // console.log(formData,11111);
    
    // //httppost request(using axxios)
    // axios.post('http://localhost:4000/user-api/createproduct',formData)
    // .then((response) => {
    //   console.log(response);
    //   alert(response.data.message);
      
    //   //if user  created
    //   if(response.data.message==='New user created successfully')
    //   {
    //     //navigate to login
    //     navigate('/login');
    //   }
    // })
    // .catch((error) => {
    //     console.log(error)
    //     alert("Something went wrong in creating user")
    //   })
  }

  

    return(
        <div className='container-fluid text-center mt-5'>
          
            {/* <Form className='w-50 bg-light shadow-lg rounded pt-5 pb-5 mx-auto mb-3 mt-3 ' onSubmit={handleSubmit(onFormSubmit)}>

            <div className='display-5 mb-3 text-center text-dark' id="upload">Upload Product</div>


           
            <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicImage">
                <Form.Label>Select Image</Form.Label>
                <Form.Control type="file" {...register("Photo",{required:true})} onChange={(event => onImageSelect(event))} />
               
                {errors.Photo&&<p className='text-danger'>*Profile Image is required</p>}
              </Form.Group>

            <Form.Group className="mb-3 w-75 mx-auto">
                <Form.Label>Category</Form.Label>
                <Form.Select >
                    <option disabled>Choose a Category</option>
                    <option>Handicrafts</option>
                    <option>Textiles</option>
                    <option>Grocery</option>
                </Form.Select>
            </Form.Group>
            
              
              <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicProName">
                <Form.Label>ProductName</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Name" {...register("productName",{required:true})} />
              
                {errors.productName&&<p className='text-danger'>*Product Name is required</p>}
              </Form.Group>

              <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter Price" {...register("price",{required:true})} />
               
                {errors.price&&<p className='text-danger'>*Price is required</p>}
              </Form.Group>


              

              
              <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicDescription">
                <Form.Label>Product Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter Description"  {...register("description",{required:true})}/>
               
                {errors.description&&<p className='text-danger'>*Description is required</p>}
              </Form.Group>

              

              
              

              <Button variant="primary" type="submit" className="d-block mx-auto ">
                  Upload Product
              </Button>
            </Form> */}

            <h1 className='text-info'>Create Products</h1>
            <form  className='w-50 mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
      <input type="text" {...register("productName")} id="" className='form-control mb-3' placeholder='product Name' ></input>
      <input type="number" {...register("productprice")} id="" className='form-control mb-3' placeholder='product price' ></input>
      <input type="text" {...register("productImage")} id="" className='form-control mb-3' placeholder='product Image url' ></input>    
           <button type='submit' className='btn btn-warning'>Add products</button> 
            </form>

            <table className='table'>

            <thead>
              <th className='hii'>name</th>
              <th className='hii'>price</th>
              <th className='hii'>image</th>
            </thead>
            <tbody>
              {
                products.map(prodObj=><tr key={prodObj.id}>
             <td>{prodObj.productName}</td>
             <td>{prodObj.productprice}</td>
             <td>
              <img src={prodObj.productImage} alt='' />
              </td>
                </tr>)
              }
            </tbody>
            </table>
            <Footer className="container-fluid"></Footer>
        </div>
    )
}

export default SellersHome;