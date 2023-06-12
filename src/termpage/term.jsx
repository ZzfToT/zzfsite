import React, { Component } from 'react';
import Nav from '../nav/nav';
import ArticleContent from '../article_content/article_content';
import SidebarContent from '../sidebar/siderbar_content';
import { useParams } from 'react-router-dom';

class Termc extends Component {
    state = {  } 
    render() { 
        return (
          <div id="layout">
            <Nav />
            <main>
              <div className="mainbody">
                <div className="writing-content-grid">
                  <ArticleContent title={this.props.params.category} />
                  <SidebarContent />
                </div>
              </div>
            </main>
          </div>
        );
    }
}
 
export default function Term () {
    const params = useParams();
    console.log(params);
    return <Termc params={params} />
}
