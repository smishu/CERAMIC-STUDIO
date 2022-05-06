
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Componeants/About/About';
import Contact from './Componeants/Contacts/Contact';
import Footer from './Componeants/Footer/Footer';
import Home from './Componeants/Home/Home';
import NotFound from './Componeants/NotFound/NotFound';
import Product from './Componeants/Product/Product';
import Login from './Componeants/Login/Login';

import Header from './Componeants/Header/Header';
import Blogs from './Componeants/Blogs/Blogs';
import Singin from './Componeants/Login/SingIn/Singin';
import AddToCard from './Componeants/Login/ReguireAuth/AddToCard/AddToCard';
import ReguireAuth from './Componeants/Login/ReguireAuth/ReguireAuth';




function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/product/:productId' element={
          <ReguireAuth>
            <AddToCard></AddToCard>
          </ReguireAuth>
        }></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singin' element={<Singin></Singin>}></Route>


        <Route path='*' element={<NotFound></NotFound>}></Route>



      </Routes>



      <Footer></Footer>

    </div>
  );
}

export default App;
