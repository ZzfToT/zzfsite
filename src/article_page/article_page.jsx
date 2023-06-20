import React, { Component } from "react";
import SidebarContent from "../sidebar/sidebar_content";
import ArticleContent from "./article_content/article_content";
import NotFound from "../common/not_found";
import "./post.css";
import PostInfoSection from "../sidebar/sidebar_sections/post_info";
import { useParams } from "react-router-dom";

class ArticlePageC extends Component {
  state = {
    writingJsonResponse: null,
  };

  componentDidMount = () => {
    fetch(
      `http://175.178.214.71:8000/zzfsite/post/?title=${this.props.parmas.title}`
    )
      .then((response) => this.handleHttpResponse(response))
      .then((js) => this.handleJsonResponse(js))
      .catch((error) => console.log(error));
  };

  handleHttpResponse = (response) => {
    if (response.ok) {
      return response.json();
    }
    else if (response.status === 404) {
      console.log("触发404");
      return {status_code: 404}
    }
    else {
      return {status_code: 500}
    }
  }

  handleJsonResponse = (js) => {
    js.status_code === 500 && window.history.replaceState(null, null, "/500");
    js.date = new Date(js.date);
    this.setState({ writingJsonResponse: js });
  };

  render() {
    const wjr = this.state.writingJsonResponse;
    return (
      wjr &&
      (wjr.status_code === 200 ? (
        <main className="mainbody">
          <div className="writing-content-grid">
            <ArticleContent title={wjr.title} textContent={wjr.content} />
            <SidebarContent
              sidesections={[
                <PostInfoSection
                  key="postinfo"
                  time={wjr.date}
                  tags={wjr.tags}
                  category={wjr.category}
                />,
              ]}
            />
          </div>
        </main>
      ) : wjr.status_code === 404 ? (
        <NotFound />
      ) : null)
    );
  }
}

export default function ArticlePage() {
  const parmas = useParams();
  return <ArticlePageC parmas={parmas} />;
}
