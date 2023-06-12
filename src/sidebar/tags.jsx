import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Tags extends Component {
    state = {  } 
    render() { 
        return (
            <div className="Tags">
                <h2 className="CardName">Tags</h2>
                 <div className='tag-list'>
                    <Link className="tag">api</Link>
                    <Link className="tag">html</Link>
                    <Link className="tag">css</Link>
                    <Link className="tag">django</Link>
                    <Link className="tag">java</Link>
                    <Link className="tag">c++</Link>
                    <Link className="tag">python</Link>
                    <Link className="tag">socket</Link>
                    <Link className="tag">algorithme</Link>
                    <Link className="tag">javascript</Link>
                    <Link className="tag">thread</Link>
                    <Link className="tag">network</Link>
                    <Link className="tag">git</Link>
                    <Link className="tag">shell</Link>
                    <Link className="tag">linux</Link>
                    <Link className="tag">docker</Link>
                 </div>
            </div>
        );
    }
}
 
export default Tags;