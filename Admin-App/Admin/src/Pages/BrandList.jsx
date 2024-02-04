import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableLayout from '../layout/Table';
import Link from 'antd/es/typography/Link';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { getAllBrands } from '../features/brand/brandSlice';

const BrandList = () => {
   const dispatch = useDispatch();
   const { brand } = useSelector((state) => state.brand);

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
      dispatch(getAllBrands());
   }, [dispatch]);

   return (
      <div>
         <h3 className='text-3xl font-semibold mb-3'>Brand List</h3>
         <TableLayout data={brand} columns={defaultColumns || []} />
      </div>
   );
};

export default BrandList;
