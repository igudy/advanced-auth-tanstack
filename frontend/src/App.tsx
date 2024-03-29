import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import ForgotPassword from "./pages/auth/ForgotPassword.jsx";
import ResetPassword from "./pages/auth/ResetPassword.jsx";
import EnterAccessCode from "./pages/auth/EnterAccessCode.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Verify from "./pages/auth/Verify.jsx";
import {
  getUser,
  loginStatus,
  selectIsLoggedIn,
  selectUser,
} from "./components/redux/slices/auth/authSlice.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import axios from "axios";
import Admin from "./pages/admin/Admin.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import AllProducts from "./pages/admin/AllProducts.jsx";
import AddProduct from "./pages/admin/AddProduct.jsx";
import Orders from "./pages/admin/Orders.jsx";
import UpdateProduct from "./pages/admin/UpdateProduct.jsx";

axios.defaults.withCredentials = true;

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(loginStatus());
    if (isLoggedIn && user === null) {
      dispatch(getUser());
    }
  }, [dispatch, isLoggedIn, user]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/productDetails/:id" element={<ProductDetails />} /> */}

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:resetToken" element={<ResetPassword />} />
        <Route path="/enter-access-code/:email" element={<EnterAccessCode />} />
        <Route path="/verify/:verificationToken" element={<Verify />} />

        {/* Admin section */}
        <Route path="/admin/*" element={<Admin />}>
          {/* Nested admin routes */}
          <Route index element={<Dashboard />} />
          <Route path="all-products" element={<AllProducts />} />
          <Route
            path="all-products/update-product/:id"
            element={<UpdateProduct />}
          />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
