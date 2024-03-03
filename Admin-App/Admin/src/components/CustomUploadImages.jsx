/* eslint-disable react/prop-types */

import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { deleteImages, uploadImages } from '../features/upload/uploadSlice';
import { message } from 'antd';

const getBase64 = (file) =>
   new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
   });

const CustomUploadImages = ({ setFieldValue, context }) => {
   const dispatch = useDispatch();
   const isLoading = useSelector((state) => state.upload.isLoading);
   const upload = useSelector((state) => state.upload.upload);
   const [operation, setOperation] = useState('Upload');
   const [previewOpen, setPreviewOpen] = useState(false);
   const [previewImage, setPreviewImage] = useState('');
   const [previewTitle, setPreviewTitle] = useState('');
   const [fileList, setFileList] = useState([]);

   const handleCancel = () => setPreviewOpen(false);

   const images = [];
   upload.flat().map((item) => {
      images.push({ public_id: item.public_id, url: item.url });
   });

   const handlePreview = async (file) => {
      if (!file.url && !file.preview) {
         file.preview = await getBase64(file.originFileObj);
      }
      setPreviewImage(file.url || file.preview);
      setPreviewOpen(true);
      setPreviewTitle(
         file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
      );
   };

   const handleChange = ({ fileList: newFileList }) => {
      console.log(newFileList, 'newFileList');
      if (newFileList.length > 8) {
         message.error('You can only upload 8 images');
         return false;
      }
      setFileList(newFileList);
      setFieldValue('images', images);
   };

   const handleRemove = async (file) => {
      if (file.public_id) {
         setOperation('Delete');
         try {
            await dispatch(deleteImages(file.public_id));
            setFileList((prevFileList) =>
               prevFileList.filter((item) => item !== file)
            );
            message.success('Image deleted successfully');
         } catch (error) {
            message.error('Failed to delete image');
         }
         setOperation('Upload');
      }
   };

   const handleUpload = async (file) => {
      console.log(file, 'file');
      const fileSizeLimit = 1;
      if (file.size / 1024 / 1024 > fileSizeLimit) {
         message.error(`File size must be less than ${fileSizeLimit}MB`);
         return Upload.LIST_IGNORE;
      }
      if (fileList.length >= 8) {
         message.error('You can only upload 8 images');
         return false;
      }
      setOperation('Upload');
      try {
         const response = await dispatch(uploadImages(file));
         if (uploadImages.fulfilled.match(response)) {
            file.public_id = response.payload[0].public_id;
            setFileList((prevFileList) => [...prevFileList, file]);
            message.success('Image uploaded successfully');

            // Set images in the appropriate form field based on the context
            if (context === 'addProduct') {
               setFieldValue('productImages', images);
            } else if (context === 'addBlog') {
               setFieldValue('blogImages', images);
            }
         }
      } catch (error) {
         message.error('Image upload failed');
      }
      return false;
   };

   const uploadButton = (
      <div>
         {isLoading ? <Spin /> : <PlusOutlined />}
         <div style={{ marginTop: 8 }}>{operation}</div>
      </div>
   );

   return (
      <>
         <Upload
            listType='picture-card'
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
            onRemove={handleRemove}
            beforeUpload={handleUpload}
            multiple={false}
            accept='image/*'
         >
            {fileList.length >= 8 ? null : uploadButton}
         </Upload>

         <Modal
            open={previewOpen}
            title={previewTitle}
            footer={null}
            onCancel={handleCancel}
            width={800}
         >
            <img
               alt='example'
               style={{
                  width: '100%',
               }}
               src={previewImage}
            />
         </Modal>
      </>
   );
};

export default CustomUploadImages;
