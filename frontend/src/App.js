
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import Navbar from './component/Navbar';
import Salequantity from './component/Salequantity';
import AddProduct from './component/AddProduct';
import Product from './component/Product';
import Update from './component/Update';
import Sales from './component/Sales';
import AddDemand from './component/AddDemand';
import Demand from './component/Demand';

function App() {
  return (
   <div>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
          <Route path='/' element={<Product/>} ></Route>
          <Route path='/add' element={<AddProduct/>} ></Route>
          <Route path='/update/:id' element={<Update/>} ></Route>
          <Route path='/api/sell/:id' element={<Salequantity/>} ></Route>
          <Route path='/addDemand' element={<AddDemand/>} ></Route>
          <Route path='/demand' element={<Demand/>} ></Route>
          <Route path='/sales' element={<Sales/>} ></Route>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;