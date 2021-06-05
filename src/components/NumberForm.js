import { TextField , Hidden , Button } from '@material-ui/core'
import { ArrowForwardIos } from '@material-ui/icons';
import React from 'react'

function NumberForm(props) {

    const textfields = (
        <div style={{display: 'inline'}}>
            <Hidden smUp implementation="css">
                <TextField
                    style={{margin: 10}}
                    type="number" 
                    placeholder="Enter minimum" 
                    label="Minimum"
                    variant="outlined" 
                    name="minimum"
                    value={props.data.minimum} 
                    onChange={props.handleChange}
                >        
                </TextField>
                <TextField
                    style={{margin: 10}}
                    type="number" 
                    placeholder="Enter maximum" 
                    label="Maximum"
                    variant="outlined" 
                    name="maximum"
                    value={props.data.maximum} 
                    onChange={props.handleChange}
                >        
                </TextField>
            </Hidden>
            <Hidden xsDown implementation="css">
                <TextField
                    style={{margin: 20}}
                    type="number" 
                    placeholder="Enter minimum" 
                    label="Minimum"
                    variant="outlined" 
                    name="minimum"
                    value={props.data.minimum} 
                    onChange={props.handleChange}
                >        
                </TextField>
                <TextField
                    style={{margin: 20}}
                    type="number" 
                    placeholder="Enter maximum" 
                    label="Maximum"
                    variant="outlined" 
                    name="maximum"
                    value={props.data.maximum} 
                    onChange={props.handleChange}
                >        
                </TextField>
            </Hidden>

        </div>
    )

    const buttons = (
        <div>
            <Hidden smUp implementation="css">
               <div style={{display:"inline"}}>
                    <Button style={{margin: 20}} onClick={props.handleClick} variant="contained" color="primary" endIcon={<ArrowForwardIos />} size="small" >
                        Clear form
                    </Button>
                    <Button style={{margin: 20}} type= "submit" variant="contained" color="primary" endIcon={<ArrowForwardIos />} size="small">
                        Pick random
                    </Button>
                </div> 
            </Hidden>
            <Hidden xsDown implementation="css">
               <div style={{display:"inline"}}>
                    <Button style={{margin: 20}} onClick={props.handleClick} variant="contained" color="primary" endIcon={<ArrowForwardIos />} >
                        Clear form
                    </Button>
                    <Button style={{margin: 20}} type= "submit" variant="contained" color="primary" endIcon={<ArrowForwardIos />}>
                        Pick random
                    </Button>
                </div> 
            </Hidden>
        </div>
    )

    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                {textfields}
                {buttons}
            </form>
        </div>
    )
}

export default NumberForm