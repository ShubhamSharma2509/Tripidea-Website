import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import "./NavbarStyles.css";

export default class Navbar extends Component {
    state = {clicked : false};
    handleclick=()=>{
        this.setState({clicked: !this.state.clicked})
    }
  render() {
    return (
      
        <nav className="NavbarItem">
        <h1 className="Navbar-logo" >Tripidea <h3 className='fa fa-thumb-tack'>.</h3></h1>
        <div className='menuicons'onClick={this.handleclick} > 
            <i className={this.state.clicked ? "fas fa-times" :"fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active":"nav-menu"}>
            <li>
                <Link className="nav-links" to="/"><i className="fa-solid fa-house-user"></i>Home</Link>
            </li>
            <li>
                <Link className="nav-links" to="/about"><i className="fa-solid fa-circle-info"></i>About</Link>
            </li>
            <li>
                <Link className="nav-links" to="/service"><i className="fa-solid fa-briefcase"></i>Service</Link>
            </li>
            <li>
                <Link className="nav-links" to="/contact"><i className="fa-solid fa-address-book"></i>Contact</Link>
            </li>
        </ul>
        </nav>
      
    )
  }
}

