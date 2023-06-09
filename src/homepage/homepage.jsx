import React, { Component } from "react";
import Nav from "../nav/nav";
import { Link } from "react-router-dom";
import "./homepage.css";
import ItemSection from "../itemsection/itemsection";
import ProjectList from "../projectlist/projectlist";
import Intro from "./introduction";
class HomePage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div id="layout">
          <Nav />
          <main>
            <div className="mainbody">
              <Intro />
              <br /><br />
              <ItemSection title="近期文章" titleright="查看所有" />
              <br /><br />
              <ProjectList title="项目列表" />
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
