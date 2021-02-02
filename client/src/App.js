import React from 'react'
import './App.scss';
import { Navbar } from "./components/navbar/Navbar"
import { Login } from "./components/Login/Login"


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
      <Login/>
    )
  }

}

export default App;
