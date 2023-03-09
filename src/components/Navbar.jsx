import "./NavbarStyles.css";
import { Component } from "react";
import {NavItems} from "./NavItems"

class Navbar extends Component{
    state = {clicked:false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">SGes-EventosA</h1>
                
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className= {this.state.clicked ? "nav-menu active":"nav-menu"}>
                    
                    {NavItems.map((item,index)=>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    <i className="icons" class={item.icon}></i>{item.title}
                                </a>
                            </li>
                        )
                    })}
                    <button>Sign In</button> 
                </ul>
            </nav>

        );
    }
}

export default Navbar;
