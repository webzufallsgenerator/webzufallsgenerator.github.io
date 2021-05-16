import { Button } from '@material-ui/core'
import ArrowForward from '@material-ui/icons/ArrowForward'
import React from 'react'
import MetaTags from 'react-meta-tags'

function Home() {

    const styles = {
        color: 'black',
    }

    return(
        <div>
            <MetaTags>
                <title>random-now.com - Free random generators</title>
                <meta name="description" content="Pick random winners. Generate random groups. Get started now for free!" />
          </MetaTags>
                <div>
                    <h1 style={styles}>random-now.com</h1>
                    <h3>Welcome to random-now.com! Select a random generator and get started now!</h3>
                    <Button variant="contained" size="large" color="primary" href="/generators/picker" endIcon={<ArrowForward />}>
                        Random Picker
                    </Button>
                </div>
        </div>  
    )
}

export default Home