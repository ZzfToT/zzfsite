import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./projectlist.css";

class ProjectList extends Component {
  state = {};
  render() {
    return (
      <section className="mt-5">
        {this.props.title &&
        <div className="GridSection d-flex justify-content-between">
          <h2 className="SectionTitle">{this.props.title}</h2>
          <Link to="/projects" className="button">查看所有</Link>
        </div>}
        <br />
        <div className="GridSectionItems mb-5">
          <div>
            <div>
              <time>2022</time>
              <a className="ProjectName">FlowWord</a>
              <p>a desktop english word recite app</p>
            </div>
            <div className="pt-0">
              <a href="/" className="ProjectLink">
                demo
              </a>
            </div>
          </div>

          <div>
            <div>
              <time>2022</time>
              <a className="ProjectName">FlowWord</a>
              <p>a desktop english word recite app</p>
            </div>
            <div className="pt-0">
              <a href="/" className="ProjectLink">
                demo
              </a>
            </div>
          </div>

          <div>
            <div>
              <time>2022</time>
              <a className="ProjectName">FlowWord</a>
              <p>a desktop english word recite app</p>
            </div>
            <div className="pt-0">
              <a href="/" className="ProjectLink">
                demo
              </a>
            </div>
          </div>

          <div>
            <div>
              <time>2022</time>
              <a className="ProjectName">FlowWord</a>
              <p>a desktop english word recite app</p>
            </div>
            <div className="pt-0">
              <a href="/" className="ProjectLink">
                demo
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProjectList;
