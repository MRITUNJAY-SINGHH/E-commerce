import Editor from '../components/Editor/Editor';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { AddAllBlogs } from '../features/blog/blogSlice';
import CustomUploadImages from '../components/CustomUploadImages';
const AddBlog = () => {
   const dispatch = useDispatch();
   const formik = useFormik({
      initialValues: {
         title: '',
         category: '',
         description: '',
         images: [],
      },
      validationSchema: Yup.object({
         title: Yup.string().required('Blog title is required'),
         category: Yup.string().required('Blog category is required'),
         description: Yup.string().required('Blog content is required'),
         images: Yup.array().min(1, 'At least one image is required'),
      }),
      onSubmit: (values) => {
         dispatch(AddAllBlogs(values));

         formik.resetForm();
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
               id='title'
               name='title'
               value={formik.values.title}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               placeholder='Enter Blog Title'
               className={`appearance-none relative block w-full px-6 py-4 border ${
                  formik.errors.title ? 'border-red-500' : 'border-gray-300'
               } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg`}
            />
            {formik.errors.title && formik.touched.title && (
               <div className='text-red-500' style={{ margin: '0' }}>
                  {formik.errors.title}
               </div>
            )}

            <select
               id='category'
               name='category'
               value={formik.values.category}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               className={`appearance-none cursor-pointer relative block w-full px-6 py-4 border ${
                  formik.errors.category ? 'border-red-500' : 'border-gray-300'
               } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg`}
            >
               <option value=''>Select Blog Category</option>
               <option value='tech'>Tech</option>
               <option value='life'>Life</option>
               <option value='travel'>Travel</option>
            </select>
            {formik.errors.category && formik.touched.category && (
               <div className='text-red-500' style={{ margin: '0' }}>
                  {formik.errors.category}
               </div>
            )}
            <Editor
               placeholder='Write something awesome...'
               setFieldValue={formik.setFieldValue}
               name='description'
               className={`appearance-none relative block w-full px-6 py-4 border ${
                  formik.errors.description
                     ? 'border-red-500'
                     : 'border-gray-300'
               } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg
                  `}
            />
            {formik.errors.description && formik.touched.description && (
               <div className='text-red-500' style={{ margin: '0' }}>
                  {formik.errors.description}
               </div>
            )}
            <CustomUploadImages
               setFieldValue={formik.setFieldValue}
               name='images'
               context='addBlog'
            />
            {formik.errors.images && formik.touched.images && (
               <div className='text-red-500' style={{ margin: '0' }}>
                  {formik.errors.images}
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
