import React,{Component} from 'react'
// import { render } from 'react-dom'
// import reactLogo from './assets/react.svg'
import './App.css'

class App extends Component{
  state={
    name: "",
    mail: "",
    password: "" 
  }
  handleInput=(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    return (
    <div className="App">
      <p>State:<br />{JSON.stringify(this.state)}</p>

      <label htmlFor="name">
        <input placeholder="Name" type="text" name="name" onChange={this.handleInput} />
      </label>

      <label htmlFor="mail">
        <input placeholder="Email" type="text" name="mail" onChange={this.handleInput} />
      </label>

      <label htmlFor="text">
        <input placeholder="Password" type="password" name="password" onChange={this.handleInput} />
      </label>

    </div>
  )
  }
  
}

export default App
