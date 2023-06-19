import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./itemsection.css";

class ItemSection extends Component {
  state = {};
  render() {
    return (
      <section className="Section mt-5">
        <div className="FirstSection d-flex justify-content-between align-items-center">
          <h2 className="SectionTitle">{this.props.title}</h2>
          {this.props.titleright !== "" && (
            <Link className="button" to="/writing">
              {this.props.titleright}
            </Link>
          )}
        </div>
        <br />
        <div className="SectionItems">
          {
            this.props.postlist.map( post => {
              return (
                <Link
                  to="/"
                  className="d-flex justify-content-between align-items-center mt-2"
                  key={post.title}
                >
                  <h3 className="SectionItem">{post.title}</h3>
                  {this.props.showyear ? (
                    <time className="desktop-only">
                      {new Date(post.create_date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  ) : (
                    <time className="desktop-only">
                      {new Date(post.create_date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  )}
                </Link>
              );
            }) 
          }
        </div>
      </section>
    );
  }
}

export default ItemSection;
