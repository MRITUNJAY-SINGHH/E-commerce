import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
   return (
      <>
         <section className='home-wrapper-1'>
            <div className='container-xxl custom-width'>
               <div className='row'>
                  <div className='col-12 '>
                     <div
                        id='mainBannerCarousel'
                        className='carousel slide'
                        data-bs-ride='carousel'
                        data-bs-interval='2000'
                     >
                        <div className='carousel-inner'>
                           <div className='carousel-item active'>
                              <img
                                 src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/78f0374b0191d762.jpg?q=100'
                                 className='d-block w-100 custom-carousel-image' // Apply the custom CSS class
                                 alt='Image 1'
                              />
                           </div>
                           <div className='carousel-item'>
                              <img
                                 src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/01d585fee99375e8.png?q=100'
                                 className='d-block w-100 custom-carousel-image'
                                 alt='Image 2'
                              />
                           </div>
                           <div className='carousel-item'>
                              <img
                                 src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ffeb169a27907387.jpg?q=100'
                                 className='d-block w-100 custom-carousel-image'
                                 alt='Image 3'
                              />
                           </div>
                           <div className='carousel-item'>
                              <img
                                 src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/7ef9754529c2da8b.jpeg?q=100'
                                 className='d-block w-100 custom-carousel-image'
                                 alt='Image 3'
                              />
                           </div>
                           {/* Add more carousel items as needed */}
                        </div>
                        <div className='carousel-controls'>
                           <button
                              className='carousel-control-prev bg custom-carousel-button'
                              type='button'
                              data-bs-target='#mainBannerCarousel'
                              data-bs-slide='prev'
                           >
                              <span
                                 className='carousel-control-prev-icon bg'
                                 aria-hidden='true'
                              ></span>
                              <span className='visually-hidden bg'>
                                 Previous
                              </span>
                           </button>
                           <button
                              className='carousel-control-next custom-carousel-button'
                              type='button'
                              data-bs-target='#mainBannerCarousel'
                              data-bs-slide='next'
                           >
                              <span
                                 className='carousel-control-next-icon'
                                 aria-hidden='true'
                              ></span>
                              <span className='visually-hidden'>Next</span>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='home-wrapper'>
               <div className='flex'>
                  <div className='col-4'>
                     <img
                        src='https://rukminim1.flixcart.com/fk-p-flap/520/280/image/ff5fe829530cf197.jpg?q=20'
                        alt='img'
                     />
                  </div>
                  <div className='col-4'>
                     <img
                        src='https://rukminim1.flixcart.com/fk-p-flap/520/280/image/07b437dc74cb4f25.jpg?q=20'
                        alt='img'
                     />
                  </div>
                  <div className='col-4'>
                     <img
                        src='https://rukminim1.flixcart.com/fk-p-flap/520/280/image/001d5002a4adeeaf.jpg?q=20'
                        alt='img'
                     />
                  </div>
               </div>
            </div>
            {/* // 3rd layout */}
            <div className='container custom-width'>
               <div className='row'>
                  <div className='col-5 column-5'>
                     <div className='d-flex flex-wrap justify-content-between align-items-center flex-column'>
                        <div className='main-banner-content p-3 position-relative'>
                           <img
                              src='https://www.apple.com/v/airpods/u/images/overview/airpods_max__f265q4g4ddym_large_2x.png'
                              className='rounded-3 img-fluid'
                              alt='Supercharged for Pros'
                           />
                           <div className='main-banner position-absolute'>
                              <h4>SUPERCHARGED FOR PROS</h4>
                              <h5>AirPods Max.</h5>
                              <p>
                                 From ₹59900.00* or ₹2,495.88/month
                                 <br />
                                 for 24 Months.
                              </p>
                              <Link className='button'>BUY NOW</Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='col-6'>
                     <div className='d-flex flex-wrap justify-content-between align-items-center'>
                        <div className='small-banner p-3 position-relative'>
                           <img
                              src='/images/catbanner-01.jpg'
                              className='rounded-3 img-fluid'
                              alt='Best Sale'
                           />
                           <div className='small-banner-content position-absolute'>
                              <h4>Best Sale</h4>
                              <h5>Best Laptops</h5>

                              <p>1. Powerful processors</p>
                              <p>2. High-resolution display</p>
                           </div>
                        </div>
                        <div className='small-banner p-3 position-relative'>
                           <img
                              src='/images/catbanner-03.jpg'
                              className='rounded-3 img-fluid'
                              alt='New Arrival'
                           />
                           <div className='small-banner-content position-absolute'>
                              <h4>New Lunch</h4>
                              <h5>IPad Air</h5>
                              <p>1. Stunning design</p>
                              <p>2. Powerful A-series chip</p>
                           </div>
                        </div>
                        <div className='small-banner p-3 position-relative'>
                           <img
                              src='/images/catbanner-02.jpg'
                              className='rounded-3 img-fluid'
                              alt='15% Off'
                           />
                           <div className='small-banner-content position-absolute'>
                              <h4>15% Off</h4>
                              <h5>Smartwatch 7</h5>
                              <p>1. Health and fitness tracking</p>
                              <p>2. Interactive touch screen</p>
                           </div>
                        </div>
                        <div className='small-banner p-3 position-relative'>
                           <img
                              src='/images/catbanner-04.jpg'
                              className='rounded-3 img-fluid'
                              alt='15% Off'
                           />
                           <div className='small-banner-content position-absolute'>
                              <h4>15% Off</h4>
                              <h5>AirPods Max</h5>
                              <p>1. High-fidelity sound</p>
                              <p>2. Active noise cancellation</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className='home-wrapper-2'>
            <div className='container-xxl'>
               <div className='row'>
                  <div className='col-12'>
                     <div className='services d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center gap-10'>
                           <img src='images/service.png' alt='service-logo' />
                           <div>
                              <h6>Free Shipping</h6>
                              <p className='mb-0'>
                                 free shipping orders above ₹500
                              </p>
                           </div>
                        </div>
                        <div className='d-flex align-items-center gap-10'>
                           <img
                              src='images/service-02.png'
                              alt='service-logo'
                           />
                           <div>
                              <h6>Daily Surprise offers</h6>
                              <p className='mb-0'>Save up to 30%</p>
                           </div>
                        </div>
                        <div className='d-flex align-items-center gap-10'>
                           <img
                              src='images/service-03.png'
                              alt='service-logo'
                           />
                           <div>
                              <h6>Support 24/7</h6>
                              <p className='mb-0'>Connect with our experts</p>
                           </div>
                        </div>
                        <div className='d-flex align-items-center gap-10'>
                           <img
                              src='images/service-04.png'
                              alt='service-logo'
                           />
                           <div>
                              <h6>Low Cost</h6>
                              <p className='mb-0'>Direct from the factory</p>
                           </div>
                        </div>
                        <div className='d-flex align-items-center gap-10'>
                           <img
                              src='images/service-05.png'
                              alt='service-logo'
                           />
                           <div>
                              <h6>Secure Payments</h6>
                              <p className='mb-0'>100% protected payment</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Home;
