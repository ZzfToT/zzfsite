import React, { Component } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import "katex/dist/katex.min.css"; // `rehype-katex` does not import the CSS for you

class Markdown2Html extends Component {
  state = {
    textContent: "",
  };
  componentDidMount = () => {
    fetch("http://175.178.214.71:8000/zzfsite/post/?title=1 Introducing JSX.md")
    .then((response) => response.json())
    .then(js => this.handleJsonResponse(js))
    .catch(error => console.log(error));
  };

  handleJsonResponse = (js) => {
    console.log("js is ", js);
    if (js.status_code === 200) {
      this.setState({textContent: js.content})
    }
  }


  render() {
    return (
      <ReactMarkdown
        children={this.state.textContent}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
      />
    );
  }
}

export default Markdown2Html;
