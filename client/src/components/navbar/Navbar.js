/* eslint-disable */
'use strict'

import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import "./Navbar.css"


function ListMenuItems(props) {
    const menuItems = props.menuItems
    const isLogin = props.isLogin
    if(isLogin) {
        const list = menuItems.map((item, index) => {
            if(item.title === "Log Out"){
                return <li key={index}><a href={item.url} className={item.cName}>{item.title}</a></li>
            }
        })
        return (
            list
        )
    } else {
        menuItems.pop()
        const list = menuItems.map((item, index) => {
            return <li key={index}><a href={item.url} className={item.cName}>{item.title}</a></li>
        })
        return (
            list
        )
    }
};

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuItems: MenuItems.concat(),
            isLogin: false,
            isClicked: false,
        }
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
                <ul className="nav-list-button">
                    <ListMenuItems menuItems={this.state.menuItems} isLogin={this.state.isLogin}/>
                </ul>
            </nav>
        )
    };
};

export default Navbar;