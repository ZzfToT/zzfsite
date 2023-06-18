import React, { Component } from "react";
import SidebarContent from "../sidebar/siderbar_content";
import Nav from "../nav/nav";
import Categories from "../sidebar/sidebar_sections/categories";
import Tags from "../sidebar/sidebar_sections/tags";
import ArticleContent from "./article_content/article_content";
import NotFound from "../common/not_found";
import { useParams } from "react-router-dom";
import "./post.css"

class ArticlePageC extends Component {
  state = {
    writingJsonResponse: null,
  };

  componentDidMount = () => {
    fetch(`http://175.178.214.71:8000/zzfsite/post/?title=${this.props.parmas.title}`)
    .then((response) => response.json())
    .then((js) => this.handleJsonResponse(js))
    .catch((error) => console.log(error));
  };

  handleJsonResponse = (js) => {
    console.log("js is ", js);
    js.status_code === 500 && window.history.replaceState(null, null, "/500");
    this.setState({ writingJsonResponse: js});
  };

  render() {
    return (
      this.state.writingJsonResponse && (this.state.writingJsonResponse.status_code === 200?(
        <main className="mainbody">
          <div className="writing-content-grid">
            <ArticleContent title={this.state.writingJsonResponse.title} textContent={this.state.writingJsonResponse.content} />
            <SidebarContent
              sidesections={[<Categories key="cate" />, <Tags key="tag" />]}
            />
          </div>
        </main>):(this.state.writingJsonResponse.status_code === 404 ? <NotFound/>: null)
    ));
  }
}

export default function ArticlePage() {
  const parmas = useParams();
  return <ArticlePageC parmas={parmas} />;
};
