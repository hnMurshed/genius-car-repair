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
import { useTitle } from './pages/shared/TitleProvider/TitleProvider';
import { useEffect } from 'react';
import RouteWithTitle from './pages/shared/RouteWithTitle/RouteWithTitle';
import AddService from './pages/AddService/AddService';
import ManageService from './pages/ManageService/ManageService';
import { Toaster } from 'react-hot-toast';
import Order from './pages/Order/Order';
// import Register from './pages/login/Register/Register';

function App() {

  return (
    <div>
      <Toaster></Toaster>
      <Header></Header>
      <Routes>
        <Route path='/' element={
          <RouteWithTitle title='Home'>
            <Home></Home>
          </RouteWithTitle>
        }></Route>
        <Route path='/home' element={
          <RouteWithTitle title='Home'>
            <Home></Home>
          </RouteWithTitle>
        }></Route>
        <Route path='/services/:serviceId' element={
          <RouteWithTitle title='Service'>
            <ServiceDetail></ServiceDetail>
          </RouteWithTitle>
        }></Route>
        <Route path='/about' element={
          <RouteWithTitle title='About'>
            <About></About>
          </RouteWithTitle>
        }></Route>
        <Route path='/login' element={
          <RouteWithTitle title='Login'>
            <Login></Login>
          </RouteWithTitle>
        }></Route>
        <Route path='/register' element={
          <RouteWithTitle title='Register'>
            <Register></Register>
          </RouteWithTitle>
        }></Route>
        <Route path='/order' element={
          <RouteWithTitle title='Order'>
            <Order></Order>
          </RouteWithTitle>
        }></Route>
        <Route path='/checkout/:serviceId' element={
          <PrivatePage>
            <RouteWithTitle title='Shipment'>
              <Shipment></Shipment>
            </RouteWithTitle>
          </PrivatePage>
        }>
        </Route>
        <Route path='/add-service' element={
          <PrivatePage>
            <RouteWithTitle title='Add Service'>
              <AddService></AddService>
            </RouteWithTitle>
          </PrivatePage>
        }>
        </Route>
        <Route path='/manage-service' element={
          <PrivatePage>
            <RouteWithTitle title='Manage Service'>
              <ManageService></ManageService>
            </RouteWithTitle>
          </PrivatePage>
        }>
        </Route>
        <Route path='*' element={
          <RouteWithTitle title='Page Not Found'>
            <NotFound></NotFound>
          </RouteWithTitle>
        }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
