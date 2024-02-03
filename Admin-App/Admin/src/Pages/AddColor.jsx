const AddColor = () => {
   return (
      <div className='flex flex-col items-start justify-center bg-gray-100 py-6 sm:px-6 lg:px-8 w-full'>
         <h3 className='text-3xl font-semibold text-left w-full'>Add Color</h3>
         <form className='w-full space-y-6' action=''>
            <label htmlFor='blogTitle' className='sr-only'>
               Enter Color
            </label>
            <input
               type='text'
               id='blogTitle'
               placeholder='Enter  Color'
               className='appearance-none relative block w-full px-6 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg'
            />

            <button
               type='submit'
               className='group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-auto'
            >
               Add Color
            </button>
         </form>
      </div>
   );
};

export default AddColor;
