import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Components/Create";
import { ToastContainer } from 'react-toastify'

import Menu from "./Components/Menu";
import Home from "./Components/Home";
import Update from "./Components/Update";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/Home"} element={<Home />} />
        <Route path={"/Create"} element={<Create />} />
        <Route path={"/Update/:id"} element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
