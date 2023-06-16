import React, { Component } from 'react';
import { marked } from 'marked';
import Markdown2Html from './markdowncvt';
import './post.css'

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
            <Markdown2Html/>
          </div>
        </section>
      </div>
    );
  }
}

export default ArticleContent;
