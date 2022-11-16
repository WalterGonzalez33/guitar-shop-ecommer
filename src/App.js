import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Filters from './components/filters/Filters';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import DetailProduct from './pages/detail/DetailProduct';
import SectionProducts from './pages/sectionProducts/SectionProducts';


function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Filters/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<SectionProducts/>}/>
          <Route path='/products/:filterName' element={<SectionProducts/>}/>
          <Route path='/detail/:productId' element={<DetailProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
