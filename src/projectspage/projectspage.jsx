import React, { Component } from "react";
import Nav from "../nav/nav";
import ProjectList from "../projectlist/projectlist";

class ProjectPage extends Component {
  state = {};
  render() {
    return (
      <div id="layout">
        <Nav></Nav>
        <main>
          <div className="mainbody">
            <header>
              <h1 className="PageTitle">Projects</h1>
            </header>
            <ProjectList />
          </div>
        </main>
      </div>
    );
  }
}

export default ProjectPage;
