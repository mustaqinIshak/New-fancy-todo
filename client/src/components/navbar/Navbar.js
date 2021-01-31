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
            if(item.title === "log out"){
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
            isLogin: false
        }
    }
    render(){
        return (
            <nav className="NavbarItems">
                <div className="logo">
                    <h1 className="navbar-logo">Fancy Todo</h1>
                    <div className="menu-icon">
                </div>

                </div>
                <ul className="">
                    <ListMenuItems menuItems={this.state.menuItems} isLogin={this.state.isLogin}/>
                </ul>
            </nav>
        )
    };
};

export default Navbar;