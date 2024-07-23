import logo from './logo.svg';
import './App.css';
import Create from './product/Create';
import ShowAllProduct from './product/ShowAllProduct';
import HomePage from './product/HomePage';
import ShowProduct from './product/ShowProduct';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
          <Routes>
            <Route path='/product' element={<ShowAllProduct/>} />
            <Route path='/' element={<HomePage/>} />
            <Route path='/showProduct/:id' element={<ShowProduct/>} />
            <Route path='/create' element={<Create/>} />
          </Routes>
    </>
  );
}

export default App;
