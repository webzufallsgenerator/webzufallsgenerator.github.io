import React from 'react'

function GroupsForm(props) {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const generateBy = (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Generate by</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
                >
                    <MenuItem value="Group Size">Group Size</MenuItem>
                    <MenuItem value="Number of Groups">Number of Groups</MenuItem>
                </Select>
            </FormControl>
            <TextField id="standard-basic" label="Standard" />
        </div>
    )

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
                {generateBy}
                {textfield}
                <br/>
                {buttons}
            </form>
            
        </div>
    )
}