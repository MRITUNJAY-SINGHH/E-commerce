import { Link } from 'react-router-dom';
import CustomInput from '../components/CustomInput';

import google from '../assets/google.svg';
import github from '../assets/GitHub-Logo.wine.svg';
import facebook from '../assets/Facebook-f_Logo-Blue-Logo.wine.svg';

const Login = () => {
   return (
      <div className='flex items-center justify-center h-screen bg-[#ffd333] px-15 py-6'>
         <div className='w-[25%] p-5 bg-white rounded-md space-y-4'>
            <h2 className='text-center text-black text-2xl'>Welcome Back!</h2>
            <p className='text-center'>
               Enter your details below to access your account.
            </p>
            <form action='' className='space-y-4'>
               <CustomInput
                  type='email'
                  placeholder='Email Your Email'
                  id='email'
                  label='Email'
               />
               <CustomInput
                  type='password'
                  placeholder='Enter Your Password'
                  id='password'
                  label='Password'
               />
               <Link to='/admin'>
                  <button
                     className='border-0 px-3 py-2 bg-[#ffd333] text-white font-bold w-full'
                     type='submit'
                  >
                     Login
                  </button>
               </Link>
            </form>
            <div className='flex items-start space-x-4'>
               <div className='flex items-center h-5'>
                  <input
                     id='remember'
                     aria-describedby='remember'
                     name='remember'
                     type='checkbox'
                     className='w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 '
                     required
                  />
               </div>
               <div className='text-sm flex-grow'>
                  <label
                     htmlFor='remember'
                     className='font-medium text-gray-900'
                  >
                     Remember me
                  </label>
               </div>
               <Link
                  to='/forget-password'
                  className='text-sm text-primary-700 hover:underline'
               >
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'
                     className='w-4 h-4 inline-block align-text-top'
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z'
                     />
                  </svg>
                  <span className='inline-block ml-1'>Forgot Password</span>
               </Link>
            </div>

            <div className='mt-6'>
               <div className='relative'>
                  <div className='absolute inset-0 flex items-center'>
                     <div className='w-full border-t border-gray-300'></div>
                  </div>
                  <div className='relative flex justify-center text-sm'>
                     <span className='px-2 bg-gray-100 text-black'>
                        Or continue with
                     </span>
                  </div>
               </div>

               <div className='mt-6 grid grid-cols-3 gap-3'>
                  <Link
                     to='#'
                     className='w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-50'
                  >
                     <img src={facebook} alt='facebook' className='mr-2' />
                  </Link>
                  <Link
                     to='#'
                     className='w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-50'
                  >
                     <img src={github} alt='github' className='mr-2' />
                  </Link>
                  <Link
                     to='#'
                     className='w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-50'
                  >
                     <img src={google} alt='google' className='mr-2' />
                  </Link>
               </div>
            </div>

            <div className='flex items-center justify-between mt-6'>
               <div className='text-sm'>
                  <Link
                     to='/sign-up'
                     className='font-medium text-blue-600 hover:text-blue-500'
                  >
                     Create account
                  </Link>
               </div>
               <div className='text-sm'>
                  <Link
                     to='#'
                     className='font-medium text-red-600 hover:text-red-500'
                  >
                     Help
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
