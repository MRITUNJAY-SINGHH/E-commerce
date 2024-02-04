import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableLayout from '../layout/Table';
import Link from 'antd/es/typography/Link';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { getAllBlogs } from '../features/blog/blogSlice';

const Blog = () => {
   const dispatch = useDispatch();
   const { blog } = useSelector((state) => state.blog);

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
         title: 'Category',
         dataIndex: 'category',
         key: 'category',
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
      dispatch(getAllBlogs());
   }, [dispatch]);

   return (
      <div>
         <h3 className='text-3xl font-semibold mb-3'>Blog List</h3>
         <TableLayout data={blog} columns={defaultColumns || []} />
      </div>
   );
};

export default Blog;
