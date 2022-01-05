import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
import Save from "./pages/Save";
// import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./login-componenets/Login";
import Navbar from "./components/Navbar";
import Register from "./login-componenets/Register";
function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/add" element={<Save />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/cocktail/:id" element={<SingleCocktail />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
