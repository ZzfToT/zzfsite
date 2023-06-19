import React, { Component } from "react";
import ArticleItems from "../article_items/article_items";
import SidebarContent from "../sidebar/sidebar_content";
import { useParams } from "react-router-dom";
import Categories from "../sidebar/sidebar_sections/categories";
import Tags from "../sidebar/sidebar_sections/tags";
import NotFound from "../common/not_found";

class Termc extends Component {
  state = {
    postTimeDict:{},
  }

  componentDidMount() {
    fetch(encodeURI(`http://175.178.214.71:8000/zzfsite/category/?category=${encodeURIComponent(this.props.params.category)}`))
    .then(response => response.json())
    .then(js => this.setPostTimeList(js))
    .catch(error => console.log(error))
  }

  setPostTimeList = (js) => {
    js.status_code === 500 && window.history.replaceState(null, null, "/500");
    this.setState({
      postTimeDict: js.postTimeDict,
      status_code: js.status_code
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.params.category !== prevProps.params.category) {
      this.componentDidMount();
    }
  }

  render() {
    return (
      this.state.status_code === 404?
      <NotFound/>:
      <main>
        <div className="mainbody">
          <div className="writing-content-grid">
            <ArticleItems title={this.props.params.category} postTimeDict={Object.entries(this.state.postTimeDict)} />
            <SidebarContent sidesections={[<Categories highlight={this.props.params.category} key="Categories" cates={Object.entries(this.props.categoryDict)} />, <Tags key="Tags" tags={this.props.tags} />]} />
          </div>
        </div>
      </main>
    );
  }
}

export default function Term(props) {
  const params = useParams();
  return <Termc params={params} categoryDict={props.categoryDict} tags={props.tags} />;
}
