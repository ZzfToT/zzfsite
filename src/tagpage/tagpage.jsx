import React, { Component } from "react";
import { useParams } from "react-router-dom";
import SidebarContent from "../sidebar/sidebar_content";
import ArticleContent from "../article_items/article_items";
import Categories from "../sidebar/sidebar_sections/categories";
import Tags from "../sidebar/sidebar_sections/tags";

class TagPagec extends Component {
  state = {};
  render() {
    return (
      <main>
        <div className="mainbody">
          <div className="writing-content-grid">
            <ArticleContent title={this.props.params.tagname}></ArticleContent>
            <SidebarContent sidesections={[<Categories />, <Tags />]} />
          </div>
        </div>
      </main>
    );
  }
}

export default function TagPage() {
  const params = useParams();
  return <TagPagec params={params} />;
}
