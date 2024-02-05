import { useDispatch, useSelector } from 'react-redux';
import { Select } from 'antd';
import TableLayout from '../layout/Table';
import { useEffect } from 'react';
import { getAllEnquires } from '../features/Enquires/enquiresSlice';
import Link from 'antd/es/typography/Link';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
const { Option } = Select;

const EnquiresData = () => {
   const dispatch = useDispatch();
   const { enquiry } = useSelector((state) => state.enquires);

   const defaultColumns = [
      {
         title: 'ID',
         dataIndex: '_id',
      },
      {
         title: 'Name',
         dataIndex: 'name',
         key: 'name',
      },
      {
         title: 'Email Address',
         dataIndex: 'email',
         key: 'email',
      },
      {
         title: 'Mobile Number',
         dataIndex: 'mobile',
         key: 'mobile',
      },
      {
         title: 'Comments or Enquiry',
         dataIndex: 'comment',
         key: 'comment',
      },
      {
         title: 'Status',
         dataIndex: 'status',
         key: 'status',
         render: (status, record) => (
            <Select
               defaultValue={status}
               style={{ width: 120 }}
               onChange={(value) => (value, record)}
            >
               <Option value='pending'>Pending</Option>
               <Option value='completed'>Completed</Option>
            </Select>
         ),
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
      dispatch(getAllEnquires());
   }, [dispatch]);
   return (
      <div>
         <h3 className=' text-3xl font-semibold mb-3'>Recent Reviews</h3>
         <TableLayout data={enquiry} columns={defaultColumns || []} />
      </div>
   );
};

export default EnquiresData;
