import React, { Component } from "react";
import ItemSection from "../itemsection/itemsection";

class ArticleItems extends Component {
  state = {};
  render() {
    return (
      <div className="article-items">
        <header>
          <h1 className="PageTitle">{this.props.title}</h1>
        </header>
        <ItemSection title="2023" titleright="" showyear="false" />
        <ItemSection title="2022" titleright="" showyear="false" />
        <ItemSection title="2021" titleright="" showyear="false" />
        <ItemSection title="2022" titleright="" showyear="false" />
      </div>
    );
  }
}

export default ArticleItems;
