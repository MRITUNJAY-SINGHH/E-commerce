import { Link } from 'react-router-dom';
import { useState } from 'react';
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

function ResetPassword() {
   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

   const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
   };
   const toggleConfirmPasswordVisibility = () => {
      setShowConfirmPassword(!showConfirmPassword);
   };
   return (
      <>
         <Meta title={'Reset-Password'} />
         <div className='ResetPassword gradient-custom-3 py-5'>
            <MDBCard className='mx-auto' style={{ maxWidth: '600px' }}>
               <MDBCardBody className='px-5'>
                  <h3 className='text-uppercase text-center mb-4'>
                     Reset Password
                  </h3>

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
                  <div className='position-relative'>
                     <MDBInput
                        wrapperClass='mb-4 pr-5'
                        label='Repeat your Password'
                        size='lg'
                        id='form3'
                        type={showConfirmPassword ? 'text' : 'password'}
                     />
                     <div className='icon-eye'>
                        {showConfirmPassword ? (
                           <FiEye
                              className='icon-eye'
                              onClick={toggleConfirmPasswordVisibility}
                           />
                        ) : (
                           <FiEyeOff
                              className='icon-eye'
                              onClick={toggleConfirmPasswordVisibility}
                           />
                        )}
                     </div>
                  </div>

                  <MDBBtn className='mb-4 w-100 gradient-custom-3' size='lg'>
                     Reset
                  </MDBBtn>
               </MDBCardBody>
            </MDBCard>
         </div>
      </>
   );
}

export default ResetPassword;
