
import{ Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
//import Product from './pages/Product';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './pages/Contact';
import Error from './pages/Error';
import RootLayout from './layout.js/RootLayout';
import ProductDetails from './components/ProductDetails';
import {Provider} from 'react-redux';
import Store from './redux/reducer/Store';
 import CartList from './redux/reducer/CartList';
 import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router= createBrowserRouter(
  createRoutesFromElements(
   
    <Route path='/' element={<RootLayout/>} >
      <Route index element={<Home/>} /> 
      <Route path="/Contact" element={<Contact/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/Signup' element={<Signup/>} />
      <Route path="/ProductDetails/:id" element={<ProductDetails/>} />
      <Route path="*" element={<Error/>}/>
      <Route path='/CartList' element ={<CartList/>}/>
      </Route>
)
);


function App() {
  return (
    <div className=' bg-info' >

    <Provider store={Store}>
    <ToastContainer/>
<RouterProvider router={router} />
    </Provider>

  </div>
  );
}

export default App;
