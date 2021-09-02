import React, { useState } from "react";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./HomePage";
import Login from "./Login";
import Upload from "./Upload";
import Search from "./Search";

import "./style.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <BrowserRouter>
        <section className="navbar-bg">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
              <Link
                to="/"
                style={{
                  textDecoration: "inherit",
                  textDecorationColor: "inherit",
                }}
              >
                <a className="navbar-brand">IMGUR</a>
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setShow(!show)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      to="/"
                      style={{
                        textDecoration: "inherit",
                        textDecorationColor: "inherit",
                      }}
                    >
                      <a className="nav-link active" aria-current="page">
                        Home
                      </a>
                    </Link>
                  </li>
                </ul>
                <form className="d-flex">
                  <Link to="/login">
                    <button
                      className="btn  btn-style btn-style-border"
                      type="submit"
                    >
                      Sign-Up
                    </button>
                  </Link>
                  <Link to="/upload">
                    <button
                      className="btn btn-style btn-style-border"
                      type="submit"
                    >
                      Upload
                    </button>
                  </Link>
                  <Link to="/search">
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </nav>
        </section>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
