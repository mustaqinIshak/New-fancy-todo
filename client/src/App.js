import React from 'react'
import './App.scss';
import { Navbar } from "./components/navbar/Navbar"
import { Login } from "./components/Login/Login.js"
import { Register } from "./components/Register/Register.js"
import  Logo from  "./logo/logo.svg"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoginActive: false,
      isLogin: false,
    }
  }

  changeState() {
    const { isLoginActive } = this.state

    this.setState(prevState => ({isLoginActive: !this.state.isLoginActive}))
  }

  render() {
    return(
      <div className="App">
        <div className="login">
          <img src={Logo} alt="logo" className="img-responsive"></img>
          <div className="container">
            {this.state.isLoginActive ? <Login  onClick={this.changeState.bind(this)} /> : <Register onClick={this.changeState.bind(this)} />}
          </div>
        </div>
      </div>
    )
  }

}

export default App;
