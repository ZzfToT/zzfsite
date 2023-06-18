import React, { Component } from "react";
import { Link } from "react-router-dom";

class Categories extends Component {
  state = {};
  render() {
    return (
      <div className="SidebarCard Categories">
        <h2 className="CardName">Categories</h2>
        <div className="list">
          <Link className="category">
            <div className="category-name">JavaScript</div>
            <div className="category-count">8</div>
          </Link>
          <Link className="category">
            <div className="category-name">JavaScript</div>
            <div className="category-count">8</div>
          </Link>
          <Link className="category">
            <div className="category-name">JavaScript</div>
            <div className="category-count">8</div>
          </Link>
          <Link className="category">
            <div className="category-name">JavaScript</div>
            <div className="category-count">8</div>
          </Link>
          <Link className="category">
            <div className="category-name">JavaScript</div>
            <div className="category-count">8</div>
          </Link>
          <Link className="category">
            <div className="category-name">JavaScript</div>
            <div className="category-count">8</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Categories;
