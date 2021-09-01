import React from 'react';
import SideBarButtons from '../sideBarButtons/sideBarButtons';
import './sideBar.css';



class SideBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
         //console.log("1" ,props.click);
    }
    // componentDidMount(){ // jaise hi render hoga usse tym  componentDidMount method chl/ execute jayega
    //     console.log("mounted");
    // } 
    // componentDidUpdate(){ // jaise hi Rerender ya state change hoga usse tym  componentDidUpdate method chl/ execute jayega
    //     console.log("updated"); //no setState here
    // }
    // componentWillUnmount(){ // when that component removes from webpage tb componentWillUnmount chalega

    // }
    click = (e) => {
        this.props.click(e)
    }
    render() {
        // console.log("rendering");
        return(
            <div className ="sidebar" key={1}>
            <SideBarButtons click = {this.click} text="All Genre" />
            <SideBarButtons click = {this.click} text="Action" />
            <SideBarButtons click = {this.click} text="Comedy" />
            <SideBarButtons click = {this.click} text="Drama" />
            <SideBarButtons click = {this.click} text="Horror" />
            <SideBarButtons click = {this.click} text="Romance" />
            <SideBarButtons click = {this.click} text="Thriller" />
            
            </div>
        )
    }
}

export default SideBar