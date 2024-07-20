import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-info">
          <div className="container-fluid">
            <a className="navbar-brand" to="/">
              Newzify
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
                  <a className="nav-link active" aria-current="page" to="/">
                    Home
                  </a>
                </li> */}
                <li>
                  <Link className="nav-link active" to="/general">
                    General
                  </Link>
                </li>
                <li>
                  <Link className="nav-link active" to="/business">
                    Business
                  </Link>
                </li>
                <li>
                  <Link className="nav-link active" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li>
                  <Link className="nav-link active" to="/health">
                    Health
                  </Link>
                </li>
                <li>
                  <Link className="nav-link active" to="/science">
                    Science
                  </Link>
                </li>
                <li>
                  <Link className="nav-link active" to="/sports">
                    Sports
                  </Link>
                </li>
                <li>
                  <Link className="nav-link active" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
