import React from "react";
import "./style.scss";
import { Button } from "../Button";
import { render } from "@testing-library/react";

export class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="base-container">
                <div className="header">
                    Login :
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username :</label>
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password :</label>
                        <input type="password" name="password" placeholder="password" />
                    </div>
                </div>
                <div className="footer">
                    <Button type={"button"} buttonStyle={"btn--outline"} >Login</Button>
                </div>
            </div>
        )
    }
}