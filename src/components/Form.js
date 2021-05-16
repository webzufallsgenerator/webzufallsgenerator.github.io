import React from 'react'
import '../App.css'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import { ArrowForwardIos } from '@material-ui/icons';


function Form(props) {
    

    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <TextField 
                    multiline id="outlined-textarea"
                    label="Names/Items"
                    placeholder="Enter all the names/items here" 
                    variant="outlined" 
                    value={props.data.names} 
                    onChange={props.handleChange}
                    
                    style = {{width: 500}}
                    />
                <br/>
                <br/>
                <Button type= "submit" variant="contained" color="primary" endIcon={<ArrowForwardIos />}>
                    Pick random
                </Button>
                
            </form>
        </div>
    )
}

export default Form
