import React from 'react'
import './App.scss';
import { Navbar } from "./components/navbar/Navbar"
import { Login } from "./components/Login/Login"
import  Logo from  "./logo/logo.svg"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoginActive: true,
      isLogin: false,
    }
  }

  render() {
    return(
      <div className="App">
        <div className="login">
          <img src={Logo} alt="logo" className="img-responsive"></img>
          <div className="container">
            <Login/>
          </div>
        </div>
      </div>
    )
  }

}

export default App;
