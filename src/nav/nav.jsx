import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

class Nav extends Component {
  state = {
    activeElement: null,
  };

  handleClickEvent = (e) => {
    if (e.currentTarget.nodeName.toUpperCase() === "A") {
      this.state.activeElement && this.state.activeElement.classList.remove("active");
      e.currentTarget.classList.add("active");
      this.setState({
        activeElement: e.currentTarget,
      });
    }
  };

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
                <Link
                  to="/"
                  className="home item"
                  onClick={(e) => this.handleClickEvent(e)}
                >
                  <span>Home</span>
                </Link>
              </div>
              <div className="nav-item-outer">
                <Link
                  to="/writing"
                  className="writing item"
                  onClick={e => this.handleClickEvent(e)}
                >
                  <span>Writing</span>
                </Link>
              </div>
              <div className="nav-item-outer">
                <Link
                  to="/projects"
                  className="project item"
                  onClick={e => this.handleClickEvent(e)}
                >
                  <span>Projects</span>
                </Link>
              </div>
              <div className="nav-item-outer">
                <Link
                  to="/"
                  className="record item"
                  onClick={e => this.handleClickEvent(e)}
                >
                  <span>Record</span>
                </Link>
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
