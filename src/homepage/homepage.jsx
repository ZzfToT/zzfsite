import React, { Component } from "react";
import Nav from "../nav/nav";
import "./homepage.css";
import ItemSection from "../itemsection/itemsection";
import ProjectList from "../projectlist/projectlist";
import Intro from "./introduction";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <main>
          <div className="mainbody">
            <Intro />
            <br />
            <br />
            <ItemSection title="近期文章" titleright="查看所有" />
            <br />
            <br />
            <ProjectList title="项目列表" />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default HomePage;
