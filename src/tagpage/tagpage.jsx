import React, { Component } from "react";
import { useParams } from "react-router-dom";
import SidebarContent from "../sidebar/sidebar_content";
import ArticleContent from "../article_items/article_items";
import Categories from "../sidebar/sidebar_sections/categories";
import Tags from "../sidebar/sidebar_sections/tags";
import NotFound from "../common/not_found";

class TagPagec extends Component {
  state = {
    postTimeDict: {},
  };

  componentDidMount() {
    fetch(
      `http://175.178.214.71:8000/zzfsite/tag/?tag=${encodeURIComponent(this.props.params.tagname)}`
    )
    .then((response) => this.handleTagResponse(response))
    .then((js) => this.setPostTimeList(js))
    .catch((error) => console.log(error));
  }

  handleTagResponse = (response) => {
    if (response.ok) {
      return response.json();
    }
    else {
      return {status_code: 500};
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.params.tagname !== prevProps.params.tagname) {
      this.componentDidMount();
    }
  }
  setPostTimeList = (js) => {
    js.status_code === 500 && window.history.replaceState(null,null, "/500");
    this.setState({
      postTimeDict: js.postTimeDict,
      status_code: js.status_code
    })
  }


  render() {
    return (
      this.state.status_code === 404?
      <NotFound/>:
      <main>
        <div className="mainbody">
          <div className="writing-content-grid">
            <ArticleContent title={this.props.params.tagname} postTimeDict={Object.entries(this.state.postTimeDict)} ></ArticleContent>
            <SidebarContent sidesections={[<Categories key="Categories" cates={Object.entries(this.props.categoryDict)} />, <Tags key="Tags" tags={this.props.tags} highlight={this.props.params.tagname} />]} />
          </div>
        </div>
      </main>
    );
  }
}

export default function TagPage(props) {
  const params = useParams();
  return <TagPagec params={params} categoryDict={props.categoryDict} tags={props.tags} />;
}
