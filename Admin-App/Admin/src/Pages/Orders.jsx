import { useDispatch, useSelector } from 'react-redux';
import TableLayout from '../layout/Table';
import { useEffect } from 'react';
import Link from 'antd/es/typography/Link';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { getAllOrders } from '../features/auth/AuthSlice';

const Orders = () => {
   const dispatch = useDispatch();
   const { orders } = useSelector((state) => state.auth);

   useEffect(() => {
      dispatch(getAllOrders());
   }, [dispatch]);

   const defaultColumns = [
      {
         title: 'Order ID',
         dataIndex: '_id',
      },
      // {
      //    title: 'Full Name',
      //    dataIndex: 'orderby',
      //    render: (orderby) => `${orderby.firstname} ${orderby.lastname}`,
      // },
      {
         title: 'Status',
         dataIndex: 'orderStatus',
      },
      {
         title: 'Product ID',
         dataIndex: 'products',
         render: (products) =>
            products.map((product) => product._id).join(', '), // Displaying IDs of all products
      },
      {
         title: 'Action',
         key: 'action',
         render: (text, record) => (
            <>
               <Link to={`/admin/order/${record._id}`}>
                  <EditOutlined /> Edit
               </Link>
               <span className='mx-2'>|</span>
               <Link to={`/admin/order/${record._id}`}>
                  <DeleteOutlined /> Delete
               </Link>
            </>
         ),
      },
   ];

   return (
      <div>
         <h3 className='text-3xl font-semibold mb-3'>Recent Reviews</h3>
         <TableLayout data={orders} columns={defaultColumns || []} />
      </div>
   );
};

export default Orders;
