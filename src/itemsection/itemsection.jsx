import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './itemsection.css'

class ItemSection extends Component {
    state = {  } 
    render() { 
        return (
          <section className="Section mt-5">
            <div className="FirstSection d-flex justify-content-between">
              <h2 className="SectionTitle">{this.props.title}</h2>
              <a href="/">
                <button>{this.props.titleright}</button>
              </a>
            </div>
            <br />
            <div className="SectionItems">
              <Link
                to="/"
                className="d-flex justify-content-between align-items-center mt-2"
              >
                <h3 className="SectionItem">
                  中文古文诗词智能学习与应用技术研究
                </h3>
                <time>2019/05/09</time>
              </Link>
              <Link
                to="/"
                className="d-flex justify-content-between align-items-center mt-2"
              >
                <h3 className="SectionItem">基于深度学习的图像迁移算法研究</h3>
                <time>2019/05/09</time>
              </Link>
              <Link
                to="/"
                className="d-flex justify-content-between align-items-center mt-2"
              >
                <h3 className="SectionItem">论文格式检查工具</h3>
                <time>2019/05/09</time>
              </Link>
              <Link
                to="/"
                className="d-flex justify-content-between align-items-center mt-2"
              >
                <h3 className="SectionItem">基于神经网络的机器翻译研究</h3>
                <time>2019/05/09</time>
              </Link>
              <Link
                to="/"
                className="d-flex justify-content-between align-items-center mt-2"
              >
                <h3 className="SectionItem">基于知识图谱的检索和推荐研究</h3>
                <time>2019/05/09</time>
              </Link>
            </div>
          </section>
        );
    }
}
 
export default ItemSection;