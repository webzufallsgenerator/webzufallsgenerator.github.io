import { render } from '@testing-library/react';
import React from 'react'
import { Component } from 'react';
import NumberForm from './NumberForm'

class RandomNumber extends Component {
    constructor() {
        super()
        this.state = {
            minimum: '',
            maximum: '',
            randomNumber: null
        }

        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.clearForm=this.clearForm.bind(this)
    }

    handleChange(event) {
        const value = event.target.value
        this.setState({
            [event.target.name]: value
        })
        console.log(this.state.minimum)
        console.log(this.state.maximum)

    }

    handleSubmit() {
        const minimum = Number(this.state.minimum)
        const maximum = Number(this.state.maximum)
        if (maximum > minimum) {
            localStorage.setItem("minimum", minimum)
            localStorage.setItem("maximum", maximum)
            const randomNum1 = Number(Math.floor(Math.random()*(maximum-minimum + 1)))
            console.log(randomNum1)
            const randomNum2 = randomNum1 + minimum
            localStorage.setItem("randomNum", randomNum2)
            window.location.reload()
            this.setState({
                randomNum: randomNum2
            }) 
        } else {
            alert("Minimum must be smaller than maximum")
        }
        
    }

    clearForm() {
        localStorage.clear()
        window.location.reload()
      }

    componentDidMount() {
    if (localStorage.getItem("minimum") != null) {
        const minimum = localStorage.getItem("minimum")
        this.setState({
        minimum: minimum
        })
    }
    if (localStorage.getItem("maximum") != null) {
        const maximum = localStorage.getItem("maximum")
        this.setState({
        maximum: maximum
        })
    }
    }

    render() {
        if (this.state.randomNumber !== localStorage.getItem("randomNum")) {
            var randomNumber = localStorage.getItem("randomNum")
          } else {
            randomNumber = this.state.randomNumber
          }
      
          if (randomNumber != null && randomNumber !== "") {
            var result = (
              <div>
                <p style = {{marginBottom: 0}}>Randomly picked was:</p>
                <b style = {{marginTop: 0}}>{randomNumber}</b>
              </div>
            ) 
          } else {
            result = null
          }


        return(
            <div>
                <h1>Random Number </h1>
                <h3>Enter the range from which you want to pick a random number</h3>
                <NumberForm 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                handleClick={this.clearForm}
                data={this.state}
                />
                {result}
            </div>
        )
    }
}

export default RandomNumber