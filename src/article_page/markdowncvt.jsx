import React, { Component } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you

class Markdown2Html extends Component {
  state = {};
  render() {
    const markdown = '## try model\nfjksdla\n\`\`\`c++\ncout<<"hello world";\n\`\`\`\njfl;kasdjl;fkjasdklfjlasjdf**kj**asdklfjaskdljfkasjdfkasdfhsjdfasdkfjskdjfasdf\n\n<a href="/">sadfasdfsadfa</a>\n\n$a \\times b = c$\n';
    
    return (
      <ReactMarkdown children={markdown} remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex,rehypeRaw]} />
    );
  }
}

export default Markdown2Html;
