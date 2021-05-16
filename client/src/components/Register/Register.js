'use strict'

import React from "react"
import { Button } from "../Button"
import "../../General/style.scss";

export class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            field: {},
            errors: {},
        }
    }

    handleValidation() {
        let { field } = this.state
        let errors = {}
        let formIsValid = true

        //fullname
        if(!field["fullname"]) {
            formIsValid = false
            errors["fullname"] = "fullname cannor be empty"
        }

        if (typeof filed["fullname"] !== "undifined") {
            if(!field["fullname"].match(/^[a-zA-z]+$/)) {
                formisValid = false
                errors["fullname"] = "Only Letters"
            }
        }

        //username
        if(!field["username"]){
            formIsValid = false
            errors["username"] = "username cannot be empty"
        }

        if (typeof field["username"] !== "undefined") {
            if(field["username"].match(/[\s]/g)){
                formIsValid = false
                errors["username"] = "username cannot be any whitespace"
            }
        }


        //email
        if(!field["email"]) {
            formIsValid = false
            errors["email"] = "email cannot be empty"
        }

        if(typeof field["email"] !== "undefined") {
            let lastAtPos = field["email"].lastIndexOf('@')
            let lastDotPos = field["email"].lastIndexOf('.')

           if(!(lastAtpos < lastDotPos && lastAtPos > 0 && field["email"].indexOf('@@') === -1 && lastDotPos > 2 && (field['email'].length - lastDotPos) > 2)) {
               formIsValid = false
               errors["email"] = "email is not valid"
           }
        }


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
                    <Button type={"button"} buttonStyle={"btn--outline"}>Register</Button>
                </div>
            </div>
        )
    }
}