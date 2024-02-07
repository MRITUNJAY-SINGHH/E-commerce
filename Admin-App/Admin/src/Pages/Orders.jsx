import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Tag, Popover, Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { getAllOrders } from '../features/auth/AuthSlice';
import Search from 'antd/es/input/Search';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const Orders = () => {
   const dispatch = useDispatch();
   const { orders } = useSelector((state) => state.auth);

   const [searchText, setSearchText] = useState('');
   const [sortedInfo, setSortedInfo] = useState({});
   const [selectedRowKeys, setSelectedRowKeys] = useState([]);
   const [paginationState, setPaginationState] = useState({
      current: 1,
      pageSize: 10,
   });

   useEffect(() => {
      dispatch(getAllOrders());
   }, [dispatch]);

   const orderColumns = useMemo(
      () => [
         {
            title: 'Order ID',
            dataIndex: '_id',
         },
         {
            title: 'Customer Info',
            dataIndex: 'orderby',
            render: (customer) => (
               <Popover
                  title='Customer Info'
                  content={
                     <div style={{ fontSize: '1.2em' }}>
                        <p>
                           <strong>Customer Name:</strong> {customer.firstname}{' '}
                           {customer.lastname}
                        </p>

                        <p>
                           <strong>Email ID:</strong> {customer.email}
                        </p>
                        <p>
                           <strong>Mobile No:</strong> {customer.mobile}
                        </p>
                     </div>
                  }
                  className='large-popover'
               >
                  <Button type='link' style={{ color: 'black' }}>
                     {`${customer.firstname} ${customer.lastname}`}
                  </Button>
               </Popover>
            ),
         },

         {
            title: 'Product Info',
            dataIndex: 'products',
            render: (products) =>
               products.map((product) => (
                  <Popover
                     key={product._id}
                     title='Product Info'
                     content={
                        <div style={{ fontSize: '1.2em' }}>
                           <p>
                              <strong>Title:</strong> {product.product.title}
                           </p>
                           <p>
                              <strong>Category:</strong>
                              {product.product.category}
                           </p>
                           <p>
                              <strong>Price:</strong> {product.product.price}
                           </p>
                        </div>
                     }
                     className='large-popover'
                  >
                     <Button
                        type='link'
                        className='flex text-black items-start justify-start flex-col'
                     >
                        {product.product.title}
                     </Button>
                  </Popover>
               )),
         },
         {
            title: 'Status',
            dataIndex: 'orderStatus',
            render: (status) => {
               let color;
               switch (status.substring(0, 3).toLowerCase()) {
                  case 'not':
                     color = 'gray';
                     break;
                  case 'cas':
                     color = 'yellow';
                     break;
                  case 'pro':
                     color = 'orange';
                     break;
                  case 'dis':
                     color = 'blue';
                     break;
                  case 'can':
                     color = 'red';
                     break;
                  case 'com':
                     color = 'green';
                     break;
                  default:
                     color = 'gray';
               }
               return (
                  <Tag
                     color={color}
                     className='text-[16px] text-bold px-2 py-1 rounded-md'
                  >
                     {status}
                  </Tag>
               );
            },
         },
         {
            title: 'Total Amount',
            dataIndex: 'paymentIntent',
            render: (paymentIntent) => `₹${paymentIntent.amount || 0}`,
         },
         {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
               <>
                  <Button
                     type='link'
                     onClick={() => console.log('Edit', record)}
                  >
                     <EditOutlined /> Edit
                  </Button>
                  <span className='mx-2'>|</span>
                  <Button
                     type='link'
                     onClick={() => console.log('Delete', record)}
                  >
                     <DeleteOutlined /> Delete
                  </Button>
               </>
            ),
         },
      ],
      []
   );

   const handleTableChange = (pagination, filters, sorter) => {
      setSortedInfo(sorter);
      setPaginationState(pagination);
   };

   const rowSelection = {
      selectedRowKeys,
      onChange: (selectedKeys) => {
         setSelectedRowKeys(selectedKeys);
      },
   };

   const columnWidth = 100 / orderColumns.length + '%';

   const dynamicColumns = useMemo(() => {
      return orderColumns.map((col) => ({
         ...col,
         width: columnWidth,
      }));
   }, [orderColumns, columnWidth]);

   const sortedData = useMemo(() => {
      if (sortedInfo.columnKey && sortedInfo.order) {
         return [...orders].sort((a, b) => {
            const sortOrder = sortedInfo.order === 'ascend' ? 1 : -1;
            const aValue = a[sortedInfo.columnKey];
            const bValue = b[sortedInfo.columnKey];
            return aValue.localeCompare(bValue) * sortOrder;
         });
      }
      return orders;
   }, [orders, sortedInfo]);

   const filteredData = useMemo(() => {
      if (searchText) {
         const searchTextLower = searchText.toLowerCase();
         return sortedData.filter((order) =>
            orderColumns.some(
               (col) =>
                  col.dataIndex &&
                  order[col.dataIndex] &&
                  order[col.dataIndex]
                     .toString()
                     .toLowerCase()
                     .includes(searchTextLower)
            )
         );
      }
      return sortedData;
   }, [searchText, sortedData, orderColumns]);

   const handleExportToPDF = () => {
      const doc = new jsPDF();

      filteredData.forEach((order, index) => {
         // Invoice title (center)
         doc.setFontSize(18);
         doc.setFont('helvetica');
         doc.text(
            `Order Invoice`,
            doc.internal.pageSize.width / 2,
            20,
            null,
            null,
            'center'
         );

         // Page number (bottom-right)
         doc.setFontSize(10);
         doc.setFont('courier');
         doc.text(
            `Page: ${index + 1}`,
            doc.internal.pageSize.width - 20,
            doc.internal.pageSize.height - 10,
            null,
            null,
            'right'
         );

         // Company details (top-left)
         doc.setFontSize(12);
         doc.setFont('helvetica');
         doc.text('Company Name: Mritunjay Singh', 20, 40);
         doc.text('Company Address: Lal Kuan Ghaziabad', 20, 50);
         doc.text('Company Contact: 7065429235', 20, 60);
         // Order ID (top-right)
         doc.setFontSize(10);
         doc.setFont('courier');
         doc.text(
            `Order ID: ${order._id}`,
            doc.internal.pageSize.width - 20,
            40,
            null,
            null,
            'right'
         );

         // Customer details
         doc.setFontSize(12);
         doc.setFont('helvetica');
         doc.text(
            `Customer Name: ${order.orderby.firstname} ${order.orderby.lastname}`,
            20,
            80
         );
         doc.text(`Email: ${order.orderby.email}`, 20, 90);
         doc.text(`Mobile: ${order.orderby.mobile}`, 20, 100);

         // Order details
         doc.setFont('courier');
         doc.autoTable({
            startY: 120,
            head: [['Product Title', 'Quantity', 'Price', 'Status']],
            body: order.products.map((product) => [
               product.product.title,
               product.count,
               `${product.count} x ${product.product.price} INR`,
               order.orderStatus,
            ]),
            theme: 'striped',
            styles: { fontSize: 12 },
         });

         // Total amount
         const totalAmount = order.products.reduce(
            (total, product) => total + product.count * product.product.price,
            0
         );
         doc.setFontSize(12);
         doc.setFont('helvetica');
         doc.text(
            `Total Amount: ${totalAmount} INR`,
            20,
            doc.autoTable.previous.finalY + 10
         );

         if (index < filteredData.length - 1) {
            doc.addPage();
         }
      });

      doc.save('invoice.pdf');
   };

   return (
      <div>
         <Space style={{ marginBottom: 16 }}>
            <Search
               placeholder='Search...'
               onChange={(e) => setSearchText(e.target.value)}
               style={{ width: '500px' }}
            />
            <Button
               onClick={() => {
                  setSearchText('');
                  setSortedInfo({});
                  setPaginationState({ current: 1, pageSize: 10 });
               }}
            >
               Clear Filters & Reset Sorting
            </Button>
            <Button onClick={handleExportToPDF}>Export to PDF</Button>
         </Space>

         <Table
            columns={dynamicColumns}
            key={dynamicColumns}
            dataSource={filteredData}
            onChange={handleTableChange}
            pagination={paginationState}
            rowSelection={rowSelection}
         />
      </div>
   );
};

export default Orders;
