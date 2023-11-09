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

function App() {
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
         <Meta title={'Register Account'} />
         <div className='Sign-up gradient-custom-3 py-5'>
            <MDBCard className='mx-auto' style={{ maxWidth: '600px' }}>
               <MDBCardBody className='px-5'>
                  <h3 className='text-uppercase text-center mb-4'>
                     Create an account
                  </h3>
                  <MDBInput
                     wrapperClass='mb-4'
                     label='First Name'
                     size='lg'
                     id='form1'
                     type='text'
                  />
                  <MDBInput
                     wrapperClass='mb-4'
                     label='Last Name'
                     size='lg'
                     id='form1'
                     type='text'
                  />
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
                  <div className='d-flex flex-row justify-content-center mb-4'>
                     <MDBCheckbox
                        name='flexCheck'
                        id='flexCheckDefault'
                        label='I agree all statements in Terms of service'
                     />
                  </div>
                  <MDBBtn className='mb-4 w-100 gradient-custom-3' size='lg'>
                     Register
                  </MDBBtn>
                  <p className='text-center mb-0'>
                     Already have an account?{' '}
                     <Link to='/login' className='login'>
                        Login here
                     </Link>
                  </p>
               </MDBCardBody>
            </MDBCard>
         </div>
      </>
   );
}

export default App;
