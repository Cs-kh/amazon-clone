

import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import CheckOut from './pages/CheckOut';
import Login from './pages/Login';
import Order from './pages/Order';
import Payment from './pages/Payment';
import PageError from './pages/PageError';
function App() {
  return (
   
<Router>
  <Routes>
    <Route  path='/' element={<Home/>} />
    <Route path='/checkout' element={<CheckOut/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/order' element={<Order/>} />
    <Route path='/payment' element={<Payment/>} />
    <Route path='*' element={<PageError/>} />
  </Routes>
</Router>


  );
}

export default App;
