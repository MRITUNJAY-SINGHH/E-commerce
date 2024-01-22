import CustomInput from '../components/CustomInput';

const ForgetPassword = () => {
   return (
      <div className='flex items-center justify-center h-screen bg-[#ffd333] px-15 py-6'>
         <div className='w-[25%] p-5 bg-white rounded-md space-y-4'>
            <h2 className='text-center text-black text-2xl'>Forget Password</h2>
            <p className='text-center'>
               Please enter your register email to get reset password link
            </p>
            <form action='' className='space-y-4'>
               <CustomInput
                  type='email'
                  placeholder='Enter your register email'
                  id='email'
                  label='Email'
               />

               <button
                  className='border-0 px-3 py-2 bg-[#ffd333] text-white font-bold w-full'
                  type='submit'
               >
                  Send Link
               </button>
            </form>
         </div>
      </div>
   );
};

export default ForgetPassword;
