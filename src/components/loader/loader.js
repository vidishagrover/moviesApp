import React from 'react';
import './loader.css';



class Loader extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        //console.log("hello");
    }
    // componentDidMount(){ // jaise hi render hoga usse tym  componentDidMount method chl/ execute jayega
    //     console.log("mounted");
    // } 
    // componentDidUpdate(){ // jaise hi Rerender ya state change hoga usse tym  componentDidUpdate method chl/ execute jayega
    //     console.log("updated"); //no setState here
    // }
    // componentWillUnmount(){ // when that component removes from webpage tb componentWillUnmount chalega

    // }
    render() {
        // console.log("rendering");
        return(
            <div className ="loader">
                <img src="data:image/png;base64,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" alt= "loader"/>
            </div>
        )
    }
}

export default Loader