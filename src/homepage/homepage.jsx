import React, { Component } from "react";
import Nav from "../nav/nav";
import "./homepage.css";
import ItemSection from "../itemsection/itemsection";
import ProjectList from "../projectlist/projectlist";
import Intro from "./introduction";

class HomePage extends Component {
  state = {
    postlist: null,
    projectlist:null,
  };

  componentDidMount () {
    fetch(`http://175.178.214.71:8000/zzfsite/latestpost/`)
    .then(response => response.json())
    .then(js => this.setLatestPost(js))
    .catch(error => console.log(error))

    fetch("https://api.github.com/users/ZzfToT/repos")
    .then (response => response.json())
    .then(js => this.setProjectList(js))
    .catch(error => console.log(error))
  }

  setProjectList = (projectlist) => {
    projectlist = projectlist.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)).slice(0,6);
    this.setState({
      projectlist: projectlist,
    })
  }

  setLatestPost = (js) => {
    js.status_code === 500 && window.history.replaceState(null, null, "/500");
    this.setState({
      postlist: js.postlist
    })
  }

  render() {
    return (
      <React.Fragment>
        <main>
          <div className="mainbody">
            <Intro />
            <br />
            <br />
            {this.state.postlist && 
            <ItemSection title="近期文章" titleright="查看所有" postlist={this.state.postlist} showyear={true} /> }
            <br />
            <br />
            {this.state.projectlist &&
            <ProjectList title="项目列表" projectlist={this.state.projectlist} />}
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default HomePage;
