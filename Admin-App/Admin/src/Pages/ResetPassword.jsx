import CustomInput from '../components/CustomInput';

const ResetPassword = () => {
   return (
      <div className='flex items-center justify-center h-screen bg-[#ffd333] px-15 py-6'>
         <div className='w-[25%] p-5 bg-white rounded-md space-y-4'>
            <h2 className='text-center text-black text-2xl'>Reset Password</h2>
            <p className='text-center'>Please enter your new password</p>
            <form action='' className='space-y-4'>
               <CustomInput
                  type='password'
                  placeholder='Enter your password'
                  id='password'
                  label='Password'
               />
               <CustomInput
                  type='password'
                  placeholder='Enter your  Confirm Password'
                  id='confirmPassword'
                  label='Confirm Password'
               />

               <button
                  className='border-0 px-3 py-2 bg-[#ffd333] text-white font-bold w-full'
                  type='submit'
               >
                  Reset Password
               </button>
            </form>
         </div>
      </div>
   );
};

export default ResetPassword;
