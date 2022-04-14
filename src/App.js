import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/shared/Header/Header';
import Footer from './pages/shared/Footer/Footer';
import Home from './pages/home/Home/Home';
import Login from './pages/login/Login/Login';
import PrivatePage from './pages/login/PrivatePage/PrivatePage';
import Shipment from './pages/Shipment/Shipment';
import NotFound from './pages/NotFound/NotFound';
import ServiceDetail from './pages/home/ServiceDetail/ServiceDetail';
import About from './pages/about/About';
import Register from './pages/login/Register/Register';
// import Register from './pages/login/Register/Register';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/shipment' element={
          <PrivatePage>
            <Shipment></Shipment>
          </PrivatePage>
        }>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
