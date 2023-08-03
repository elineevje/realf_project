import React, { SyntheticEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { AppDispatch, RootState } from "../store";
import { loginUser } from "../features/auth/authSlice";

const Login = (props: { setName: (name: string) => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (isAuthenticated) {
      setRedirect(true);
    }
  }, [isAuthenticated]);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));

    /*const response = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });*/

    //const content = await response.json();

    //props.setName(content.name);
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={submit}>
      <h1 className="h3 mb-3 fw-normal">Please log in</h1>
      <input
        type="email"
        className="form-control"
        placeholder="Email address"
        required
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="form-control"
        placeholder="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
    </form>
  );
};

export default Login;
