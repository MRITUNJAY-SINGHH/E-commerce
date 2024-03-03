import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Editor from '../components/Editor/Editor';
import { Button, Select } from 'antd';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrands } from '../features/brand/brandSlice';
import { getAllCategory } from '../features/category/categorySlice';
import { getAllColors } from '../features/color/colorSlice';
import CustomUploadImages from '../components/CustomUploadImages';
import { createProduct } from '../features/products/productSlice';
import { unwrapResult } from '@reduxjs/toolkit';

const AddProduct = () => {
   const Dispatch = useDispatch();

   const { brand } = useSelector((state) => state.brand);

   const { category } = useSelector((state) => state.category);
   const { color } = useSelector((state) => state.color);
   const [selectedItems, setSelectedItems] = useState([]);
   const [formKey, setFormKey] = useState(0);

   const colors = [];
   color.map((item) => {
      colors.push({ _id: item._id, title: item.title });
   });

   const filteredOptions = color.filter(
      (o) => !selectedItems.includes(o.title)
   );

   useEffect(() => {
      Dispatch(getAllBrands());
      Dispatch(getAllCategory());
      Dispatch(getAllColors());
   }, []);

   const handleChange = (value, setFieldValue) => {
      const selectedColors = value.map((colorName) => {
         const color = colors.find((c) => c.title === colorName);
         return color;
      });
      setSelectedItems(selectedColors);
      setFieldValue('color', selectedColors);
   };

   const validationSchema = Yup.object({
      title: Yup.string().required('Please enter the product title'),
      description: Yup.string().required(
         'Please provide a product description'
      ),
      price: Yup.number().required('Please enter the product price'),
      category: Yup.string().required('Please select a product category'),
      brand: Yup.string().required('Please select a product brand'),
      quantity: Yup.number().required('Please enter the product quantity'),
      color: Yup.array()
         .required('Please select at least one color')
         .min(1, 'Please select at least one color'),
      images: Yup.array()
         .required('Please upload at least one image')
         .min(1, 'Please upload at least one image'),
   });

   return (
      <div className='flex flex-col items-start justify-center bg-gray-100  sm:px-4 lg:px-8 w-full'>
         <h3 className='text-3xl font-semibold text-left w-full'>
            Add Product
         </h3>
         <Formik
            key={formKey}
            initialValues={{
               title: '',
               description: '',
               price: '',
               brand: '',
               category: '',
               color: [],
               quantity: '',
               images: [],
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, setFieldValue }) => {
               try {
                  const actionResult = await Dispatch(createProduct(values));
                  const result = unwrapResult(actionResult);

                  if (result) {
                     setFieldValue('title', '');
                     setFieldValue('description', '');
                     setFieldValue('price', '');
                     setFieldValue('brand', '');
                     setFieldValue('category', '');
                     setFieldValue('color', []);
                     setFieldValue('quantity', '');
                     setFieldValue('images', []);
                     setSelectedItems([]);
                     setFormKey((prevKey) => prevKey + 1);
                  }
               } catch (error) {
                  console.error('Error creating product:', error);
               } finally {
                  setSubmitting(false);
               }
            }}
         >
            {({ isSubmitting, setFieldValue }) => (
               <Form className='w-full space-y-6'>
                  <label htmlFor='productTitle' className='sr-only'>
                     Enter Product Title
                  </label>
                  <Field
                     type='text'
                     name='title'
                     placeholder='Enter Product Title'
                     className='appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg placeholder:text-black'
                  />
                  <ErrorMessage name='title'>
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
                     name='description'
                     setFieldValue={setFieldValue}
                  />
                  <ErrorMessage name='description'>
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
                  <label htmlFor='price' className='sr-only'>
                     Enter Product Price
                  </label>
                  <Field
                     type='number'
                     name='price'
                     placeholder='Enter Product Price'
                     className='appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg placeholder:text-black'
                  />
                  <ErrorMessage name='price'>
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

                  <label htmlFor='brand' className='sr-only'>
                     Select Product Brand
                  </label>
                  <div className='brandProduct'>
                     <Select
                        name='brand'
                        placeholder='Select Product Brand'
                        onChange={(value) => setFieldValue('brand', value)}
                        style={{
                           width: '100%',
                        }}
                        options={
                           brand
                              ? brand.map((item) => ({
                                   value: item.title,
                                   label: item.title,
                                   key: item._id,
                                }))
                              : []
                        }
                     />
                  </div>
                  <ErrorMessage name='brand'>
                     {(msg) => (
                        <div
                           style={{
                              color: 'red',
                           }}
                        >
                           {msg}
                        </div>
                     )}
                  </ErrorMessage>

                  <label htmlFor='category' className='sr-only'>
                     Select Product Categories
                  </label>
                  <div className='brandProduct'>
                     <Select
                        name='category'
                        placeholder='Select Product Categories'
                        onChange={(value) => setFieldValue('category', value)}
                        style={{
                           width: '100%',
                        }}
                        options={
                           brand
                              ? category.map((item) => ({
                                   value: item.title,
                                   label: item.title,
                                   key: item._id,
                                }))
                              : []
                        }
                     />
                  </div>
                  <ErrorMessage name='category'>
                     {(msg) => (
                        <div
                           style={{
                              color: 'red',
                           }}
                        >
                           {msg}
                        </div>
                     )}
                  </ErrorMessage>

                  <Select
                     mode='multiple'
                     value={selectedItems.map((item) => item.title)}
                     name='color'
                     onChange={(value) => handleChange(value, setFieldValue)}
                     placeholder='Select Product Color'
                     style={{
                        width: '100%',
                     }}
                     options={filteredOptions.map((item) => ({
                        value: item.title,
                        label: item.title,
                        key: item._id,
                     }))}
                  />

                  <ErrorMessage name='color'>
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
                  <label htmlFor='quantity' className='sr-only'>
                     Enter Product Quantity
                  </label>
                  <Field
                     type='number'
                     name='quantity'
                     placeholder='Enter Product Quantity'
                     className='appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg placeholder:text-black '
                  />
                  <ErrorMessage name='quantity'>
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

                  <CustomUploadImages
                     setFieldValue={setFieldValue}
                     name='images'
                     context='addProduct'
                  />
                  <ErrorMessage name='images'>
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
                  <Button
                     type='primary'
                     htmlType='submit'
                     loading={isSubmitting}
                     className={`group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                        isSubmitting
                           ? 'bg-gray-400'
                           : 'bg-indigo-600 hover:bg-indigo-700'
                     } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-auto`}
                  >
                     Add Product
                  </Button>
               </Form>
            )}
         </Formik>
      </div>
   );
};

export default AddProduct;
