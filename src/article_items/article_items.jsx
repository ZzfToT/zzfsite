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
        <div className="itemsections">
          {this.props.postTimeDict.map(pt => {
            return <ItemSection title={pt[0]} titleright="" showyear={false} postlist={pt[1]} key={pt[0]} />
           })
          }
        </div>
      </div>
    );
  }
}

export default ArticleItems;
