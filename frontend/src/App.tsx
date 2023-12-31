import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Nav name={name} setName={setName} />

        <main className="form-signin">
          <Route path="/" exact component={() => <Home name={name} />} />
          <Route path="/login" component={() => <Login setName={setName} />} />
          <Route path="/register" component={Register} />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
