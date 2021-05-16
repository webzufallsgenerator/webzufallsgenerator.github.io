import '../App.css';
import { Component } from 'react';
import Form from './Form'




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
        <div>
            <Form 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                data={this.state}
            />
            <p>Randomly picked was: {randomName}</p>
        </div>
    )
  }
}

export default RandomPicker;
