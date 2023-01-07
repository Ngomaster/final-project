import React from 'react';
import PropTypes from 'prop-types';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Head from "./components/admin/header";
import Customer from "./components/Customer";
import Product from "./components/Products";
import Order from "./components/Order";
import Revenue from "./components/Revenue";
import Feedback from "./components/Feedback";
import AddProducts from "./components/Products/addProducts";
import EditProducts from "./components/Products/editProducts";
import AddCus from "./components/Customer/addCus";
import AddOrder from "./components/Order/addOrder";

const Admin = props => {
    return (
        <div className="App">
      {/* <Login/> */}
      <div className="App_side">
        <Sidebar />
      </div>
      <div className="App_body">
        <div>
          <Head />
        </div>
        <Routes>
          <Route path="/dash" element={<Dashboard />}/>
          <Route path="/customer" element={<Customer/>}/>
          <Route path="/products" element={<Product/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/feedback" element={<Feedback/>}/>
          <Route path="/revenue" element={<Revenue/>}/>
          <Route path="/addProducts" element={<AddProducts/>}/>
          <Route path="/editProducts" element={<EditProducts/>}/>
          <Route path="/addCus" element={<AddCus/>}/>
          <Route path="/addOrder" element={<AddOrder/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
      
    </div>
    );
};

Admin.propTypes = {
    
};

export default Admin;