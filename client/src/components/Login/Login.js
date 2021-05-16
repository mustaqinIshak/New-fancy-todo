import React from "react";
import "../../General/style.scss";
import { Button } from "../Button";
import { render } from "@testing-library/react";

export class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            field: {},
            errors: {},
        }
    }

    handleValidation() {
        let { field } = this.state
        let  errors = {}
        let formIsValid = true

        //fullname
        if(!field["fullname"]) {
            formIsValid = false
            errors["fullname"] = "fullname cannot be empty"
        }

        if(typeof field["fullname"] !== "undefined"){
            if(!field["fullname"].match(/^[a-zA-Z]+$/)){
                formIsValid = false
                errors["fullname"] = "Only Letters"
            }
        }

        //username
        if(!field["username"]){
            formIsValid = false
            errors["username"] = "username cannot be empty"
        }

        if(typeof field["username"]!== "undefined"){
            if(field["username"].match(/[\s]/g)){
                formIsValid = false
                errors["username"] = "username cannot be any whitespace"
            }
        }

        //email
        if(!field["email"]) {
            formIsValid = false
            errors["email"] = "Email Cannot be empty"
        }

        if(typeof field["email"] !== "undefined") {
           let lastAtPos = field["email"].lastIndexOf('@')
           let lastDotPos = field["email"].lastIndexOf('.')

           if(!(lastAtPos < lastDotPos && lastAtPos > 0 && field["email"].indexOf('@@') === -1 && lastDotPos > 2 && (field['email'].length - lastDotPos) > 2)){
               formIsValid = false
               errors["email"] = "Email is not valid"
           }
        }
    }

    render() {
        return(
            <div className="base-container">
                <div className="header">
                    Login
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
                    <a>Dont have account ? <a className="register-link" onClick={this.props.onClick}>please register here</a></a>
                    <Button type={"button"} buttonStyle={"btn--outline"} >Login</Button>
                </div>
            </div>
        )
    }
}