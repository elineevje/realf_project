import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Redirect } from "react-router-dom";

const Home = (props: { name: string }) => {
  const [name, setName] = useState("");

  const user: any = useSelector((state: RootState) => state.auth.user);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  useEffect(() => {
    if (isAuthenticated) {
      setName(user.name);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (user) {
      setName(user.name);
    } else {
      setName("");
    }
  }, [user]);

  return <div>{name ? "Welcome " + name : "You are not logged in"}</div>;
};
export default Home;
