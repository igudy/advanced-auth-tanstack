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
import axios from "axios";

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
