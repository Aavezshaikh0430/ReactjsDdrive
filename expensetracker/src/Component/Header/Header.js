import React from "react";
import Logo from "./Logo";
 
class Header extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div>
                <Logo/>
            </div>
        )
    }
}
export default Header;