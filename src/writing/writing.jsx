import React, { Component } from "react";
import Nav from "../nav/nav";
import ArticleContent from "./article_content";
import SidebarContent from "./siderbar_content";
import './writing.css'

class Writing extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div id="layout">
          <Nav />
          <main>
            <div className="mainbody">
              <div className="writing-content-grid">
                <ArticleContent />
                <SidebarContent />
              </div>
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }
}
export default Writing;
