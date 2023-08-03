import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Home = (props: { name: string }) => {
  const [name, setName] = useState("");
  const user: any = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);
  return <div>{name ? "Welcome " + name : "You are not logged in"}</div>;
};
export default Home;
