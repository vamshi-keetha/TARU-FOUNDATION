import { Routes, Route, NavLink, Navigate, Link } from 'react-router-dom';
import Home from './components/home/Home';
import SellersHome from './components/home/sellersHome'
import Fashion from './components/fashion/Fashion';
import Cart from './components/cart/Cart';
import Handicrafts from './components/fashion/handicrafts/Handicrafts';
import Grocery from './components/fashion/grocery/Grocery';
import Textiles from './components/fashion/textiles/Textiles';
import "bootstrap";
import LogIn from './components/logInSignUP/Login/Login.js';
import Signup from './components/logInSignUP/Signup/Signup.js';
import { useSelector } from 'react-redux';
import { clearLoginStatus } from './slices/customerSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { clearcartlocaldata } from './slices/userSlice.js';
import Favrouites from './components/favrouites/Favrouites';
import Invoice from './components/invoice/Invoice';


function App() {

  let productsList = useSelector(state => state.users)

  //get state from store
  let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
    (state) => state.customer
  );

  //get dispatch function
  let dispatch = useDispatch();

  //get navigate function
  let navigate = useNavigate();

  //logout user
  const userLogout = () => {

    const obj = { productsincart: productsList, username: userObj.username };

    console.log(obj)

    let response = axios.put('user-api/updatecartdata', obj)

    console.log(response)

    dispatch(clearcartlocaldata())

    localStorage.clear()
    dispatch(clearLoginStatus());
    console.log(obj)
    console.log(response)
    navigate('/login');

  }



  return (
    <div className="wholepage">

      {/* navbar */}
      <nav className="navbar navbar-expand-xl sticky-top navbar-dark bg-dark homepage mr-auto">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc-Cbkuo7seXnJwmhZ29WrVfTF4YI6FX0Y06MppY_8IacwuF2gK6THIcqMYdlPbwu1mnk&usqp=CAU"} className="bg-white me-3" style={{ width: "48px" }} ></img>
            E-commerce</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <div className="input-group rounded ">
                <input type="search" className="form-control rounded h-75 mt-2" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button className="input-group-text border-0 rounded-0 bg-dark text-white btn" id="search-addon">
                  <i className="bi bi-search"></i>
                </button>
              </div>



              {/* link for Home componenet */}
              <li className="nav-item">
                <NavLink className="nav-link" to="">Home</NavLink>
              </li>

              {/* link for Home Users */}
              <li className="nav-item">
                <NavLink className="nav-link" to="handicrafts">Handicrafts</NavLink>
              </li>



              {/* link for Home Contactus */}
              <li className="nav-item">
                <NavLink className="nav-link" to="textiles">Textiles</NavLink>
              </li>

              {/* link for Home Products */}
              <li className="nav-item">
                <NavLink className="nav-link" to="grocery">Grocery</NavLink>
              </li>


              <li className="nav-item">
                <NavLink className="nav-link" to="products">Sell</NavLink>
              </li>

              {/* link for Home Products */}
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="appliacnes"></NavLink>
              </li> */}

              {/* link for Home Products */}


              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><NavLink className="dropdown-item" to="invoice">Notifiactions</NavLink></li>
                  <li><NavLink className="dropdown-item" to="">24 X 7 Customer Carre</NavLink></li>
                  <li><NavLink className="dropdown-item" to="">Offers</NavLink></li>
                  <li><NavLink className="dropdown-item" to="">AboutUs</NavLink></li>
                </ul>
              </li>


              <li className="nav-item dropdown">

                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><NavLink className="dropdown-item" to="">My Profile</NavLink></li>
                  <li><a className="dropdown-item" href="#">Orders</a></li>
                  <li><a className="dropdown-item" href="#">Rewards</a></li>
                  <li><a className="dropdown-item" href="#">Giftcards</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Login/Signup</a></li>
                </ul>
              </li>



              <li className="nav-item">
                <NavLink className="nav-link" to="cart"><i class="bi bi-cart2 rounded border p-1 fs-5"></i></NavLink>
              </li>


              {isSuccess === true ? (
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="offcanvasExample">
                    <i className="bi bi-person-circle rounded border p-1" text-light></i>
                  </a>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink className="nav-link btn btn-light text-black p-2" to="login">LogIn</NavLink>
                </li>

              )}








            </ul>
          </div>
        </div>
      </nav>


      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div>
            <div className="vertical-nav bg-white" id="sidebar">
              <div className="py-4 px-3 mb-4 bg-light">
                <div className="media d-flex align-items-center"><img src={userObj.profileImg} alt="..." width="90" className="mr-3 rounded-circle img-thumbnail shadow-sm " />
                  <div className="media-body">
                    <h4 className="m-0"> {userObj.username}</h4>
                    <p className="font-weight-light text-muted mb-0"> Seller</p>
                  </div>
                </div>
              </div>

              <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">Profile</p>

              <ul className="nav flex-column bg-white mb-0">
                <li className="nav-item">
                  <Link to="/cart" className="nav-link text-dark font-italic bg-light">
                    <i className="fa fa-th-large mr-3 text-primary fa-fw"></i>
                    UserdashBoard
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-dark font-italic">
                    <i className="fa fa-address-card mr-3 text-primary fa-fw"></i>
                    Add Products
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-dark font-italic">
                    <i className="fa fa-cubes mr-3 text-primary fa-fw"></i>
                    View Products
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-dark font-italic">
                    <i className="fa fa-picture-o mr-3 text-primary fa-fw"></i>
                    Bookings Received
                  </a>
                </li>
              </ul>

              <p className="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">Common</p>

              <ul className="nav flex-column bg-white mb-0">
                <li className="nav-item">
                  <Link to="cart" className="nav-link text-dark font-italic">
                    <i className="fa fa-area-chart mr-3 text-primary fa-fw"></i>
                    Cart
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-dark font-italic">
                    <i className="fa fa-bar-chart mr-3 text-primary fa-fw"></i>
                    Offers Applicable
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-dark font-italic">
                    <i className="fa fa-pie-chart mr-3 text-primary fa-fw"></i>

                  </a>
                </li>
                <li className="nav-item">
                  <p className="nav-link btn btn-warning text-black p-2" onClick={() => userLogout()} >LogOut</p>
                </li>
              </ul>

            </div>
          </div>

        </div>
      </div>




      {/*Create Routes for components*/}
      <Routes>
        <Route path="" element={<Home />} />


        <Route path="grocery" element={<Grocery />} />
        <Route path="textiles" element={<Textiles />} />


        <Route path="products" element={<SellersHome />} />

        <Route path="cart" element={<Cart />} />

        <Route path="handicrafts" element={<Handicrafts />} />

        <Route path="favourites" element={<Favrouites />} />


        <Route path="invoice" element={<Invoice />} />





        <Route path="login" element={<LogIn />} />

        <Route path="signup" element={<Signup />} />
      </Routes>






    </div>
  );
}

export default App;
