
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Componeants/Footer/Footer';
import Home from './Componeants/Home/Home';
import NotFound from './Componeants/NotFound/NotFound';
import Product from './Componeants/Product/Product';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>



      </Routes>



      <Footer></Footer>

    </div>
  );
}

export default App;
