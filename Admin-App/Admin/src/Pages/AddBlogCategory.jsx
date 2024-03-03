import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { AddBlogCategory } from '../features/blogCategory/blogSlice';

const AddCategories = () => {
   const dispatch = useDispatch();

   const formik = useFormik({
      initialValues: {
         title: '',
      },
      validationSchema: Yup.object({
         title: Yup.string().required('Blog Category is required'),
      }),
      onSubmit: async (values, { resetForm }) => {
         try {
            await dispatch(AddBlogCategory(values));
            resetForm();
         } catch (error) {
            console.error('Error adding color:', error);
         }
      },
   });
   return (
      <div className='flex flex-col items-start justify-center bg-gray-100 py-6 sm:px-6 lg:px-8 w-full'>
         <h3 className='text-3xl font-semibold text-left w-full'>
            Add Blog Categories
         </h3>
         <form className='w-full space-y-6' onSubmit={formik.handleSubmit}>
            <label htmlFor='blogTitle' className='sr-only'>
               Add Blog Categories
            </label>
            <input
               type='text'
               id='title'
               name='title'
               value={formik.values.title}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               placeholder='Enter Blog Category Name'
               className={`appearance-none relative block w-full px-6 py-4 border ${
                  formik.errors.title ? 'border-red-500' : 'border-gray-300'
               } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg`}
            />

            {formik.errors.title && formik.touched.title && (
               <div className='text-red-500' style={{ margin: '0' }}>
                  {formik.errors.title}
               </div>
            )}
            <button
               type='submit'
               className='group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-auto'
            >
               Add Blog Categories
            </button>
         </form>
      </div>
   );
};

export default AddCategories;
