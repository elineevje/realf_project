import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/user", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const content = await response.json();

      setName(content.name);
    })();
  });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Nav name={name} setName={setName} />

          <main className="form-signin">
            <Route path="/" exact component={() => <Home name={name} />} />
            <Route
              path="/login"
              component={() => <Login setName={setName} />}
            />
            <Route path="/register" component={Register} />
          </main>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
