import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user && user.headers) {
      setCurrentUser(user);
    }
  }, []);
  const logOut = () => {
    setCurrentUser(undefined);
    AuthService.logout();
    navigate("/");
    window.location.reload();
  };
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src="images/logo.jpg" alt="cocktail db logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          {!currentUser && (
            <li>
              <Link to="/about">about</Link>
            </li>
          )}
          {currentUser && (
            <li className="nav-item">
              <Link to={"/about"} className="nav-link">
                {JSON.parse(currentUser.config.data).username}
              </Link>
            </li>
          )}
          {currentUser && (
            <li className="nav-item">
              <a href="/" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          )}
          {!currentUser && (
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
          )}

          {!currentUser && (
            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          )}
          {currentUser && (
            <li>
              <Link to="/add" className="btn btn-primary btn-details">
                Add
              </Link>
            </li>
          )}
          {/* <li>
            {currentUser ? (
              <a onClick={logOut}>Logout</a>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
          {currentUser && (
            <li>
              <Link to="/add" className="btn btn-primary btn-details">
                Add
              </Link>
            </li>
          )}
          {!currentUser && (
            <li>
              <Link to="/register" className="btn btn-primary btn-details">
                Register
              </Link>
            </li>
          )} */}
        </ul>
      </div>
    </nav>
  );
}
