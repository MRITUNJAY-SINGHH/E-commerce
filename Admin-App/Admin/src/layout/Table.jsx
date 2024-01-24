import { Table } from 'antd';
const columns = [
   {
      title: 'Sno',
      dataIndex: 'key',
   },
   {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
   },
   {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
   },
   {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
   },
];
const data = [];
for (let i = 0; i < 46; i++) {
   data.push({
      key: i,
      name: `John Brown ${i}`,
      product: 32,
      address: 'New York No. 1 Lake Park',
      status: 'Active',
   });
}
const TableLayout = () => <Table columns={columns} dataSource={data} />;
export default TableLayout;
