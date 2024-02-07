import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableLayout from '../layout/Table';
import Link from 'antd/es/typography/Link';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { getAllCategory } from '../features/category/categorySlice';

const CategoryList = () => {
   const dispatch = useDispatch();
   const { category } = useSelector((state) => state.category);

   const defaultColumns = [
      {
         title: 'ID',
         dataIndex: '_id',
      },
      {
         title: 'Category Name',
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
      dispatch(getAllCategory());
   }, [dispatch]);

   return (
      <div>
         <h3 className=' text-3xl font-semibold mb-3'>Product Categories</h3>

         <TableLayout data={category} columns={defaultColumns || []} />
      </div>
   );
};

export default CategoryList;
