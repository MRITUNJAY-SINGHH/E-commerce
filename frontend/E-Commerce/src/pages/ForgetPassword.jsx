import React from 'react';
import { Link } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import Meta from '../components/Meta';

function ForgetPassword() {
   const handleSubmit = (e) => {
      e.preventDefault();
   };

   return (
      <>
         <Meta title={'Forget-Password'} />
         <div className='Forget-Password gradient-custom-3 py-5'>
            <MDBCard className='mx-auto' style={{ maxWidth: '600px' }}>
               <MDBCardBody className='px-5'>
                  <h3 className='text-uppercase text-center mb-3'>
                     Forget Password
                  </h3>
                  <p className='my-3 text-center'>
                     We will send a link to reset your password to your email
                     address.
                  </p>
                  <form onSubmit={handleSubmit}>
                     <MDBInput
                        wrapperClass='mb-4'
                        label='Your Email'
                        size='lg'
                        id='email'
                        type='email'
                        required
                     />
                     <div className='d-flex justify-content-between'>
                        <MDBBtn type='submit' className='gradient-custom-3'>
                           Submit
                        </MDBBtn>
                        <Link to='/login' className='btn btn-outline-secondary'>
                           Cancel
                        </Link>
                     </div>
                  </form>
               </MDBCardBody>
            </MDBCard>
         </div>
      </>
   );
}

export default ForgetPassword;
