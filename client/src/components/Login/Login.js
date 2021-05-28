import React from "react";
import "../../General/style.scss";
import { Button } from "../Button";
import { render } from "@testing-library/react";
import APIKit, {setClientToken, setTokenClient} from '../../General/APIKit'

const initialState = {
    username: '',
    password: '',
    errors: {},
    isAuthorized: false,
    isLoading: false,
}

export class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fields: {},
            errors: {},
            isAuthorized: false,
            isLoading: false,
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

        this.setState({errors: errors})
        return formIsValid

    }

    contactSubmit(e) {
        e.preventDefault()

        if(this.handleValidation()) {
            const username = this.state.fields["username"]
            const password = this.state.fields["password"]
            let errors = {}
            const payload = {username, password}

            const onSuccess = async({data}) => {
                // set JSON Web Token on Success
                console.log(`ini data token di file login ${data.token}`)
                const token = await setClientToken(data.token)
                console.log(`ini hasil dari setClientToken ${token}`)
                this.setState({isLoading: false, isAuthorized: true})
            }

            const onFailure = error => {
                console.log(error && error.response)
                errors["serverErrors"] = error.response.data.message
                this.setState({errors: errors, isLoading: false})
            }

            APIKit.post('/users/login', payload)
            .then(onSuccess)
            .catch(onFailure)
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
                <form onSubmit={this.contactSubmit.bind(this)}>
                <span className="error">{this.state.errors["serverErrors"]}</span>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username :</label>
                            <input type="text" refs="username" placeholder="username" onChange={this.handleChange.bind(this,"username")} value={this.state.fields["username"]}/>
                            <span className="error">{this.state.errors["username"]}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password :</label>
                            <input type="password" refs="password" placeholder="password" onChange={this.handleChange.bind(this,"password")} value={this.state.fields["password"]}/>
                            <span className="error">{this.state.errors["password"]}</span>
                        </div>
                    </div>
                    <div className="footer">
                        <a>Dont have account ? <a className="register-link" onClick={this.props.onClick}>please register here</a></a>
                        <Button buttonStyle={"btn--outline"} >Login</Button>
                    </div>
                </form>
            </div>
        )
    }
}