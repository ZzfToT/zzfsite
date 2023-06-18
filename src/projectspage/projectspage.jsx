import React, { Component } from "react";
import ProjectList from "../projectlist/projectlist";

class ProjectPage extends Component {
  state = {
    projectlist: null,
  };

  componentDidMount() {
    fetch("https://api.github.com/users/ZzfToT/repos")
      .then((response) => response.json())
      .then((js) => this.setProjectList(js))
      .catch((error) => console.log(error));
  }

  setProjectList = (projectlist) => {
    projectlist.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    this.setState({
      projectlist: projectlist,
    });
  };

  render() {
    return (
      <main>
        <div className="mainbody">
          <header>
            <h1 className="PageTitle">Projects</h1>
          </header>
          {this.state.projectlist && 
          <ProjectList projectlist={this.state.projectlist} />}
        </div>
      </main>
    );
  }
}

export default ProjectPage;
