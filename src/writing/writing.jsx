import React, { Component } from "react";
import Nav from "../nav/nav";
import ArticleContent from "../article_content/article_content";
import SidebarContent from "../sidebar/siderbar_content";
import './writing.css'

class Writing extends Component {
  state = {};      /*1. Jiang article list chuan gei articlecontent bi jiao hao; 2. jiang category he tag chuan gei sidebarcontent*/ 
  render() {
    return (
      <React.Fragment>
        <div id="layout">
          <Nav />
          <main>
            <div className="mainbody">
              <div className="writing-content-grid">
                <ArticleContent title="Writing" />
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
