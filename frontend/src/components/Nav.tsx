import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { AppDispatch, RootState, persistor } from "../store";
import { SyntheticEvent } from "react";
import { userLogout } from "../features/auth/authSlice";

const Nav = (props: { name: string; setName: (name: string) => void }) => {
  const dispatch = useDispatch<AppDispatch>();
  const history = useHistory();

  const user: any = useSelector((state: RootState) => state.auth.user);

  const logout = async () => {
    dispatch(userLogout());
    history.push("/login");
  };

  let menu;

  if (user && user.name) {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item active">
          <Link to="/login" className="nav-link" onClick={logout}>
            Logout
          </Link>
        </li>
      </ul>
    );
  } else {
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
