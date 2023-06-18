import React, { Component } from "react";
import { Link } from "react-router-dom";

class Categories extends Component {
  state = {};
  render() {
    return (
      <div className="SidebarCard Categories">
        <h2 className="CardName">Categories</h2>
        <div className="list">
          {this.props.cates.map(c => {
            return <Link className="category" key={c[0]}>
              <div className="category-name">{c[0]}</div>
              <div className="category-count">{c[1]}</div>
            </Link>
          })}
        </div>
      </div>
    );
  }
}

export default Categories;
