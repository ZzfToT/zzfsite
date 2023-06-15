import React, { Component } from "react";
import Nav from "../nav/nav";
import ArticleItems from "../article_items/article_items";
import SidebarContent from "../sidebar/siderbar_content";
import './writing.css'
import Categories from "../sidebar/categories";
import Tags from "../sidebar/tags";

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
                <ArticleItems title="Writing" />
                <SidebarContent sidesections={[<Categories/>, <Tags/>]} />
              </div>
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }
}
export default Writing;
