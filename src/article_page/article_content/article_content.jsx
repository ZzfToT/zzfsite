import React, { Component } from 'react';
import Markdown2Html from './markdowncvt';

class ArticleContent extends Component {
  state = {};

  render() {
    return (
      <div className="article-content">
        <header>
          <h1 className="PageTitle">{this.props.title}</h1>
        </header>
        <section className="segment post">
          <div id={this.props.title}>
            <Markdown2Html textContent={this.props.textContent} />
          </div>
        </section>
      </div>
    );
  }
}

export default ArticleContent;
