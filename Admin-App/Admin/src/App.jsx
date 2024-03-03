import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Login from './Pages/Login';
import ResetPassword from './Pages/ResetPassword';
import ForgetPassword from './Pages/ForgetPassword';
import Dashboard from './Pages/Dashboard';
import Enquires from './Pages/Enquires';
import Blog from './Pages/Blog';
import BlogCategoryList from './Pages/BlogCategoryList';
import Orders from './Pages/Orders';
import Customer from './Pages/Customer';
import ColorList from './Pages/ColorList';
import CategoryList from './Pages/CategoryList';
import BrandList from './Pages/BrandList';
import ProductList from './Pages/ProductList';
import AddBlog from './Pages/AddBlog';
import AddBlogCategories from './Pages/AddBlogCategory';
import AddColor from './Pages/AddColor';
import AddCategories from './Pages/AddCategories';
import AddBrand from './Pages/AddBrand';
import AddProduct from './Pages/AddProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCoupon from './Pages/AddCoupon';
import CouponList from './Pages/CouponList';

function App() {
   return (
      <Router>
         <ToastContainer
            position='top-right'
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
         />
         <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route path='/forget-password' element={<ForgetPassword />} />

            <Route path='/admin' element={<MainLayout />}>
               <Route index element={<Dashboard />} />
               <Route path='Customer' element={<Customer />} />
               <Route path='category-list' element={<CategoryList />} />
               <Route path='brand-list' element={<BrandList />} />
               <Route path='product-list' element={<ProductList />} />
               <Route path='color-list' element={<ColorList />} />
               <Route path='enquires' element={<Enquires />} />
               <Route path='add-blog' element={<AddBlog />} />
               <Route path='color' element={<AddColor />} />
               <Route path='category' element={<AddCategories />} />
               <Route path='brand' element={<AddBrand />} />
               <Route path='product' element={<AddProduct />} />
               <Route path='add-coupon' element={<AddCoupon />} />
               <Route path='coupon-list' element={<CouponList />} />

               <Route
                  path='add-blog-category'
                  element={<AddBlogCategories />}
               />
               <Route path='blog-list' element={<Blog />} />
               <Route
                  path='blog-list-category'
                  element={<BlogCategoryList />}
               />
               <Route path='order' element={<Orders />} />
            </Route>
         </Routes>
      </Router>
   );
}

export default App;
