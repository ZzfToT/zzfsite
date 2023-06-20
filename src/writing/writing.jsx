import React, { Component } from "react";
import ArticleItems from "../article_items/article_items";
import SidebarContent from "../sidebar/sidebar_content";
import './writing.css'
import Categories from "../sidebar/sidebar_sections/categories";
import Tags from "../sidebar/sidebar_sections/tags";

class Writing extends Component {
  state = {
    postTimeDict:{}
  };     

  componentDidMount() { 
    fetch("http://175.178.214.71:8000/zzfsite/postlistall/")
    .then(response => response.json())
    .then(js => this.setPostTimeList(js))
    .catch(error => console.log(error))
  }

  handlePolistLIstAllResponse = (response) => {
    if (response.ok) {
      return response.json();
    }
    else {
      return {status_code: 500};
    }
  }

  setPostTimeList = (js) => {
    js.status_code === 500 && window.history.replaceState(null, null, "/500");
    this.setState({
      postTimeDict: js.postTimeDict,
    })
  }

  render() {
    return (
      <React.Fragment>
        <main>
          <div className="mainbody">
            <div className="writing-content-grid">
              <ArticleItems title="Writing" postTimeDict={Object.entries(this.state.postTimeDict)} />
              <SidebarContent sidesections={[<Categories key="categories" cates={Object.entries(this.props.categoryDict)}/>, <Tags key="tags" tags={this.props.tags} />]} />
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Writing;