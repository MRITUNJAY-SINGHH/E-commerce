import { Link } from 'react-router-dom';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
   return (
      <>
         <footer className='py-4'>
            <div className='container-xxl'>
               <div className='row align-items-center'>
                  <div className='col-5'>
                     <div className='footer-top-data d-flex gap-20 align-items-center'>
                        <img src='images/newsletter.png' alt='new letter ' />
                        <h4 className='text-white mb-0'>
                           Sign Up for NewsLetter
                        </h4>
                     </div>
                  </div>
                  <div className='col-7'>
                     <div className='input-group'>
                        <input
                           type='text'
                           className='form-control'
                           placeholder='Enter Your Email'
                           aria-label='Enter Your Email'
                           aria-describedby='basic-addon2'
                        />
                        <span
                           className='input-group-text cursor-pointer '
                           id='basic-addon2'
                        >
                           Subscribe
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
         <footer className='py-3'>
            <div className='container-xxl'>
               <div className='row'>
                  <div className='col-4'>
                     <h4 className='text-white mb-4'>Contact Us</h4>
                     <div>
                        <address className='text-white fs-6'>
                           NH_24 Lal Kuan Ghaziabad
                           <br />
                           PinCodes: 201001
                        </address>
                        <a
                           to='tel:+91 7065429235'
                           className='mt-2 d-block mb-2 text-white'
                        >
                           +91 7065429235
                        </a>
                        <a
                           to='mailto: mritunjays447@gmail.com'
                           className='mt-2 d-block mb-3 text-white'
                        >
                           mritunjays447@gmail.com
                        </a>
                        <div className='social-icons d-flex align-items-center gap-20'>
                           <span className='text-white'>Connect With Us</span>
                           <a
                              to='https://www.instagram.com/mritunjay_rajput_'
                              target='_blank'
                              rel='noopener noreferrer'
                           >
                              <FaInstagram className='text-white' size={25} />
                           </a>
                           <a
                              to='https://github.com/MRITUNJAY-SINGHH'
                              target='_blank'
                              rel='noopener noreferrer'
                           >
                              <FaGithub className='text-white' size={25} />
                           </a>
                           <a
                              to='https://www.linkedin.com/in/mritunjay-singh-022333282/'
                              target='_blank'
                              rel='noopener noreferrer'
                           >
                              <FaLinkedin className='text-white' size={25} />
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className='col-3'>
                     <h4 className='text-white mb-4'>Information</h4>
                     <div className='footer-links d-flex flex-column'>
                        <Link className='text-white py-2 mb-1'>
                           Privacy Policy
                        </Link>
                        <Link className='text-white py-2 mb-1'>
                           Refund Policy
                        </Link>
                        <Link className='text-white py-2 mb-1'>
                           Shopping Policy
                        </Link>
                        <Link className='text-white py-2 mb-1'>
                           Terms & Conditions
                        </Link>
                        <Link className='text-white py-2 mb-1'>Blogs</Link>
                     </div>
                  </div>
                  <div className='col-3'>
                     <h4 className='text-white mb-4'>Account</h4>
                     <div className='footer-links d-flex flex-column'>
                        <Link className='text-white py-2 mb-1'>Search</Link>
                        <Link className='text-white py-2 mb-1'>About Us</Link>
                        <Link className='text-white py-2 mb-1'>Faq</Link>
                        <Link className='text-white py-2 mb-1'>Contact</Link>
                        <Link className='text-white py-2 mb-1'></Link>
                     </div>
                  </div>
                  <div className='col-2'>
                     <h4 className='text-white mb-4'>Quick Links</h4>
                     <div className='footer-links d-flex flex-column'>
                        <Link className='text-white py-2 mb-1'>Laptops</Link>
                        <Link className='text-white py-2 mb-1'>Headphones</Link>
                        <Link className='text-white py-2 mb-1'>Tablets</Link>
                        <Link className='text-white py-2 mb-1'>Watch</Link>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
         <footer className='py-3'>
            <div className='container-xxl'>
               <div className='row'>
                  <div className='col-6 d-flex justify-content-start'>
                     <p className='text-center mb-0 text-white'>
                        &copy;{new Date().getFullYear()} Powered by Mritunjay
                        Singh
                     </p>
                  </div>
                  <div className='col-6 d-flex justify-content-end'>
                     <img
                        src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg'
                        alt='Payment Methods'
                     />
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;
