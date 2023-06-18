import React, { Component } from "react";
import { Link } from "react-router-dom";

class Tags extends Component {
  state = {};
  render() {
    return (
      <div className="SidebarCard Tags">
        <h2 className="CardName">Tags</h2>
        <div className="tag-list">
          {this.props.tags.map( t => <Link className="tag" key={t}>{t}</Link>)}
        </div>
      </div>
    );
  }
}

export default Tags;
