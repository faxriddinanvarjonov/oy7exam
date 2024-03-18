import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/home/home";
import Headphones from "./pages/headphones/headphones";
import Speakers from "./pages/speakers/speakers";
import Earphones from "./pages/earphones/earphones";
import { useEffect, useState } from "react";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import "./App.css";
import Products from "./pages/products/products";
import PageNotFound from "./pages/pagenotfound/PageNotFound";
import Checkout from "./pages/checkout/checkout";

function App() {
  let [token, setToken] = useState(localStorage.getItem("token"));
  let navigate = useNavigate();
  let location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    if (
      (token == null && location.pathname != "/register") ||
      localStorage.getItem("boolean") == "false"
    ) {
      navigate("/login");
    } else if (
      location.pathname == "/login" ||
      location.pathname == "/register"
    ) {
      navigate("/");
    }
  }, []);

  function ProtectedRoute({ children, redirectTo = "/login", isAuth }) {
    if (!isAuth) {
      console.log(redirectTo);
      useEffect(() => {
        navigate(redirectTo);
      }, []);
    }

    return children;
  }
  return (
    <Routes>
      {/* public */}

      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>

      {/* protected */}
      <Route
        path="/"
        element={
          <ProtectedRoute isAuth={token != null ? true : false}>
            <Home></Home>
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/headphones"
        element={
          <ProtectedRoute isAuth={token != null ? true : false}>
            <Headphones></Headphones>
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/speakers"
        element={
          <ProtectedRoute isAuth={token != null ? true : false}>
            <Speakers></Speakers>
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/earphones"
        element={
          <ProtectedRoute isAuth={token != null ? true : false}>
            <Earphones></Earphones>
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/products"
        element={
          <ProtectedRoute isAuth={token != null ? true : false}>
            <Products></Products>
          </ProtectedRoute>
        }
      ></Route>
        <Route
        path="/checkout"
        element={
          <ProtectedRoute isAuth={token != null ? true : false}>
            <Checkout></Checkout>
          </ProtectedRoute>
        }
      ></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
}

export default App;
