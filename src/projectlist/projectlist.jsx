import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./projectlist.css";

class ProjectList extends Component {
  state = {};
  render() {
    return (
      <section className="mt-4">
        {this.props.title &&
        <div className="GridSection d-flex justify-content-between">
          <h2 className="SectionTitle">{this.props.title}</h2>
          <Link to="/projects" className="button">查看所有</Link>
        </div>}
        <br />
        <div className="GridSectionItems mb-5">
          {
            this.props.projectlist.map( project => {
              return (
                <div key={project.id}>
                  <div>
                    <time>{new Date(project.created_at).getFullYear()}</time>
                    <a className="ProjectName" href={`${project.html_url}`} target="_blank">{project.name}</a>
                    <p>{project.description}</p>
                  </div>
                  <div className="pt-0">
                    <a href={`${project.html_url}`} className="ProjectLink" target="_blank">
                      demo
                    </a>
                  </div>
                </div>
              );
            })
          }
        </div>
      </section>
    );
  }
}

export default ProjectList;
