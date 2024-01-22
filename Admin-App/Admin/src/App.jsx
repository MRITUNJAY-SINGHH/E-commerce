import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Login from './Pages/Login';
import ResetPassword from './Pages/ResetPassword';
import ForgetPassword from './Pages/ForgetPassword';
import Dashboard from './Pages/Dashboard';

function App() {
   return (
      <Router>
         <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route path='/forget-password' element={<ForgetPassword />} />
            <Route path='/admin' element={<MainLayout />}>
               <Route index element={<Dashboard />} />
            </Route>
         </Routes>
      </Router>
   );
}

export default App;
