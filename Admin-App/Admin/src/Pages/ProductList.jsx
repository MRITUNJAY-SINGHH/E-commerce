import TableLayout from '../layout/Table';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
const ProductList = () => {
   return (
      <div>
         <h3 className='text-3xl font-semibold mb-3'>Products</h3>
         <TableLayout />
      </div>
   );
};

export default ProductList;
