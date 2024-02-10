import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Editor from '../components/Editor/Editor';
import { Select } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrands } from '../features/brand/brandSlice';
import { getAllCategory } from '../features/category/categorySlice';
import { getAllColors } from '../features/color/colorSlice';
import CustomUploadImages from '../components/CustomUploadImages';

const AddProduct = () => {
   const Dispatch = useDispatch();
   const { brand } = useSelector((state) => state.brand);
   const { category } = useSelector((state) => state.category);
   const { color } = useSelector((state) => state.color);
   const [selectedItems, setSelectedItems] = useState([]);

   const filteredOptions = color.filter(
      (o) => !selectedItems.includes(o.title)
   );

   useEffect(() => {
      Dispatch(getAllBrands());
      Dispatch(getAllCategory());
      Dispatch(getAllColors());
   }, []);

   const handleChange = (value, setFieldValue) => {
      setSelectedItems(value);
      setFieldValue('productColor', value);
   };

   const validationSchema = Yup.object({
      productTitle: Yup.string().required('Required'),
      productDescription: Yup.string().required('Required'),
      productPrice: Yup.number().required('Required'),
      productCategories: Yup.string().required('Required'),
      productBrand: Yup.string().required('Required'),
      productQuantity: Yup.number().required('Required'),
   });

   return (
      <div className='flex flex-col items-start justify-center bg-gray-100  sm:px-6 lg:px-8 w-full'>
         <h3 className='text-3xl font-semibold text-left w-full'>
            Add Product
         </h3>
         <Formik
            initialValues={{
               productTitle: '',
               productDescription: '',
               productPrice: '',
               productBrand: '',
               productCategories: '',
               productColor: [],
               productQuantity: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
               console.log(values);
            }}
         >
            {({ isSubmitting, setFieldValue }) => (
               <Form className='w-full space-y-6'>
                  <label htmlFor='productTitle' className='sr-only'>
                     Enter Product Title
                  </label>
                  <Field
                     type='text'
                     name='productTitle'
                     placeholder='Enter Product Title'
                     className='appearance-none relative block w-full px-6 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg'
                  />
                  <ErrorMessage name='productTitle'>
                     {(msg) => (
                        <div
                           style={{
                              color: 'red',
                              paddingLeft: '4px',
                              margin: '5px 0 0 0',
                           }}
                        >
                           {msg}
                        </div>
                     )}
                  </ErrorMessage>

                  <Editor
                     placeholder='Enter Product Description'
                     name='productDescription'
                     setFieldValue={setFieldValue}
                  />
                  <ErrorMessage name='productDescription'>
                     {(msg) => (
                        <div
                           style={{
                              color: 'red',
                              paddingLeft: '4px',
                              margin: '5px 0 0 0',
                           }}
                        >
                           {msg}
                        </div>
                     )}
                  </ErrorMessage>

                  <label htmlFor='productPrice' className='sr-only'>
                     Enter Product Price
                  </label>
                  <Field
                     type='number'
                     name='productPrice'
                     placeholder='Enter Product Price'
                     className='appearance-none relative block w-full px-6 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg'
                  />
                  <ErrorMessage name='productPrice'>
                     {(msg) => (
                        <div
                           style={{
                              color: 'red',
                              paddingLeft: '4px',
                              margin: '5px 0 0 0',
                           }}
                        >
                           {msg}
                        </div>
                     )}
                  </ErrorMessage>

                  <label htmlFor='productBrand' className='sr-only'>
                     Select Product Brand
                  </label>
                  <Field
                     as='select'
                     name='productBrand'
                     className='appearance-none relative block w-full px-6 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg'
                  >
                     <option value=''>Select Brand</option>
                     {brand.map((item) => (
                        <option key={item._id} value={item.title}>
                           {item.title}
                        </option>
                     ))}
                  </Field>
                  <ErrorMessage name='productBrand'>
                     {(msg) => (
                        <div
                           style={{
                              color: 'red',
                              paddingLeft: '4px',
                              margin: '5px 0 0 0',
                           }}
                        >
                           {msg}
                        </div>
                     )}
                  </ErrorMessage>
                  <label htmlFor='productCategories' className='sr-only'>
                     Select Product Categories
                  </label>
                  <Field
                     as='select'
                     name='productCategories'
                     className='appearance-none relative block w-full px-6 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg'
                  >
                     <option value='productCategories'>
                        Select Categories
                     </option>
                     {category.map((item) => (
                        <option key={item._id} value={item.title}>
                           {item.title}
                        </option>
                     ))}
                  </Field>
                  <ErrorMessage name='productCategories'>
                     {(msg) => (
                        <div
                           style={{
                              color: 'red',
                              paddingLeft: '4px',
                              margin: '5px 0 0 0',
                           }}
                        >
                           {msg}
                        </div>
                     )}
                  </ErrorMessage>

                  <Select
                     mode='multiple'
                     value={selectedItems}
                     name='productColor'
                     onChange={(value) => handleChange(value, setFieldValue)}
                     placeholder='Select Product Color'
                     style={{
                        width: '100%',
                     }}
                     options={filteredOptions.map((item) => ({
                        value: item.title,
                        label: item.title,
                     }))}
                  />
                  <ErrorMessage name='productColor'>
                     {(msg) => (
                        <div
                           style={{
                              color: 'red',
                              paddingLeft: '4px',
                              margin: '5px 0 0 0',
                           }}
                        >
                           {msg}
                        </div>
                     )}
                  </ErrorMessage>

                  <label htmlFor='productQuantity' className='sr-only'>
                     Enter Product Quantity
                  </label>
                  <Field
                     type='number'
                     name='productQuantity'
                     placeholder='Enter Product Quantity'
                     className='appearance-none relative block w-full px-6 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg '
                  />
                  <ErrorMessage name='productQuantity'>
                     {(msg) => (
                        <div
                           style={{
                              color: 'red',
                              paddingLeft: '4px',
                              margin: '5px 0 0 0',
                           }}
                        >
                           {msg}
                        </div>
                     )}
                  </ErrorMessage>
                  <CustomUploadImages />
                  <button
                     type='submit'
                     disabled={isSubmitting}
                     className='group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-auto'
                  >
                     Add Product
                  </button>
               </Form>
            )}
         </Formik>
      </div>
   );
};

export default AddProduct;
