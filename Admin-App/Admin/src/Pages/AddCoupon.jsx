import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addCoupon } from '../features/couponService/couponSlice';
import { DatePicker } from 'antd';

const AddCoupon = () => {
   const dispatch = useDispatch();

   const formik = useFormik({
      initialValues: {
         name: '',
         expire: null,
         discount: 0,
      },
      validationSchema: Yup.object({
         name: Yup.string().required('Coupon Name is required'),
         expire: Yup.date().required('Expiration Date is required'),
         discount: Yup.number()
            .required('Discount Percentage is required')
            .min(0, 'Discount Percentage must be at least 0')
            .max(100, 'Discount Percentage cannot exceed 100'),
      }),
      onSubmit: async (values, { resetForm }) => {
         try {
            await dispatch(addCoupon(values));
            resetForm();
         } catch (error) {
            console.error('Error adding coupon:', error);
         }
      },
   });

   return (
      <div className='flex flex-col items-start justify-center bg-gray-100 py-6 sm:px-6 lg:px-8 w-full'>
         <h3 className='text-3xl font-semibold text-left w-full'>Add Coupon</h3>
         <form className='w-full space-y-6' onSubmit={formik.handleSubmit}>
            <label htmlFor='name' className='sr-only'>
               Enter Coupon Name
            </label>
            <input
               type='text'
               id='name'
               name='name'
               value={formik.values.name}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               placeholder='Enter Coupon Name'
               className={`appearance-none relative block w-full px-4 py-2 border ${
                  formik.errors.name ? 'border-red-500' : 'border-gray-300'
               } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg`}
            />

            {formik.errors.name && formik.touched.name && (
               <div className='text-red-500' style={{ margin: '0' }}>
                  {formik.errors.name}
               </div>
            )}

            <label htmlFor='expire' className='sr-only'>
               Enter Expiration Date
            </label>
            <DatePicker
               id='expire'
               name='expire'
               value={formik.values.expire}
               onChange={(date) => formik.setFieldValue('expire', date)}
               onBlur={formik.handleBlur}
               disabledDate={(current) => current && current < Date.now()}
               style={{ width: '100%', height: '48px', padding: '10px' }}
               format='YYYY-MM-DD'
            />

            {formik.errors.expire && formik.touched.expire && (
               <div className='text-red-500' style={{ margin: '0' }}>
                  {formik.errors.expire}
               </div>
            )}

            <label htmlFor='discount' className='sr-only'>
               Enter Discount Percentage
            </label>
            <input
               type='number'
               id='discount'
               name='discount'
               value={formik.values.discount}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               placeholder='Enter Discount Percentage'
               className={`appearance-none relative block w-full px-4 py-2 border ${
                  formik.errors.discount ? 'border-red-500' : 'border-gray-300'
               } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg`}
            />

            {formik.errors.discount && formik.touched.discount && (
               <div className='text-red-500' style={{ margin: '0' }}>
                  {formik.errors.discount}
               </div>
            )}

            <button
               type='submit'
               className='group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-auto'
            >
               Add Coupon
            </button>
         </form>
      </div>
   );
};

export default AddCoupon;
