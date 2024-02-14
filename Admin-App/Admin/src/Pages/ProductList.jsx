import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableLayout from '../layout/Table';
import { getAllProducts } from '../features/products/productSlice';
import { Link } from 'react-router-dom';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Tooltip, Modal, Card, Row, Col } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';

const ProductList = () => {
   const dispatch = useDispatch();
   const products = useSelector((state) => state.product.products);

   const [selectedProduct, setSelectedProduct] = useState(null);
   const [isModalVisible, setIsModalVisible] = useState(false);

   useEffect(() => {
      setSelectedProduct(products);
   }, [products]);

   const defaultColumns = [
      {
         title: 'ID',
         dataIndex: '_id',
      },
      {
         title: 'Title',
         dataIndex: 'title',
         key: 'title',
      },
      {
         title: 'Brand',
         key: 'brand',
         dataIndex: 'brand',
      },
      {
         title: 'Category',
         key: 'category',
         dataIndex: 'category',
      },
      {
         title: 'Price',
         key: 'price',
         dataIndex: 'price',
      },
      {
         title: 'Quantity',
         key: 'quantity',
         dataIndex: 'quantity',
      },
      {
         title: 'Action',
         key: 'action',
         render: (record) => (
            <>
               <Tooltip title='View'>
                  <EyeOutlined
                     style={{
                        fontSize: '18px',
                        color: 'black',
                        cursor: 'pointer',
                     }}
                     onClick={() => handleViewClick(record?._id)}
                  />
               </Tooltip>
               <span className='mx-2'>|</span>
               <Tooltip title='Edit'>
                  <Link
                     to={`/admin/product/${record._id}`}
                     style={{ fontSize: '18px', color: 'black' }}
                  >
                     <EditOutlined />
                  </Link>
               </Tooltip>
               <span className='mx-2'>|</span>
               <Tooltip title='Delete'>
                  <Link
                     to={`/admin/product/${record._id}`}
                     style={{ fontSize: '18px', color: 'black' }}
                  >
                     <DeleteOutlined />
                  </Link>
               </Tooltip>
            </>
         ),
      },
   ];

   const handleViewClick = (productId) => {
      const selectedProduct = products.find(
         (product) => product._id === productId
      );
      setSelectedProduct(selectedProduct);
      setIsModalVisible(true);
   };

   const handleModalClose = () => {
      setSelectedProduct(null);
      setIsModalVisible(false);
   };

   useEffect(() => {
      dispatch(getAllProducts());
   }, [dispatch]);
   const memoizedSelectedProduct = useMemo(
      () => selectedProduct,
      [selectedProduct]
   );

   return (
      <div>
         <h3 className='text-3xl font-semibold mb-3'>Products</h3>
         <TableLayout
            data={products}
            columns={defaultColumns || []}
            onRow={(record) => ({
               onClick: () => handleViewClick(record._id),
            })}
         />

         <Modal
            title='Product Details'
            open={isModalVisible}
            onCancel={handleModalClose}
            footer={null}
            centered
            width={1000}
         >
            {memoizedSelectedProduct && (
               <Row gutter={16}>
                  <Col span={16}>
                     <Card>
                        <Row gutter={[16, 16]}>
                           <Col span={12} className='flex flex-col'>
                              <strong className='text-gray-700 text-lg'>
                                 Product ID
                              </strong>
                              <strong className='text-black text-[16px]'>
                                 {selectedProduct._id
                                    ? selectedProduct._id.replace(
                                         /.(?=.{4,}$)/g,
                                         '*'
                                      )
                                    : ''}
                              </strong>
                           </Col>
                           <Col span={12} className='flex flex-col'>
                              <strong className='text-gray-700 text-lg'>
                                 Title
                              </strong>{' '}
                              <strong className='text-black text-lg'>
                                 {selectedProduct?.title}
                              </strong>
                           </Col>
                           <Col span={12} className='flex flex-col'>
                              <strong className='text-gray-700 text-lg'>
                                 Slug
                              </strong>{' '}
                              <span className='text-black text-lg'>
                                 {selectedProduct.slug}
                              </span>
                           </Col>
                           <Col span={12} className='flex flex-col'>
                              <strong className='text-gray-700 text-lg'>
                                 Description
                              </strong>
                              <div
                                 className='text-black text-lg'
                                 dangerouslySetInnerHTML={{
                                    __html: selectedProduct.description,
                                 }}
                              />
                           </Col>
                           <Col span={12} className='flex flex-col'>
                              <strong className='text-gray-700 text-lg'>
                                 Price
                              </strong>
                              <span className='text-black text-lg'>
                                 {selectedProduct.price
                                    ? `₹${selectedProduct.price}`
                                    : ''}
                              </span>
                           </Col>
                           <Col span={12} className='flex flex-col'>
                              <strong className='text-gray-700 text-lg'>
                                 Category
                              </strong>{' '}
                              <span className='text-black text-lg'>
                                 {selectedProduct.category}
                              </span>
                           </Col>
                           <Col span={12} className='flex flex-col'>
                              <strong className='text-gray-700 text-lg'>
                                 Brand
                              </strong>{' '}
                              <span className='text-black text-lg'>
                                 {selectedProduct.brand}
                              </span>
                           </Col>
                           <Col span={12} className='flex flex-col'>
                              <strong className='text-gray-700 text-lg'>
                                 Quantity
                              </strong>{' '}
                              <span className='text-black text-lg'>
                                 {selectedProduct.quantity}
                              </span>
                           </Col>
                           <Col span={12} className='flex flex-col'>
                              <strong className='text-gray-700 text-lg'>
                                 Sold
                              </strong>{' '}
                              <span className='text-black text-lg'>
                                 {selectedProduct.sold}
                              </span>
                           </Col>
                           <Col span={12} className='flex flex-col'>
                              <strong className='text-gray-700 text-lg'>
                                 Total Rating
                              </strong>{' '}
                              <span className='text-black text-lg'>
                                 {selectedProduct.totalrating}
                              </span>
                           </Col>
                        </Row>
                     </Card>
                  </Col>
                  <Col span={8}>
                     <Card
                        cover={
                           selectedProduct.images &&
                           selectedProduct.images.length > 0 ? (
                              <img
                                 key={selectedProduct.images[0]._id}
                                 src={selectedProduct.images[0].url}
                                 alt={selectedProduct.images[0]._id}
                                 style={{ objectFit: 'cover' }}
                              />
                           ) : (
                              <Paragraph className='text-center text-xl flex justify-center items-center text-gray-400'>
                                 No Image Available
                              </Paragraph>
                           )
                        }
                     ></Card>
                  </Col>
               </Row>
            )}
         </Modal>
      </div>
   );
};

export default ProductList;
