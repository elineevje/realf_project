import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch, persistor } from "../store";
import { SyntheticEvent } from "react";
import { logoutUser } from "../features/auth/authSlice";

const Nav = (props: { name: string; setName: (name: string) => void }) => {
  const dispatch = useDispatch<AppDispatch>();

  const logout = async () => {
    await dispatch(logoutUser());
    props.setName("");
    persistor.purge();
  };

  /*const logout = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      dispatch(logoutUser());
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  /*try {
      
      props.setName("");
    } catch (error) {
      console.error("Logout failed:", error);
    }*/

  /*const logout = async () => {
    await fetch("http://localhost:8000/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    props.setName("");
  };*/

  let menu;

  if (props.name === "") {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item active">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item active">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    );
  } else {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item active">
          <Link to="/login" className="nav-link" onClick={logout}>
            Logout
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Home
        </Link>

        <div>{menu}</div>
      </div>
    </nav>
  );
};
export default Nav;
