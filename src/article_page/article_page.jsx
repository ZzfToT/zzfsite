import React, { Component } from "react";
import SidebarContent from "../sidebar/sidebar_content";
import Categories from "../sidebar/sidebar_sections/categories";
import Tags from "../sidebar/sidebar_sections/tags";
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
      .then((response) => response.json())
      .then((js) => this.handleJsonResponse(js))
      .catch((error) => console.log(error));
  };

  handleJsonResponse = (js) => {
    js.date = new Date(js.date);
    js.status_code === 500 && window.history.replaceState(null, null, "/500");
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
                  categories={wjr.categories}
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
