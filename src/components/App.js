import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import '../App.css';
import Login from './Login';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import TodosPage from "./TodosPage";
import AddTodo from "./AddTodo";


function App() {
  return (
    <div className="App">
      < NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/todos" element = { <TodosPage /> }></Route>
          <Route path="/login" element = {<Login />} ></Route>
          <Route path="/signup" element = {<SignUp />} ></Route>
          <Route path="/addtodo" element = {<AddTodo />} ></Route>


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
