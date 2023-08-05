import React, { SyntheticEvent, useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/auth/authSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const history = useHistory();

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await dispatch(registerUser({ name, email, password })).then((x) => {
      if (x.meta.requestStatus === "fulfilled") {
        setErrorMessage("");
        dispatch(loginUser({ email, password }));
        history.push("/");
      } else {
        setErrorMessage("Email already in use. Please use a new one.");
      }
    });
  };

  return (
    <form onSubmit={submit}>
      <h1 className="h3 mb-3 fw-normal">Please register</h1>

      <input
        className="form-control"
        placeholder="Name"
        required
        onChange={(e) => setName(e.target.value)}
      />

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
        Submit
      </button>
      {errorMessage && (
        <p style={{ paddingTop: "30px", color: "red", whiteSpace: "nowrap" }}>
          {errorMessage}
        </p>
      )}
    </form>
  );
};

export default Register;
