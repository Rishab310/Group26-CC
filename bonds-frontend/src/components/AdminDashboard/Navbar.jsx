import React from "react";
import {useNavigate} from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    navigate('/');
    localStorage.removeItem("userToken");
    localStorage.removeItem("userEmail");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Bonds App
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/adminDashboard">
                View All Bonds
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Flagged Trades
              </a>
            </li>
          </ul>
        </div>

        <button
          className="btn btn-outline-success my-2 my-sm-0 logOutButton"
          type="submit"
          onClick={onLogout}
        >
          Log Out
        </button>
      </nav>
    </div>
  );
};
