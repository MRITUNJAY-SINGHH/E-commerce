import Editor from '../components/Editor/Editor';

const AddBlog = () => {
   return (
      <div className='flex flex-col items-center justify-center  bg-gray-100 py-6 sm:px-6 lg:px-8'>
         <h3 className='text-3xl font-semibold  text-center'>Add Blog</h3>
         <form className=' space-y-6' action=''>
            <label htmlFor='blogTitle' className='sr-only'>
               Enter Blog Title
            </label>
            <input
               type='text'
               id='blogTitle'
               placeholder='Enter Blog Title'
               className='appearance-none  relative block w-full px-6 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
            />
            <select
               id='blogCategory'
               name='blogCategory'
               required
               className='appearance-none rounded-md relative block w-full px-6 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
            >
               <option value=''>Select Blog Category</option>
               <option value='tech'>Tech</option>
               <option value='life'>Life</option>
               <option value='travel'>Travel</option>
            </select>
            <Editor className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />

            <button
               type='submit'
               className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
               Add Blog
            </button>
         </form>
      </div>
   );
};

export default AddBlog;
