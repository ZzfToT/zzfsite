import React, { Component } from "react";
import ArticleItems from "../article_items/article_items";
import SidebarContent from "../sidebar/siderbar_content";
import { useParams } from "react-router-dom";
import Categories from "../sidebar/sidebar_sections/categories";
import Tags from "../sidebar/sidebar_sections/tags";

class Termc extends Component {
  state = {};
  render() {
    return (
      <main>
        <div className="mainbody">
          <div className="writing-content-grid">
            <ArticleItems title={this.props.params.category} />
            <SidebarContent sidesections={[<Categories />, <Tags />]} />
          </div>
        </div>
      </main>
    );
  }
}

export default function Term() {
  const params = useParams();
  console.log(params);
  return <Termc params={params} />;
}
