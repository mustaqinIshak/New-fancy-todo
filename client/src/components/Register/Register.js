'use strict'

import React from "react"
import { Button } from "../Button"
import "../../General/style.scss";

export class Register extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="base-container">
                <div className="header">
                    Register
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="fullname">
                            Fullname: 
                        </label>
                        <input type="text" name="fullname" placeholder="Fullname" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">
                            Username :
                        </label>
                        <input type="text" name="username" placeholder="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">
                            Email :
                        </label>
                        <input type="email" name="email" placeholder="email@mail.com"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">
                            password :
                        </label>
                        <input type="password" name="password" placehoder="password" />
                    </div>
                </div>
                <div className="footer">
                    <a>Already have account ? <a className="login-link" onClick={this.props.onClick}>Please login here</a></a>
                    <Button>Register</Button>
                </div>
            </div>
        )
    }
}