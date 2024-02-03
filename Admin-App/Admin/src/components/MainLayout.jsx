import { useState } from 'react';
import {
   AntDesignOutlined,
   AppstoreAddOutlined,
   BellOutlined,
   BgColorsOutlined,
   DashboardOutlined,
   DeleteOutlined,
   FileAddOutlined,
   FolderAddOutlined,
   LogoutOutlined,
   MenuFoldOutlined,
   MenuUnfoldOutlined,
   PlusCircleOutlined,
   ProfileOutlined,
   QuestionCircleOutlined,
   ReadOutlined,
   SettingOutlined,
   ShoppingCartOutlined,
   ShoppingOutlined,
   StarOutlined,
   UnorderedListOutlined,
   UserOutlined,
} from '@ant-design/icons';
import {
   Layout,
   Menu,
   Button,
   theme,
   Dropdown,
   Avatar,
   Badge,
   notification,
   Space,
   Typography,
} from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
const { Text } = Typography;

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const MainLayout = () => {
   const [collapsed, setCollapsed] = useState(false);
   const navigate = useNavigate();
   const {
      token: { colorBgContainer, borderRadiusLG },
   } = theme.useToken();

   const iconStyle = { fontSize: '25px' };
   const menuStyle = {
      fontSize: '20px',
   };
   const handleMenuClick = ({ key }) => {
      if (key === 'signOut') {
         // Handle signout
      } else {
         // Handle other menu items if needed
      }
   };

   const userMenu = (
      <Menu onClick={handleMenuClick} style={{ minWidth: '150px' }}>
         <Menu.Item key='profile' style={{ fontSize: '20px' }}>
            <Space>
               <UserOutlined />
               <Text>Profile</Text>
            </Space>
         </Menu.Item>
         <Menu.Item key='settings' style={{ fontSize: '20px' }}>
            <Space>
               <SettingOutlined />
               <Text>Settings</Text>
            </Space>
         </Menu.Item>
         <Menu.Item key='signOut' style={{ fontSize: '20px' }}>
            <Space>
               <LogoutOutlined />
               <Text>Sign Out</Text>
            </Space>
         </Menu.Item>
         <Menu.Item
            key='deleteAccount'
            style={{ fontSize: '20px' }}
            danger={true}
         >
            <Space>
               <DeleteOutlined />
               <Text>Delete Account</Text>
            </Space>
         </Menu.Item>
      </Menu>
   );

   const openNotification = () => {
      notification.open({
         message: 'Notification Title',
         description: 'This is the content of the notification',
      });
   };

   const menuItems = [
      {
         key: '',
         icon: <DashboardOutlined style={iconStyle} />,
         label: 'Dashboard',
      },
      {
         key: 'customer',
         icon: <UserOutlined style={iconStyle} />,
         label: 'Customer',
      },
      {
         key: 'catalog',
         icon: <ShoppingCartOutlined style={iconStyle} />,
         label: 'Catalog',
         children: [
            {
               key: 'product',
               icon: <ShoppingCartOutlined style={iconStyle} />,
               label: 'Product',
            },
            {
               key: 'product-list',
               icon: <ShoppingCartOutlined style={iconStyle} />,
               label: 'Product-List',
            },
            {
               key: 'brand',
               icon: <AntDesignOutlined style={iconStyle} />,
               label: 'Brand',
            },
            {
               key: 'brand-list',
               icon: <StarOutlined style={iconStyle} />,
               label: 'Brand-List',
            },
            {
               key: 'category',
               icon: <AppstoreAddOutlined style={iconStyle} />,
               label: 'Category',
            },
            {
               key: 'category-list',
               icon: <UnorderedListOutlined style={iconStyle} />,
               label: 'Category-List',
            },
            {
               key: 'color',
               icon: <BgColorsOutlined style={iconStyle} />,
               label: 'Color',
            },

            {
               key: 'color-list',
               icon: <ProfileOutlined style={iconStyle} />,
               label: 'Color-List',
            },
         ],
      },
      {
         key: 'order',
         icon: <ShoppingOutlined style={iconStyle} />,
         label: 'Orders',
      },

      {
         key: 'Blog',
         icon: <ReadOutlined style={iconStyle} />,
         label: 'Blog',
         children: [
            {
               key: 'add-blog',
               icon: <PlusCircleOutlined style={iconStyle} />,
               label: 'Add Blog',
            },
            {
               key: 'blog-list',
               icon: <UnorderedListOutlined style={iconStyle} />,
               label: 'Blog List',
            },
            {
               key: 'add-blog-category',
               icon: <FileAddOutlined style={iconStyle} />,
               label: 'Add Blog Category',
            },
            {
               key: 'blog-list-category',
               icon: <FolderAddOutlined style={iconStyle} />,
               label: 'Blog List Category',
            },
         ],
      },
      {
         key: 'enquires',
         icon: <QuestionCircleOutlined style={iconStyle} />,
         label: 'Enquires',
      },
   ];

   return (
      <Layout>
         <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className='logo flex justify-center items-center'>
               {collapsed ? (
                  <AntDesignOutlined />
               ) : (
                  <h3 className='text-black  text-center text-xl font-bold transition duration-500 ease-in-out transform hover:scale-110'>
                     Mritunjay Singh
                  </h3>
               )}
            </div>
            <Menu
               theme='dark'
               mode='inline'
               defaultSelectedKeys={['1']}
               onClick={({ key }) => {
                  if (key === 'signOut') {
                     // Handle signout
                  } else {
                     navigate(key);
                  }
               }}
               style={menuStyle}
            >
               {menuItems.map((item) =>
                  item.children ? (
                     <SubMenu
                        key={item.key}
                        icon={item.icon}
                        title={item.label}
                     >
                        {item.children.map((child) => (
                           <Menu.Item key={child.key} icon={child.icon}>
                              {child.label}
                           </Menu.Item>
                        ))}
                     </SubMenu>
                  ) : (
                     <Menu.Item key={item.key} icon={item.icon}>
                        {item.label}
                     </Menu.Item>
                  )
               )}
            </Menu>
         </Sider>
         <Layout>
            <Header
               style={{
                  padding: 0,
                  background: colorBgContainer,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
               }}
            >
               <Button
                  type='text'
                  icon={
                     collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                     fontSize: '16px',
                     width: 64,
                     height: 64,
                  }}
               />
               <div
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     marginRight: '16px',
                     gap: '16px',
                  }}
               >
                  <Badge
                     count={5}
                     onClick={openNotification}
                     style={{ marginRight: '20px', cursor: 'pointer' }}
                  >
                     <BellOutlined
                        style={{ fontSize: '25px', cursor: 'pointer' }}
                     />
                  </Badge>
                  <Dropdown overlay={userMenu} placement='bottomRight' arrow>
                     <Avatar
                        icon={<UserOutlined />}
                        style={{
                           cursor: 'pointer',
                           marginLeft: '8px',
                           marginRight: '16px',
                           fontSize: '25px',
                        }}
                     />
                  </Dropdown>
               </div>
            </Header>
            <Content
               style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
               }}
            >
               <Outlet />
            </Content>
         </Layout>
      </Layout>
   );
};

export default MainLayout;
