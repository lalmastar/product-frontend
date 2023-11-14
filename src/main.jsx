import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import AddProduct from './components/admin/addproduct/AddProduct.jsx';
import AllClients from './components/admin/clients/AllClients.jsx';
import Company from "./components/company/Company.jsx";
import Table from './components/admin/products/Table.jsx';
import Client from './components/form/Client.jsx';
const router = createBrowserRouter(
  
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path="/product/:id" element={<Company />} />
      {/* <Route path="/product" element={<Company />} /> */}
      {/* <Route path="/client-form" element={<Client />} /> */}
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/all-clients' element={<AllClients />} />
      <Route path='/all-products' element={<Table />} />
      <Route path='/add-product' element={<AddProduct />} />
      <Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={<ProfileScreen />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
