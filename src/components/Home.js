import { Button } from '@material-ui/core'
import { ArrowForwardIos } from '@material-ui/icons'
import React from 'react'
import MetaTags from 'react-meta-tags'
import { withRouter } from 'react-router-dom'

function Home(props) {
    const { history } = props

    function handleClick() {
        history.push('/generators/picker')
    }
        
        
        
    

    return(
        <div>
            <MetaTags>
                <title>random-now.com - Free random generators</title>
                <meta name="description" content="Pick random winners. Generate random groups. Get started now for free!" />
          </MetaTags>
                <div>
                    <h1>random-now.com</h1>
                    <h3>Welcome to random-now.com! Select a random generator and get started now!</h3>
                    <Button variant="contained" size="large" color="primary" onClick={handleClick} endIcon={<ArrowForwardIos />}>
                        Random Picker
                    </Button>
                    <br />
                    <br />
                    <br />
                    <h5>More random generators are coming soon!</h5>
                </div>
        </div>  
    )
}

export default withRouter(Home)