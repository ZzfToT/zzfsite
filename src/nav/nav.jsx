import React, { Component } from "react";
import { Link } from "react-router-dom";
import './nav.css'

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
                <a href="#" className="home item">
                  <span>Home</span>
                </a>
              </div>
              <div className="nav-item-outer">
                <a href="#" className="about item active">
                    <span>About</span>
                </a>
              </div>
              <div className="nav-item-outer">
                <a href="#" className="writting item active">
                    <span>Writting</span>
                </a>
              </div>
              <div className="nav-item-outer">
                <a href="#" className="project item active">
                    <span>Projects</span>
                </a>
              </div>
              <div className="nav-item-outer">
                <a href="#" className="record item active">
                    <span>Record</span>
                </a>
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
