/* eslint-disable react/no-unescaped-entities */
import { DatePicker, Card, Statistic, Row, Col } from 'antd';
import { ArrowUpOutlined, DollarOutlined } from '@ant-design/icons';
import { ChartColumn } from '../layout/Chart';
import TableLayout from '../layout/Table';

const Dashboard = () => {
   const handleDateChange = (dateString) => {
      console.log(dateString);
   };

   return (
      <>
         <div className='flex justify-between items-center pb-5'>
            <div>
               <h3 className='text-3xl font-semibold'>Dashboard</h3>
            </div>
            <div className=' p-4 rounded-md'>
               <div className='text-gray-600'>
                  <h4 className='mb-1 text-sm font-semibold'>Select Date</h4>
                  <DatePicker
                     size='large'
                     format='DD-MM-YYYY'
                     onChange={handleDateChange}
                  />
               </div>
            </div>
         </div>
         <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
               <Card className='p-8 shadow-md rounded-md'>
                  <Row align='middle' justify='space-between'>
                     <Col>
                        <Statistic
                           title={
                              <strong className='text-[20px]'>
                                 Today's Sales
                              </strong>
                           }
                           value='$53,000'
                           precision={2}
                        />
                     </Col>
                     <Col className='text-[#1890ff] flex items-center text-2xl'>
                        <DollarOutlined /> <span className='ml-1'>+30%</span>
                     </Col>
                  </Row>
               </Card>
            </Col>

            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
               <Card className='p-8 shadow-md rounded-md'>
                  <Row align='middle' justify='space-between'>
                     <Col>
                        <Statistic
                           title={
                              <strong className='text-[20px]'>
                                 Average Order Value
                              </strong>
                           }
                           value='$1,200'
                           precision={2}
                        />
                     </Col>
                     <Col className='text-[#1890ff] flex items-center text-2xl'>
                        <DollarOutlined /> <span className='ml-1'>+15%</span>
                     </Col>
                  </Row>
               </Card>
            </Col>

            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
               <Card className='p-8 shadow-md rounded-md'>
                  <Row align='middle' justify='space-between'>
                     <Col>
                        <Statistic
                           title={
                              <strong className='text-[20px]'>
                                 Total Orders
                              </strong>
                           }
                           value='1,200'
                        />
                     </Col>
                     <Col className='text-[#1890ff] flex items-center text-2xl'>
                        <ArrowUpOutlined /> <span className='ml-1'>+10%</span>
                     </Col>
                  </Row>
               </Card>
            </Col>
         </Row>

         <div className='mt-4 flex-grow'>
            <h3 className='text-3xl font-semibold mb-5'>Income Statics</h3>
            <ChartColumn />
         </div>
         <div className='mt-4 flex-grow'>
            <h3 className='text-3xl font-semibold mb-5 '>Recent Orders</h3>
            {/* <TableLayout /> */}
         </div>
      </>
   );
};

export default Dashboard;
