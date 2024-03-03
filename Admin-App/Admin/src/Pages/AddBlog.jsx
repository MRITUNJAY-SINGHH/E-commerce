import Editor from '../components/Editor/Editor';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const AddBlog = () => {
   const formik = useFormik({
      initialValues: {
         blogTitle: '',
         blogCategory: '',
         blogContent: '',
      },
      validationSchema: Yup.object({
         blogTitle: Yup.string().required('Blog title is required'),
         blogCategory: Yup.string().required('Blog category is required'),
         blogContent: Yup.string().required('Blog content is required'),
      }),
      onSubmit: (values) => {
         console.log(values);
      },
   });
   return (
      <div className='flex flex-col items-center justify-center  bg-gray-100 py-6 sm:px-6 lg:px-8'>
         <h3 className='text-3xl font-semibold  text-center'>Add Blog</h3>
         <form className=' space-y-6' onSubmit={formik.handleSubmit}>
            <label htmlFor='blogTitle' className='sr-only'>
               Enter Blog Title
            </label>
            <input
               type='text'
               id='blogTitle'
               name='blogTitle'
               value={formik.values.blogTitle}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               placeholder='Enter Blog Title'
               className={`appearance-none relative block w-full px-6 py-4 border ${
                  formik.errors.blogTitle ? 'border-red-500' : 'border-gray-300'
               } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg`}
            />
            {formik.errors.blogTitle && formik.touched.blogTitle && (
               <div className='text-red-500' style={{ margin: '0' }}>
                  {formik.errors.blogTitle}
               </div>
            )}

            <select
               id='blogCategory'
               name='blogCategory'
               value={formik.values.blogCategory}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               className={`appearance-none cursor-pointer relative block w-full px-6 py-4 border ${
                  formik.errors.blogCategory
                     ? 'border-red-500'
                     : 'border-gray-300'
               } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg`}
            >
               <option value=''>Select Blog Category</option>
               <option value='tech'>Tech</option>
               <option value='life'>Life</option>
               <option value='travel'>Travel</option>
            </select>
            {formik.errors.blogCategory && formik.touched.blogCategory && (
               <div className='text-red-500' style={{ margin: '0' }}>
                  {formik.errors.blogCategory}
               </div>
            )}
            <Editor
               placeholder='Write something awesome...'
               setFieldValue={formik.setFieldValue}
               name='blogContent'
               className={`appearance-none relative block w-full px-6 py-4 border ${
                  formik.errors.blogContent
                     ? 'border-red-500'
                     : 'border-gray-300'
               } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg
                  `}
            />
            {formik.errors.blogContent && formik.touched.blogContent && (
               <div className='text-red-500' style={{ margin: '0' }}>
                  {formik.errors.blogContent}
               </div>
            )}

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
