import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { getAllCoupons } from '../features/couponService/couponSlice';
import Link from 'antd/es/typography/Link';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

const CouponList = () => {
   const dispatch = useDispatch();
   const { coupons } = useSelector((state) => state.coupons);

   const defaultColumns = [
      {
         title: 'ID',
         dataIndex: '_id',
      },
      {
         title: 'Coupon Name',
         dataIndex: 'name',
         key: 'name',
      },
      {
         title: 'Expiration Date',
         dataIndex: 'expire',
         key: 'expire',
         render: (text) => dayjs.utc(text).format('DD/MM/YYYY'),
      },
      {
         title: 'Discount Percentage',
         dataIndex: 'discount',
         key: 'discount',
      },

      {
         title: 'Action',
         key: 'action',
         render: (text, record) => (
            <Space size='middle'>
               <Link href={`/admin/coupon/${record._id}`}>
                  <EditOutlined /> Edit
               </Link>
               <Link href={`/admin/coupon/${record._id}`}>
                  <DeleteOutlined /> Delete
               </Link>
            </Space>
         ),
      },
   ];

   useEffect(() => {
      dispatch(getAllCoupons());
   }, [dispatch]);

   return (
      <div>
         <h3 className='text-3xl font-semibold mb-3'>Coupon List</h3>

         <Table dataSource={coupons} columns={defaultColumns} />
      </div>
   );
};

export default CouponList;
