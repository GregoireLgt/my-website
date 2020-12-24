import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css'
import { Button } from '../Button'
import App from "../../App";

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Grégoire Laget 🧑‍💻</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars' }> </i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <a href="https://www.linkedin.com/in/gregoire-laget/" target="_blank"><i className="fab fa-linkedin fa-2x"></i></a>
                <a href="https://github.com/GregoireLgt" target="_blank"><i className="fab fa-github fa-2x"></i></a>
            </nav>
        )
    }
}
export default Navbar;
