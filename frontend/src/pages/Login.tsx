import React, { SyntheticEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { AppDispatch, RootState } from "../store";
import { loginUser } from "../features/auth/authSlice";
import { useHistory } from "react-router-dom";

const Login = (props: { setName: (name: string) => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const user: any = useSelector((state: RootState) => state.auth.user);

  const history = useHistory();

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await dispatch(loginUser({ email, password })).then((x) => {
      if (x.meta.requestStatus === "fulfilled") {
        setErrorMessage("");
        history.push("/");
      } else {
        setErrorMessage("Invalid email or password. Please try again.");
      }
    });
  };

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
      {errorMessage && (
        <p style={{ paddingTop: "30px", color: "red", whiteSpace: "nowrap" }}>
          {errorMessage}
        </p>
      )}
    </form>
  );
};

export default Login;
