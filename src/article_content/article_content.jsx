import React, { Component } from "react";
import ItemSection from "../itemsection/itemsection";

class ArticleContent extends Component {
  state = {};
  render() {
    return (
      <div className="article-content">
        <header>
          <h1 className="PageTitle">{this.props.title}</h1>
          <ItemSection title="2023" titleright="" showyear="false" />
          <ItemSection title="2022" titleright="" showyear="false" />
          <ItemSection title="2021" titleright="" showyear="false" />
          <ItemSection title="2022" titleright="" showyear="false" />
        </header>
      </div>
    );
  }
}

export default ArticleContent;
