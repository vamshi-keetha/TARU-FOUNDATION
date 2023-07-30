import React from 'react';
import './Footer.css';

function Footer() {

  return (
    <div>

      <footer className="text-center text-lg-start  bg-dark text-light">

        <section
          className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
        >

          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>



          <div>
            <a href="/fashion" className="me-4 text-reset btn rounded-4 m-1"  >
              <i className="bi bi-facebook"></i>
            </a>
            <a href="" className="me-4 text-reset" >
              <i className="bi bi-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-github"></i>
            </a>
          </div>

        </section>



        <section className="">
          <div className="container text-center text-md-start mt-5">

            <div className="row mt-3">

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>E-commerce
                </h6>
                <p>
                 E-commerce has been registered under best plarform in the world
                </p>
              </div>



              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  Products
                </h6>
                <p>
                  <a href="#!" className="text-reset">Handicrafts</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Grocery</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Textiles</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Jewllery</a>
                </p>
              </div>



              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  Contact
                </h6>
                <p><i className="fas fa-home me-3"></i> India</p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p><i className="fas fa-phone me-3"></i> +91 1236457890</p>
                <p><i className="fas fa-print me-3"></i> +91 1236457890</p>
              </div>

            </div>

          </div>
        </section>



        <div className="text-center p-4" >
          © 2022 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">E-commerce.com</a>
        </div>

      </footer>
    </div>
  );
}

export default Footer