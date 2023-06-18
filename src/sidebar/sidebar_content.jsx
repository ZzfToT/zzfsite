import React, { Component } from 'react';
import "./sidebar.css"

class SidebarContent extends Component {
    state = {  } 
    render() { 
        return (
            <div className='SidebarContent'>
                {this.props.sidesections}
            </div>
        );
    }
}
 
export default SidebarContent;