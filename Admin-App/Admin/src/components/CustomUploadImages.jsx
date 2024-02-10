import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImages } from '../features/upload/uploadSlice';
import { message } from 'antd';

const getBase64 = (file) =>
   new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
   });

const CustomUploadImages = () => {
   const dispatch = useDispatch();
   const isLoading = useSelector((state) => state.upload.isLoading);
   const [previewOpen, setPreviewOpen] = useState(false);
   const [previewImage, setPreviewImage] = useState('');
   const [previewTitle, setPreviewTitle] = useState('');
   const [fileList, setFileList] = useState([]);

   const handleCancel = () => setPreviewOpen(false);

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
      if (newFileList.length > 8)
         return message.error('You can only upload 8 images');
      else {
         setFileList(newFileList);
         message.success('Image uploaded successfully');
      }
   };

   const handleUpload = async (file) => {
      try {
         dispatch(uploadImages(file));
      } catch (error) {
         console.error('Compression failed:', error);
         message.error('Image upload failed');
      }
      return false;
   };

   const uploadButton = (
      <div>
         {isLoading ? <Spin /> : <PlusOutlined />}
         <div style={{ marginTop: 8 }}>Upload</div>
      </div>
   );

   return (
      <>
         <Upload
            listType='picture-card'
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
            beforeUpload={handleUpload}
            multiple
            accept='image/*'
         >
            {fileList.length >= 8 ? null : uploadButton}
         </Upload>
         <Modal
            open={previewOpen}
            title={previewTitle}
            footer={null}
            onCancel={handleCancel}
            width={1080}
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
