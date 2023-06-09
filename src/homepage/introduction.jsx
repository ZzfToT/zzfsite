import React, { Component } from 'react';

class Intro extends Component {
    state = {  } 
    render() { 
        return (
          <div className="row">
            <header className="col-12 col-md-8">
              <h1 className="PageTitle">嗨👋，我是飞!</h1>
              <br></br>
              <p className="description">欢迎来到我的个人主页。</p>
              <br></br>
              <p className="description">
                我现在是华中科技大学的一名大学生.今年暑假我将成为以名在广州工作的软件开发员。我平时喜欢看校园和日常类动漫以及喜欢玩各种非fps类游戏。
              </p>
            </header>
            <div className="col-12 col-md-4">
              <img
                src="/images/miooi.png"
                alt="mio"
                style={{ maxWidth: "100%", minWidth: 200 }}
              />
            </div>
          </div>
        );
    }
}
 
export default Intro;
