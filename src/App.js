import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Help from './Pages/Help';
import Cart from './Pages/Cart';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/paintings' element={<ShopCategory category="paintings" />} />
          <Route path='/sculptures' element={<ShopCategory category="sculptures" />} />
          <Route path='/portraits' element={<ShopCategory category="portraits" />} />
          <Route path="/product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route> 
          <Route path='/help' element={<Help />} />
          <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
