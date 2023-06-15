import React, { Component } from 'react';

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