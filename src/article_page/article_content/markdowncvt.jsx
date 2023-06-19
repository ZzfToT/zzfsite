import React, { Component } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
// import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight/lib";
// import rehypeSanitize from "rehype-sanitize";
import 'highlight.js/styles/xcode.css'
import "katex/dist/katex.min.css"; // `rehype-katex` does not import the CSS for you

class Markdown2Html extends Component {
  state = {};

  render() {  
    return (
      <ReactMarkdown
        children={this.props.textContent}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeRaw, rehypeHighlight]}
      />
    );
  }
}

export default Markdown2Html;



