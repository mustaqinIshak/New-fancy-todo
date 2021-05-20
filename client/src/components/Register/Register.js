'use strict'

import React from "react"
import { Button } from "../Button"
import "../../General/style.scss";

export class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fields: {},
            errors: {}    
        }
    }

    handleValidation() {
        let fields = this.state.fields
        let errors = {}
        let formIsValid = true

        //fullname
        if(!fields["fullname"]) {
            formIsValid = false
            errors["fullname"] = "fullname cannot be empty"
        }

        if (typeof fields["fullname"] !== "undefined") {
            if(!fields["fullname"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false
                errors["fullname"] = "Only Letters"
            }
        }

        //username
        if(!fields["username"]){
            formIsValid = false
            errors["username"] = "username cannot be empty"
        }

        if (typeof fields["username"] !== "undefined") {
            if(fields["username"].match(/[\s]/g)){
                formIsValid = false
                errors["username"] = "username cannot be any whitespace"
            }
        }


        //email
        if(!fields["email"]) {
            formIsValid = false
            errors["email"] = "email cannot be empty"
        }

        if(typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf('@')
            let lastDotPos = fields["email"].lastIndexOf('.')

           if(!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields['email'].length - lastDotPos) > 2)) {
               formIsValid = false
               errors["email"] = "email is not valid"
           }
        }

        //password
        if(!fields["password"]){
            formIsValid = false
            errors["password"] = "password cannot be empty"
        }

        if (typeof fields["password"] !== "undefined") {
            if (fields["password"].length < 8) {
                formIsValid = false
                errors["password"] = "password must be 8 character or more"
            }
        }

        this.setState({errors: errors})
        return formIsValid
    }

    contactSubmit(e){
        e.preventDefault()

        if(this.handleValidation()) {
            alert("Register Success")
        } else {
            alert("Register Fail")
        }
    }

    handleChange(field, e) {
        let fields = this.state.fields
        fields[field] = e.target.value
        this.setState({fields})
    }
    

    render() {
        return(
            <div className="base-container">
                <div className="header">
                    Register
                </div>
                <form className="form" onSubmit={this.contactSubmit.bind(this)}>
                        <div className="form-group">
                                <label htmlFor="fullname">
                                    Fullname: 
                                </label>
                                <input type="text" ref="fullname" placeholder="Fullname" onChange={this.handleChange.bind(this,"fullname")} value={this.state.fields["fullname"]}/>
                                <span className="error">{this.state.errors["fullname"]}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">
                                Username :
                            </label>
                            <input type="text" refs="username" placeholder="username" onChange={this.handleChange.bind(this,"username")} value={this.state.fields["username"]}/>
                            <span className="error">{this.state.errors["username"]}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">
                                Email :
                            </label>
                            <input type="email" refs="email" placeholder="email@mail.com" onChange={this.handleChange.bind(this,"email")} value={this.state.fields["email"]}/>
                            <span className="error">{this.state.errors["email"]}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">
                                password :
                            </label>
                            <input type="password" refs="password" placehoder="password" onChange={this.handleChange.bind(this, "password")} value={this.state["password"]}/>
                            <span className="error">{this.state.errors["password"]}</span>
                        </div>
                    <div className="footer">
                        <a>Already have account ? <a className="login-link" onClick={this.props.onClick}>Please login here</a></a>
                        <Button buttonStyle={"btn--outline"}>Register</Button>
                    </div>
                </form>
                
            </div>
        )
    }
}