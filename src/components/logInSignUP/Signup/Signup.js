import Recat from 'react';
import './Signup.css';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../../footer/Footer';

function Signup() {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //state for image
  let [img, setImg] = useState(null);

  //on image select
  const onImageSelect = (event) => {

    setImg(event.target.files[0]);
    //setFile(event.target.files[0])
    // console.log(event.target.files[0]);
    // console.log(event);
  };

  const onFormSubmit = (userObj) => {


    userObj = Object.assign(userObj, { "productsincart": [] })

    //create FormData object
    let formData = new FormData();
    //apend values to it
    formData.append("userObj", JSON.stringify(userObj));
    formData.append("photo", img);


    //httppost request(using axxios)
    axios.post('http://localhost:4000/user-api/createuser', formData)
      .then((response) => {
        console.log(response);
        alert(response.data.message);

        //if user  created
        if (response.data.message === 'New user created successfully') {
          //navigate to login
          navigate('/login');
        }
      })
      .catch((error) => {
        console.log(error)
        alert("Something went wrong in creating user")
      })
  }


  return (
    <div>
      <Form className='w-50 bg-light shadow-lg rounded pt-5 pb-5 mx-auto mb-3 mt-3 ' onSubmit={handleSubmit(onFormSubmit)}>


        <div className='display-5 mb-3 text-center text-dark' id="upload">Signup</div>


        {/*Username*/}
        <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" {...register("username", { required: true })} />
          {/*Error validation message for username*/}
          {errors.username && <p className='text-danger'>*Username is required</p>}
        </Form.Group>

        {/*Password*/}
        <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" {...register("password", { required: true })} />
          {/*Error validation message for password*/}
          {errors.password && <p className='text-danger'>*Password is required</p>}
        </Form.Group>

        {/*Email*/}
        <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Enter Email" {...register("email", { required: true })} />
          {/*Error validation message for email*/}
          {errors.email && <p className='text-danger'>*Email is required</p>}
        </Form.Group>

        {/*City*/}
        <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicPassword">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter City" {...register("city", { required: true })} />
          {/*Error validation message for city*/}
          {errors.city && <p className='text-danger'>*City is required</p>}
        </Form.Group>

        {/*Profile Image*/}
        <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicPassword">
          <Form.Label>Select Image</Form.Label>
          <Form.Control type="file" {...register("Photo", { required: true })} onChange={(event => onImageSelect(event))} />
          {/*Error validation message for city*/}
          {errors.Photo && <p className='text-danger'>*Profile Image is required</p>}
        </Form.Group>

        <Button variant="primary" type="submit" className="d-block mx-auto">
          Signup
        </Button>

        <p className='text-center pt-2'>Already have an Account? <Link to="/login">Login</Link></p>
      </Form>

      <Footer />
    </div>
  )

}

export default Signup