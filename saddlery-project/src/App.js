import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddSaddle from './add-saddle';
import Header from './header';
import Footer from './footer';
import Navigation from './navigation';
import Home from './home';
import Saddles from './saddles';
import SaddleDetails from './saddle-info';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/header" element={<Header/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/navigation" element={<Navigation/>} />
        <Route path="/add-saddle" element={<AddSaddle/>} />
        <Route path="/saddles" element={<Saddles/>} />
        <Route path='/saddles/:id' element={<SaddleDetails/>}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
