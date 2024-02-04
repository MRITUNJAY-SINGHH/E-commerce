import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableLayout from '../layout/Table';
import { getAllProducts } from '../features/products/productSlice';
import Link from 'antd/es/typography/Link';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const ProductList = () => {
   const dispatch = useDispatch();
   const { product } = useSelector((state) => state.product);

   const defaultColumns = [
      {
         title: 'ID',
         dataIndex: 'id',
      },
      {
         title: 'Title',
         dataIndex: 'title',
         key: 'title',
      },
      {
         title: 'Price',
         key: 'price',
         dataIndex: 'price',
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
         title: 'Color',
         key: 'color',
         dataIndex: 'color',
      },
      {
         title: 'Action',
         key: 'action',
         render: (text, record) => (
            <>
               <Link to={`/admin/product/${record._id}`}>
                  <EditOutlined /> Edit
               </Link>
               <span className='mx-2'>|</span>
               <Link to={`/admin/product/${record._id}`}>
                  <DeleteOutlined /> Delete
               </Link>
            </>
         ),
      },
   ];

   useEffect(() => {
      dispatch(getAllProducts());
   }, [dispatch]);

   return (
      <div>
         <h3 className='text-3xl font-semibold mb-3'>Products</h3>
         <TableLayout data={product} columns={defaultColumns || []} />
      </div>
   );
};

export default ProductList;
