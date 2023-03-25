import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import '../App.css';
import Login from './Login';
import NavBar from './Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      < NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element = {<Login />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
