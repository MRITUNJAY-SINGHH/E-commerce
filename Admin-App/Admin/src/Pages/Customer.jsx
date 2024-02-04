import { useEffect } from 'react';
import TableLayout from '../layout/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../features/customer/customerSlice';

const Customer = () => {
   const dispatch = useDispatch();
   const { customers } = useSelector((state) => state.customer);

   const defaultColumns = [
      {
         title: 'ID',
         dataIndex: 'id',
      },
      {
         title: 'Name',
         dataIndex: 'name',
         key: 'name',
      },
      {
         title: 'Mobile',
         dataIndex: 'mobile',
         key: 'mobile',
      },
      {
         title: 'Email',
         key: 'email',
         dataIndex: 'email',
      },
   ];

   useEffect(() => {
      dispatch(getUsers());
   }, [dispatch]);

   return (
      <div>
         <h3 className='text-3xl font-semibold mb-3'>Customer</h3>
         <TableLayout data={customers} columns={defaultColumns || []} />
      </div>
   );
};

export default Customer;
