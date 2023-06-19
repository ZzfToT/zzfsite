import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostInfoSideSection extends Component {
    state = {  } 
    render() { 
        return (
          <div className="SidebarCard post-detail">
            <div className="post-time">
              <h2 className="CardName">Post Time</h2>
              <ul>
                <li>{`Written on ${this.props.time.toDateString()}`}</li>
              </ul>
            </div>

            <div className="post-category">
              <h2 className="CardName">CATEGORY</h2>
              <ul>
                  <li><Link to={`/category/${this.props.category}`}>{this.props.category}</Link></li>
              </ul>
            </div>

            <div className="post-tag-list Tags">
              <h2 className="CardName">TAG</h2>
              <div className="tag-list">
                {this.props.tags.map((t) => (
                  <Link className="tag" key={t} to={`/tag/${t}`}>
                    {t}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        );
    }
}
 
export default PostInfoSideSection;