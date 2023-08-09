import React from "react";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand p-2" href="#">
          Bonds App
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/managerDashboard">
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
          className="btn btn-outline-primary my-2 my-sm-0 logOutButton p-2"
          type="submit"
        >
          Log Out
        </button>
      </nav>
    </div>
  );
};
