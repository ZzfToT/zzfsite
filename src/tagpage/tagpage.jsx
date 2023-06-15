import React, { Component } from "react";
import { useParams } from "react-router-dom";
import SidebarContent from "../sidebar/siderbar_content";
import Nav from "../nav/nav";
import ArticleContent from "../article_items/article_items";
import Categories from "../sidebar/categories";
import Tags from "../sidebar/tags";

class TagPagec extends Component {
  state = {};
  render() {
    return (
      <div id="layout">
        <Nav />
        <main>
          <div className="mainbody">
            <div className="writing-content-grid">
              <ArticleContent
                title={this.props.params.tagname}
              ></ArticleContent>
              <SidebarContent sidesections={[<Categories/>, <Tags/>]} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default function TagPage() {
  const params = useParams();
  return <TagPagec params={params} />;
}
