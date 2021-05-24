import React from 'react'
import '../App.css'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import { ArrowForwardIos } from '@material-ui/icons';
import { withRouter } from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden';

function Form(props) {
    
    const textfield = (
        <div>
           <Hidden smUp implementation="css">
                <TextField 
                    multiline id="outlined-textarea"
                    label="Names/Items"
                    placeholder="Enter all the names/items here" 
                    variant="outlined" 
                    value={props.data.names} 
                    onChange={props.handleChange}
                    style = {{width: 300} }
                />
            </Hidden>
            <Hidden xsDown implementation="css">
                <TextField 
                    multiline id="outlined-textarea"
                    label="Names/Items"
                    placeholder="Enter all the names/items here" 
                    variant="outlined" 
                    value={props.data.names} 
                    onChange={props.handleChange}
                    style = {{width: 400} }
                />
            </Hidden> 
        </div>
    )

    const buttons = (
        <div>
            <Hidden smUp implementation="css">
               <div style={{display:"inline"}}>
                    <Button onClick={props.handleClick} variant="contained" color="primary" endIcon={<ArrowForwardIos />} size="small" >
                        Clear form
                    </Button>
                    <Button style={{marginLeft: 10}} type= "submit" variant="contained" color="primary" endIcon={<ArrowForwardIos />} size="small">
                        Pick random
                    </Button>
                </div> 
            </Hidden>
            <Hidden xsDown implementation="css">
               <div style={{display:"inline"}}>
                    <Button onClick={props.handleClick} variant="contained" color="primary" endIcon={<ArrowForwardIos />} >
                        Clear form
                    </Button>
                    <Button style={{marginLeft: 50}} type= "submit" variant="contained" color="primary" endIcon={<ArrowForwardIos />}>
                        Pick random
                    </Button>
                </div> 
            </Hidden>
        </div>
    )

    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                {textfield}
                <br/>
                {buttons}
            </form>
        </div>
    )
}

export default withRouter(Form)
