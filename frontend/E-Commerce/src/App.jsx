import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';
import SingleBlogs from './pages/SingleBlogs';

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path='about' element={<About />} />
                  <Route path='contact' element={<Contact />} />
                  <Route path='store' element={<OurStore />} />
                  <Route path='blogs' element={<Blog />} />
                  <Route path='blogs/:id' element={<SingleBlogs />} />
                  <Route path='compare-products' element={<CompareProduct />} />
                  <Route path='Wishlist' element={<Wishlist />} />
                  <Route path='Login' element={<Login />} />
                  <Route path='Sign-Up' element={<SignUp />} />
                  <Route path='Forget-Password' element={<ForgetPassword />} />
                  <Route path='Reset-Password' element={<ResetPassword />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
