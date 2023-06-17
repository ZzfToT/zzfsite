import React, { Component } from "react";
import ProjectList from "../projectlist/projectlist";

class ProjectPage extends Component {
  state = {};
  render() {
    return (
      <main>
        <div className="mainbody">
          <header>
            <h1 className="PageTitle">Projects</h1>
          </header>
          <ProjectList />
        </div>
      </main>
    );
  }
}

export default ProjectPage;
