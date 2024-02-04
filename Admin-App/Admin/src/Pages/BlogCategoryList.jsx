import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableLayout from '../layout/Table';
import Link from 'antd/es/typography/Link';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { getAllBlogCategories } from '../features/blogCategory/blogSlice';

const BlogCategoryList = () => {
   const dispatch = useDispatch();
   const { BlogCategory } = useSelector((state) => state.BlogCategory);

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
      dispatch(getAllBlogCategories());
   }, [dispatch]);

   return (
      <div>
         <h3 className='text-3xl font-semibold mb-3'>Blog Categories List</h3>
         <TableLayout data={BlogCategory} columns={defaultColumns || []} />
      </div>
   );
};

export default BlogCategoryList;
