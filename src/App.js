
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import ServiceDetails from './Pages/ServiceDetails/ServiceDeails/ServiceDetails';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Checkout from './Pages/Checkout/Checkout/Checkout';
import AddService from './Pages/AddService/AddService';
import MangeService from './Pages/MangeService/MangeService';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>

        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
        <Route path='/checkout' element=
          {<RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>}>
        </Route>
        <Route path='/addservice' element=
          {<RequireAuth>
            <AddService></AddService>
          </RequireAuth>}>
        </Route>
        <Route path='/manage' element=
          {<RequireAuth>
            <MangeService></MangeService>
          </RequireAuth>}>
        </Route>
      </Routes>
      <Footer path='/services' element={<Services></Services>}></Footer>
    </div>
  );
}

export default App;
