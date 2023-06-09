import React, { Component } from "react";
import { Link } from "react-router-dom";
import './nav.css'

class Nav extends Component {
  state = {};

  // componentDidMount = () => {
  //   let navbarSection = document.getElementById("navbar")
  //   console.log(navbarSection)
  //   let pathname = window.location.pathname;
  //   if (pathname === "/") 
  //     pathname = "/home"
  //   pathname = pathname.substring(1);
  //   let activeItem = navbarSection.getElementsByClassName(pathname)
  //   console.log(activeItem);
  //   activeItem.length === 1 && activeItem[0].classList.add("active");
  // }

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
                <Link to="/" className="home item">
                  <span>Home</span>
                </Link>
              </div>
              <div className="nav-item-outer">
                <Link to="/about" className="about item">
                    <span>About</span>
                </Link>
              </div>
              <div className="nav-item-outer">
                <Link to="/writing" className="writing item">
                    <span>Writing</span>
                </Link>
              </div>
              <div className="nav-item-outer">
                <Link to="/" className="project item">
                    <span>Projects</span>
                </Link>
              </div>
              <div className="nav-item-outer">
                <Link to="/" className="record item">
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
