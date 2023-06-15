import React, { Component } from "react";
import SidebarContent from "../sidebar/siderbar_content";
import Nav from "../nav/nav";
import Categories from "../sidebar/categories";
import Tags from "../sidebar/tags";
import ArticleContent from "./article_content";

class ArticlePage extends Component {
  state = {};
  render() {
    return (
      <div id="layout">
        <Nav />
        <main className="mainbody">
          <div className="writing-content-grid">
            <ArticleContent title="Fjd;sklajfl;sdf" />
            <SidebarContent
              sidesections={[<Categories key="cate" />, <Tags key="tag" />]}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default ArticlePage;
