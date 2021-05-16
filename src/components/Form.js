import React from 'react'
import '../App.css'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';


function Form(props) {
    

    return(
        <div>
            <h3>Names:</h3>
            <form onSubmit={props.handleSubmit}>
                <TextField 
                    multiline id="outlined-textarea"
                    label="Names"
                    placeholder="Enter all the names here" 
                    variant="outlined" 
                    value={props.data.names} 
                    onChange={props.handleChange}/>
                <br/>
                <br/>
                <Button type= "submit" variant="contained" color="primary">
                    Select random name
                </Button>
                
            </form>
        </div>
    )
}

export default Form
