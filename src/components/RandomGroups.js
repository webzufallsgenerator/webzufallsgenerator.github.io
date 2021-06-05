import React from 'react'
import { Component } from 'react';

class RandomGroups extends Component{

    constructor() {
        super()
        this.state = {
            names: '',
            random_groups: null,
            type: null
        }
    }

    handleChange(event) {
        this.setState({
          names: event.target.value
        })
      }

    handleSubmit() {
        var names = this.state.names.split("\n")
        const namesLength = names.length
        for (var i=0; i < namesLength; i++) {

        }
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
        if (this.state.random_generated !== localStorage.getItem("randomGroups")) {
            var randomGroups = localStorage.getItem("randomGroups")
          } else {
            randomGroups = this.state.random_generated
          }
      
          if (randomGroups != null && randomGroups !== "") {
            var randomResult = (
              <div>
                <p style = {{marginBottom: 0}}>Your randomly generated groups:</p>
                <b style = {{marginTop: 0}}>{randomGroups}</b>
              </div>
            ) 
          } else {
            randomResult = null
          }
        return(
            <div>
                <h1>Random Groups Generator</h1>
                <h3>Enter all the names or items and pick a random one!</h3>
                <h4>Press enter after every entry!</h4>
                <GroupsForm 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleClick={this.clearForm}
                    data={this.state}
                />
            </div>
        )
    }
}