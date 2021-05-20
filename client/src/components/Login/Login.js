import React from "react";
import "../../General/style.scss";
import { Button } from "../Button";
import { render } from "@testing-library/react";

export class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fields: {},
            errors: {},
        }
    }

    handleValidation() {
        let { fields } = this.state
        let  errors = {}
        let formIsValid = true

        //username
        if(!fields["username"]){
            formIsValid = false
            errors["username"] = "username cannot be empty"
        }

        if(typeof fields["username"]!== "undefined"){
            if(fields["username"].match(/[\s]/g)){
                formIsValid = false
                errors["username"] = "username cannot be any whitespace"
            }
        }

        //password
        if(!fields["password"]) {
            formIsValid = false
            errors["password"] = "password cannot be empty"
        }

        this.setState({error: errors})
        return formIsValid

    }

    contactSubmit(e) {
        e.preventDefault()

        if(this.handleValidation()){
            alert("Login success")
        } else {
            alert("login faill")
        }
    }

    handleChange(field, e) {
        let { fields } = this.state
        fields[field] = e.target.value
        this.setState(fields)

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