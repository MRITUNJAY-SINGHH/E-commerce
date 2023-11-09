import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Meta from '../components/Meta';

import {
   MDBBtn,
   MDBCard,
   MDBCardBody,
   MDBInput,
   MDBCheckbox,
} from 'mdb-react-ui-kit';

function Login() {
   const [showPassword, setShowPassword] = useState(false);

   const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
   };
   return (
      <>
         <Meta title={'Login'} />
         <div className='Login gradient-custom-3 py-5 '>
            <MDBCard className='mx-auto' style={{ maxWidth: '600px' }}>
               <MDBCardBody className='px-5'>
                  <h3 className='text-uppercase text-center mb-4'>
                     Login to your account
                  </h3>
                  <MDBInput
                     wrapperClass='mb-4'
                     label='Your Email'
                     size='lg'
                     id='form2'
                     type='email'
                  />
                  <div className='position-relative'>
                     <MDBInput
                        wrapperClass='mb-4 pr-5'
                        label='Password'
                        size='lg'
                        id='form3'
                        type={showPassword ? 'text' : 'password'}
                     />
                     <div className='icon-eye'>
                        {showPassword ? (
                           <FiEye
                              className='icon-eye'
                              onClick={togglePasswordVisibility}
                           />
                        ) : (
                           <FiEyeOff
                              className='icon-eye'
                              onClick={togglePasswordVisibility}
                           />
                        )}
                     </div>
                  </div>
                  <div className='d-flex flex-row justify-content-between align-items-center mb-4'>
                     <MDBCheckbox
                        name='flexCheck'
                        id='flexCheckDefault'
                        label='Remember me'
                     />
                     <Link to='/Forget-Password' className='forgot-password'>
                        Forgot Password?
                     </Link>
                  </div>
                  <MDBBtn
                     className='mb-4 w-100 gradient-custom-3'
                     size='lg'
                     type='submit'
                  >
                     Login
                  </MDBBtn>
                  <p className='text-center mb-0'>
                     New user?{' '}
                     <Link to='/Sign-Up' className='signup'>
                        Create an account here
                     </Link>
                  </p>
               </MDBCardBody>
            </MDBCard>
         </div>
      </>
   );
}

export default Login;
