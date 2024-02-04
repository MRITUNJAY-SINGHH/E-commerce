import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableLayout from '../layout/Table';
import Link from 'antd/es/typography/Link';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { getAllColors } from '../features/color/colorSlice';

const ColorList = () => {
   const dispatch = useDispatch();
   const { color } = useSelector((state) => state.color);

   const defaultColumns = [
      {
         title: 'ID',
         dataIndex: '_id',
      },
      {
         title: 'Color Name',
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
      dispatch(getAllColors());
   }, [dispatch]);

   return (
      <div>
         <h3 className='text-3xl font-semibold mb-3'>Color List</h3>
         <TableLayout data={color} columns={defaultColumns || []} />
      </div>
   );
};

export default ColorList;
