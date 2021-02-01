/* eslint-disable */
'use strict'

import React, { Component } from 'react';
import { isElementOfType } from 'react-dom/test-utils';
import { MenuItems } from './MenuItems';
import "./Navbar.css"


// function ListMenuItems(props) {
//     const menuItems = MenuItems.concat()
//     const login = MenuItems.pop()
//     const logOut = menuItems[menuItems.length - 1]
//     const isLogin = props.isLogin
//     if(!isLogin) {
//         for (let i = 0; i < login.length; i++) {
//             <li key={login[i].index}><a href={login[i].url} className={login[i].cName}>{login[i].title}</a></li>
//         }
//     } 
//     else {
//             return (<li><a href={logOut.url} className={logOut.cName}>{logOut.title}</a></li>)
//     }
// };

class Navbar extends Component {
  state = {
            
            isLogin: false,
            isClicked: false,
            menuItems: MenuItems,
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
                 {MenuItems.map((item, index) => {
                    if(index === MenuItems.length - 1) {
                       return (
                        <li className={this.state.isLogin ? 'nav-button' : 'menu-item-off'}><a className={item.cName} href={item.url}>{item.title}</a></li>
                       )
                    } else {
                        return(
                            <li className={this.state.isLogin ? 'menu-item-off' : 'nav-button'}><a className={item.cName} href={item.url}>{item.title}</a></li>
                        )
                    }
                 })}

                 {/* <ListMenuItems  isLogin={this.state.isLogin}/> */}
                </ul>
            </nav>
        )
    };
};

export default Navbar;