import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/specialProduct';
import FamousCard from '../components/FamousCard';
import Meta from '../components/Meta';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Home = () => {
   return (
      <>
         <Meta title={'home'} />

         <section className='home-wrapper-1'>
            <div className='container-fluid'>
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
                                 className='d-block w-100 custom-carousel-image'
                                 alt='Image 1'
                              />
                           </div>
                           <div className='carousel-item'>
                              <img
                                 src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/bb35af7b3673ec73.jpeg?q=100'
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
                           <div className='carousel-item'>
                              <img
                                 src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/aa64c35bfaa1931d.jpeg?q=100'
                                 className='d-block w-100 custom-carousel-image'
                                 alt='Image 3'
                              />
                           </div>
                           {/* Add more carousel items as needed */}
                        </div>
                        <div className='carousel-controls'>
                           <button
                              className='carousel-control-prev custom-carousel-button'
                              type='button'
                              data-bs-target='#mainBannerCarousel'
                              data-bs-slide='prev'
                           >
                              <span className='visually-hidden'>Previous</span>
                              {/* Add your custom icon */}
                              <IoIosArrowBack />
                           </button>
                           <button
                              className='carousel-control-next custom-carousel-button'
                              type='button'
                              data-bs-target='#mainBannerCarousel'
                              data-bs-slide='next'
                           >
                              <IoIosArrowForward />
                              <span className='visually-hidden'></span>
                              {/* Add your custom icon */}
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='home-wrapper container-fluid'>
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
            <div className='third-layout'>
               <div className='container-fluid'>
                  <div className='row'>
                     <div className='col-5'>
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
            </div>
         </section>
         {/* {section one end} */}
         <section className='home-wrapper-2'>
            <div className='container-fluid'>
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
         {/* {section Two end} */}
         <section className='home-wrapper-3 py-5 container-fluid'>
            <div className='main-categories'>
               <div className='categories'>
                  <div className='categories-paragraph'>
                     <h6>Cameras</h6>
                     <p>10 Items</p>
                  </div>
                  <div className='categories-img'>
                     <img
                        src='https://rukminim2.flixcart.com/image/312/312/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70'
                        alt='camera-img'
                     />
                  </div>
               </div>
               <div className='categories'>
                  <div className='categories-paragraph'>
                     <h6>Smart Tv</h6>
                     <p>10 Items</p>
                  </div>
                  <div className='categories-img'>
                     <img
                        src='https://rukminim2.flixcart.com/image/312/312/xif0q/television/j/2/j/-original-imagtq4hqqt37tgx.jpeg?q=70'
                        alt='camera-img'
                     />
                  </div>
               </div>
               <div className='categories'>
                  <div className='categories-paragraph'>
                     <h6>Laptops</h6>
                     <p>10 Items</p>
                  </div>
                  <div className='categories-img'>
                     <img
                        src='https://rukminim2.flixcart.com/image/612/612/xif0q/computer/2/x/m/-original-imagp7wan6syzfy4.jpeg?q=70'
                        alt='camera-img'
                     />
                  </div>
               </div>
               <div className='categories'>
                  <div className='categories-paragraph'>
                     <h6>Smartwatches</h6>
                     <p>10 Items</p>
                  </div>
                  <div className='categories-img'>
                     <img
                        src='https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/h/m/e/-original-imagkfm8fgvwjy8y.jpeg?q=70'
                        alt='camera-img'
                     />
                  </div>
               </div>
               <div className='categories'>
                  <div className='categories-paragraph'>
                     <h6>Mobiles & Tablets</h6>
                     <p>10 Items</p>
                  </div>
                  <div className='categories-img'>
                     <img
                        src='https://rukminim2.flixcart.com/image/612/612/xif0q/mobile/p/8/t/-original-imagcv8crx9bfhuc.jpeg?q=70'
                        alt='camera-img'
                     />
                  </div>
               </div>
               <div className='categories'>
                  <div className='categories-paragraph'>
                     <h6>Portable Speakers</h6>
                     <p>10 Items</p>
                  </div>
                  <div className='categories-img'>
                     <img
                        src='https://rukminim2.flixcart.com/image/612/612/kpzt7680/speaker/mobile-tablet-speaker/c/7/o/sounddrum-1-por-1327-portronics-original-imag43tcuz8swymc.jpeg?q=70'
                        alt='camera-img'
                     />
                  </div>
               </div>
               <div className='categories'>
                  <div className='categories-paragraph'>
                     <h6>Headphones</h6>
                     <p>10 Items</p>
                  </div>
                  <div className='categories-img'>
                     <img
                        src='https://rukminim2.flixcart.com/image/612/612/jhql8cw0/headphone/9/p/e/acer-predator-galea-500-original-imaf5zx5e8ypbjpg.jpeg?q=70'
                        alt='camera-img'
                     />
                  </div>
               </div>
               <div className='categories'>
                  <div className='categories-paragraph'>
                     <h6>Gamings</h6>
                     <p>10 Items</p>
                  </div>
                  <div className='categories-img'>
                     <img
                        src='https://rukminim2.flixcart.com/image/612/612/xif0q/gamingconsole/z/b/w/-original-imagtk7vfbzqbjg6.jpeg?q=70'
                        alt='camera-img'
                     />
                  </div>
               </div>
            </div>
         </section>
         {/* {section three end} */}
         {/* feature wrapper Start */}
         <section className='product-wrapper'>
            <div className='container-fluid'>
               <div className='row'>
                  <div className='col-12'>
                     <h3 className='section-heading'>Features Collections</h3>
                  </div>
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
               </div>
            </div>
         </section>
         {/* {Features section  end} */}
         {/* famous wrapper start */}
         <section className='famous-wrapper py-5'>
            <FamousCard />
         </section>
         {/* famous wrapper end */}
         {/* special wrapper Start */}
         <section className='special-Product pb-3'>
            <div className='container-fluid'>
               <div className='row'>
                  <div className='col-12'>
                     <div className='section-heading'>Special Products</div>
                  </div>
               </div>

               <div className='row'>
                  <SpecialProduct />
                  <SpecialProduct />
                  <SpecialProduct />
                  <SpecialProduct />
               </div>
            </div>
         </section>
         {/* special product end */}
         {/* popular wrapper Start */}
         <section className='popular-wrapper py-5'>
            <div className='container-fluid'>
               <div className='row'>
                  <div className='col-12'>
                     <h3 className='section-heading'>Our Popular Products</h3>
                  </div>
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
               </div>
            </div>
         </section>
         {/* popular wrapper end */}
         <section className='marque-wrapper mb-5'>
            <div className='container-fluid'>
               <div className='row'>
                  <div className='col-12'>
                     <div className='marquee-inner-wrapper bg-white p-3'>
                        <Marquee className='d-flex'>
                           <div className='mx-4 w-10'>
                              <img src='images/brand-01.png' alt='Brand' />
                           </div>
                           <div className='mx-4 w-10'>
                              <img src='images/brand-02.png' alt='Brand' />
                           </div>
                           <div className='mx-4 w-10'>
                              <img src='images/brand-03.png' alt='Brand' />
                           </div>
                           <div className='mx-4 w-10'>
                              <img src='images/brand-04.png' alt='Brand' />
                           </div>
                           <div className='mx-4 w-10'>
                              <img src='images/brand-07.png' alt='Brand' />
                           </div>
                           <div className='mx-4 w-10'>
                              <img src='images/brand-05.png' alt='Brand' />
                           </div>
                           <div className='mx-4 w-10'>
                              <img src='images/brand-06.png' alt='Brand' />
                           </div>
                           <div className='mx-4 w-10'>
                              <img src='images/brand-03.png' alt='Brand' />
                           </div>
                        </Marquee>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* {Marquee section  end} */}
         <section className='blog-wrapper'>
            <div className='container-fluid'>
               <div className='row'>
                  <div className='col-12'>
                     <h3 className='section-heading'>Our Latest Blogs</h3>
                  </div>
               </div>
               <div className='row'>
                  <div className='col-3'>
                     <BlogCard />
                  </div>
                  <div className='col-3'>
                     <BlogCard />
                  </div>
                  <div className='col-3'>
                     <BlogCard />
                  </div>
                  <div className='col-3'>
                     <BlogCard />
                  </div>
               </div>
            </div>
         </section>
         {/* blog section end */}
      </>
   );
};

export default Home;
