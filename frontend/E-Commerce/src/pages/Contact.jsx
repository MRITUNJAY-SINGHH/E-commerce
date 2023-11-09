import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import {
   AiTwotoneHome,
   AiOutlinePhone,
   AiOutlineMail,
   AiFillInfoCircle,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Contact = () => {
   return (
      <>
         <Meta title={'contact Us'} />
         <BreadCrumb title='Contact Us' />
         <div className='contact-wrapper background-color'>
            <div className='container-xxl'>
               <div className='row'>
                  <div className='col-12'>
                     <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6127.267625401169!2d77.45974882526681!3d28.63694985325516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee057557569f%3A0xa620a4ec7cbfb05e!2sLal%20Kuan%20Police%20Chowki!5e0!3m2!1sen!2sin!4v1699461509521!5m2!1sen!2sin'
                        width='100%'
                        height='450'
                        style={{ border: 0 }}
                        allowFullScreen=''
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                     />
                  </div>
                  <div className='col-12 mt-5'>
                     <div className='d-flex contact-inner-wrapper justify-content-between'>
                        <div className='form-section'>
                           <h3 className='contact-title mb-3'>Contact</h3>
                           <form
                              action='#'
                              className='d-flex flex-column gap-20'
                           >
                              <div>
                                 <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Enter Your Name'
                                 />
                              </div>
                              <div>
                                 <input
                                    type='email'
                                    className='form-control'
                                    placeholder='Enter Your Email'
                                 />
                              </div>
                              <div>
                                 <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Enter Your Mobile-No'
                                 />
                              </div>
                              <div>
                                 <textarea
                                    name=''
                                    id=''
                                    cols='30'
                                    rows='10'
                                    className='w-100 form-control'
                                    placeholder='Comment'
                                 ></textarea>
                              </div>
                              <div>
                                 <button className='button border-0'>
                                    Send
                                 </button>
                              </div>
                           </form>
                        </div>
                        <div>
                           <h3 className='contact-title mb-3 pt-4'>
                              Get in touch with us
                           </h3>
                           <ul className='ps-0'>
                              <li className='mb-3 d-flex align-items-center gap-15'>
                                 <AiTwotoneHome size={'20px'} />
                                 <address className='mb-0'>
                                    NH 24 Lal Kuan Ghaziabad
                                 </address>
                              </li>
                              <li className='mb-3 d-flex align-items-center gap-15'>
                                 <AiOutlinePhone size={'20px'} />
                                 <a
                                    href='tel:+91 7065429235'
                                    className='text-black'
                                 >
                                    +91 7065429235
                                 </a>
                              </li>
                              <li className='mb-3 d-flex align-items-center gap-15'>
                                 <AiOutlineMail size={'20px'} />
                                 <a
                                    href='mailto:mritunjays447@gmail.com'
                                    className='text-black'
                                 >
                                    mritunjays447@gmail.com
                                 </a>
                              </li>
                              <li className='mb-3 d-flex align-items-center gap-15'>
                                 <AiFillInfoCircle size={'20px'} />
                                 <p className='mb-0'>
                                    Monday - Friday 10AM - 10PM
                                 </p>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Contact;
