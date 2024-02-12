import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableLayout from '../layout/Table';
import { getAllProducts } from '../features/products/productSlice';
import { Link } from 'react-router-dom';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Tooltip, Modal, Card, Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const ProductList = () => {
   const dispatch = useDispatch();
   const products = useSelector((state) => state.product.products);

   const [selectedProduct, setSelectedProduct] = useState(null);
   const [isModalVisible, setIsModalVisible] = useState(false);

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
                     onClick={() => handleViewClick(record)}
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

   const handleViewClick = (record) => {
      setSelectedProduct(record);
      setIsModalVisible(true);
   };

   const handleModalClose = () => {
      setSelectedProduct(null);
      setIsModalVisible(false);
   };

   useEffect(() => {
      dispatch(getAllProducts());
   }, [dispatch]);

   return (
      <div>
         <h3 className='text-3xl font-semibold mb-3'>Products</h3>
         <TableLayout data={products} columns={defaultColumns || []} />

         <Modal
            title={selectedProduct?.title}
            open={isModalVisible}
            onCancel={handleModalClose}
            footer={null}
            centered
         >
            {selectedProduct && (
               <>
                  <Row gutter={16}>
                     <Col span={12}>
                        <Card>
                           {selectedProduct.images &&
                           selectedProduct.images.length > 0 ? (
                              <img
                                 alt={selectedProduct.title}
                                 src={selectedProduct.images[0].url}
                                 style={{ width: '100%', height: 'auto' }}
                              />
                           ) : (
                              <div>No Image Available</div>
                           )}
                        </Card>
                     </Col>
                     <Col span={12}>
                        <Title level={3}>{selectedProduct.title}</Title>
                        <Paragraph>{selectedProduct.description}</Paragraph>
                        <Paragraph>
                           <strong>Brand:</strong> {selectedProduct.brand}
                        </Paragraph>
                        <Paragraph>
                           <strong>Category:</strong> {selectedProduct.category}
                        </Paragraph>
                        <Paragraph>
                           <strong>Price:</strong> {selectedProduct.price}
                        </Paragraph>
                        <Paragraph>
                           <strong>Quantity:</strong> {selectedProduct.quantity}
                        </Paragraph>
                     </Col>
                  </Row>
               </>
            )}
         </Modal>
      </div>
   );
};

export default ProductList;
