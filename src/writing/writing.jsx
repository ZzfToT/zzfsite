import React, { Component } from "react";
import ArticleItems from "../article_items/article_items";
import SidebarContent from "../sidebar/siderbar_content";
import './writing.css'
import Categories from "../sidebar/sidebar_sections/categories";
import Tags from "../sidebar/sidebar_sections/tags";

class Writing extends Component {
  state = {};      /*1. Jiang article list chuan gei articlecontent bi jiao hao; 2. jiang category he tag chuan gei sidebarcontent*/ 

  render() {
    return (
      <React.Fragment>
        <main>
          <div className="mainbody">
            <div className="writing-content-grid">
              <ArticleItems title="Writing" />
              <SidebarContent sidesections={[<Categories key="categories"/>, <Tags key="tags"/>]} />
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
export default Writing;
