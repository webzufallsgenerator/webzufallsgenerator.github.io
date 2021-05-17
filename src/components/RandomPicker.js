import '../App.css';
import { Component } from 'react';
import Form from './Form'
import { useHistory } from 'react-router'




class RandomPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      names: '',
      random_generated: [],
    }
    
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
    
  handleChange(event) {
    this.setState({
      names: event.target.value
    })
    console.log(this.state.names)
  }
  
  

  handleSubmit() {
    var names = this.state.names.split("\n")
    console.log(names)
    var randomName = names[Math.floor(Math.random()*names.length)]
    localStorage.setItem('randomName', randomName)
    localStorage.setItem('names', JSON.stringify(names))
    console.log(localStorage.getItem("randomName"))
    window.location.reload()
    this.setState({
      random_generated: randomName
    })
    }

  componentDidMount() {
    if (localStorage.getItem("names") != null) {
      const names = JSON.parse(localStorage.getItem("names"))
      this.setState({
        names: names.join("\n")
      })
    }
  }

  render() {
    if (localStorage.getItem("randomName") != null) {
      var randomName = localStorage.getItem("randomName")
      /*
      var names = JSON.parse(localStorage.getItem("names"));
      var nameList = names.map((name, index) => 
      <li key={index}>
          {name}
      </li>) */
    }
    
    return(
        <div >
            <h1>Random Picker</h1>
            <h3>Enter all the names or items and pick a random one!</h3>
            <h4>Press enter after every entry!</h4>
            <Form 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                data={this.state}
            />
            <p style = {{marginBottom: 0}}>Randomly picked was:</p>
            <b style = {{marginTop: 0}}>{this.state.random_generated}</b>
        </div>
    )
  }
}

export default RandomPicker;
