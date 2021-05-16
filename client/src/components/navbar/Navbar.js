/* eslint-disable */
'use strict'

import React, { Component } from 'react';
import { isElementOfType } from 'react-dom/test-utils';
import { Button } from '../Button';
import "./Navbar.css";

class Navbar extends Component {
  state = {
            
            isLogin: false,
            isClicked: false,
        }

    handleClick = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    render(){
        return (
            <nav className="NavbarItems">
                <div className="logo">
                    <h1 className="navbar-logo">Fancy Todo</h1>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.isClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </div>
                <div className="menu">
                    <Button buttonStyle={"btn--outline"}>Sign Out</Button>
                </div>
            </nav>
        )
    };
};

export default Navbar;