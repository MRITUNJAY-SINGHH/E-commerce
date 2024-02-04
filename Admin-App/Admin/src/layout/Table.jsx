import { useState, useMemo } from 'react';
import { Table, Input, Button, Space } from 'antd';
import PropTypes from 'prop-types';
import { CSVLink } from 'react-csv';

const { Search } = Input;

const TableLayout = ({ data, columns }) => {
   const [searchText, setSearchText] = useState('');
   const [sortedInfo, setSortedInfo] = useState({});
   const [selectedRowKeys, setSelectedRowKeys] = useState([]);
   const [paginationState, setPaginationState] = useState({
      current: 1,
      pageSize: 10,
   });

   const formattedData = useMemo(() => {
      return data.map((customer, index) => ({
         key: index + 1,
         name: customer.name,
         mobile: customer.mobile,
         email: customer.email,
      }));
   }, [data]);

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

   const columnWidth = 100 / columns.length + '%';

   const dynamicColumns = useMemo(() => {
      return columns.map((col) => ({
         ...col,
         width: columnWidth,
      }));
   }, [columns, columnWidth]);

   const sortedData = useMemo(() => {
      if (sortedInfo.columnKey && sortedInfo.order) {
         return [...formattedData].sort((a, b) => {
            const sortOrder = sortedInfo.order === 'ascend' ? 1 : -1;
            const aValue = a[sortedInfo.columnKey];
            const bValue = b[sortedInfo.columnKey];
            return aValue.localeCompare(bValue) * sortOrder;
         });
      }
      return formattedData;
   }, [formattedData, sortedInfo]);

   const filteredData = useMemo(() => {
      if (searchText) {
         const searchTextLower = searchText.toLowerCase();
         return sortedData.filter(
            (customer) =>
               customer.name.toLowerCase().includes(searchTextLower) ||
               customer.email.toLowerCase().includes(searchTextLower) ||
               customer.mobile.toString().includes(searchTextLower)
         );
      }
      return sortedData;
   }, [searchText, sortedData]);

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
            <Button>
               <CSVLink
                  data={filteredData}
                  filename={'customer_data.csv'}
                  className='ant-btn ant-btn-primary'
               >
                  Export to CSV
               </CSVLink>
            </Button>
         </Space>

         <Table
            columns={dynamicColumns}
            dataSource={filteredData}
            onChange={handleTableChange}
            pagination={paginationState}
            rowSelection={rowSelection}
         />
      </div>
   );
};

TableLayout.propTypes = {
   data: PropTypes.arrayOf(PropTypes.object).isRequired,
   columns: PropTypes.arrayOf(PropTypes.object),
};

export default TableLayout;
