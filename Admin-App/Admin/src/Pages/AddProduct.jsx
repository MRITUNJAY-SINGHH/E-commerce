import Editor from '../components/Editor/Editor';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;

const AddProduct = () => {
   const props = {
      name: 'file',
      multiple: true,
      action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
      onChange(info) {
         const { status } = info.file;
         if (status !== 'uploading') {
            console.log(info.file, info.fileList);
         }
         if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
         } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
         }
      },
      onDrop(e) {
         console.log('Dropped files', e.dataTransfer.files);
      },
   };
   return (
      <div className='flex flex-col items-start justify-center bg-gray-100  sm:px-6 lg:px-8 w-full'>
         <h3 className='text-3xl font-semibold text-left w-full'>
            Add Product
         </h3>
         <form className='w-full space-y-6' action=''>
            <label htmlFor='productTitle' className='sr-only'>
               Enter Product Title
            </label>
            <input
               type='text'
               id='productTitle'
               placeholder='Enter Product Title'
               className='appearance-none relative block w-full px-6 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg'
            />

            <Editor placeholder='Enter Product Description' />

            <label htmlFor='productPrice' className='sr-only'>
               Enter Product Price
            </label>
            <input
               type='number'
               id='productPrice'
               placeholder='Enter Product Price'
               className='appearance-none relative block w-full px-6 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg'
            />

            <label htmlFor='productCategories' className='sr-only'>
               Enter Product Categories
            </label>
            <input
               type='text'
               id='productCategories'
               placeholder='Enter Product Categories'
               className='appearance-none relative block w-full px-6 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg'
            />

            <label htmlFor='productColor' className='sr-only'>
               Enter Product Color
            </label>
            <input
               type='text'
               id='productColor'
               placeholder='Enter Product Color'
               className='appearance-none relative block w-full px-6 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg'
            />

            <label htmlFor='productQuantity' className='sr-only'>
               Enter Product Quantity
            </label>
            <input
               type='number'
               id='productQuantity'
               placeholder='Enter Product Quantity'
               className='appearance-none relative block w-full px-6 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg '
            />

            <Dragger {...props}>
               <p className='ant-upload-drag-icon'>
                  <InboxOutlined />
               </p>
               <p className='ant-upload-text'>
                  Click or drag file to this area to upload
               </p>
               <p className='ant-upload-hint'></p>
            </Dragger>

            <button
               type='submit'
               className='group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-auto'
            >
               Add Product
            </button>
         </form>
      </div>
   );
};

export default AddProduct;
