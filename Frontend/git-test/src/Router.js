import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
<<<<<<< HEAD
import Main from "./pages/Main/Main";
=======
import Login from "./pages/Login/Login";
>>>>>>> main

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/main" element={<Main />} />
=======
        <Route path="/" element={<Login />} />
>>>>>>> main
      </Routes>
    </BrowserRouter>
  );
}
