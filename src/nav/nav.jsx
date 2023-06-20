import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./nav.css";

class Nav extends Component {
  state = {};
  
  render() {
    return (
      <section id="navbar">
        <div className="NavSection">
          <div>
            <Link to="/" className="desktop-only HeroName">
              <span>Zhou Fei</span>
            </Link>

            <nav>
              <div className="nav-item-outer mobile-only">
                <NavLink
                  to="/"
                  className={({ isActive }) => "home item" + (isActive ? " active" : "")}
                >
                  <span>Home</span>
                </NavLink>
              </div>
              <div className="nav-item-outer">
                <NavLink
                  to="/writing"
                  className={({ isActive }) => "writing item" + (isActive ? " active" : "")}
                >
                  <span>Writing</span>
                </NavLink>
              </div>
              <div className="nav-item-outer">
                <NavLink
                  to="/projects"
                  className={({ isActive }) => "project item" + (isActive ? " active" : "")}
                >
                  <span>Projects</span>
                </NavLink>
              </div>
              <div className="nav-item-outer">
                <NavLink
                  to="/record"
                  className={({ isActive }) => "record item" + (isActive ? " active" : "")}
                >
                  <span>Record</span>
                </NavLink>
              </div>
            </nav>
          </div>

          <form className="d-flex h-50" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Nav;
