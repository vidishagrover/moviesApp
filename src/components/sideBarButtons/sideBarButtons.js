import React from 'react';
import './sideBarButtons.css';

class SideBarButtons extends React.Component{
    constructor(props){
        super(props);
        this.state = {};


    }
    click = (e) => {
        this.props.click(e.target.innerHTML)
    }
    render() {
        return(
            <div onClick = {this.click} className ="sidebar-button">
                {this.props.text}
            </div>
        )
    }
}

export default SideBarButtons