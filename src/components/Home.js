import { Button } from '@material-ui/core'
import { ArrowForwardIos } from '@material-ui/icons'
import React from 'react'
import MetaTags from 'react-meta-tags'
import { withRouter } from 'react-router-dom'

function Home(props) {
    const { history } = props

    const buttonlist = [
        {
            text: "Item/Name Picker",
            handleClick: () => {
                history.push('/generators/item_picker')
            }
        },
        {
            text: "Number Picker",
            handleClick: () => {
                history.push('/generators/number_picker')
            }
        }
    ]


      
        
        
    

    return(
        <div>
            <MetaTags>
                <title>random-now - Free random generators</title>
                <meta name="description" content="Pick random winners. Generate random groups. Get started now for free!" />
          </MetaTags>
                <div>
                    <h1>random-now</h1>
                    <h3>Welcome to random-now! Select a random generator and get started now!</h3>
                    <Button style={{margin: 20}} variant="contained" size="large" color="primary" onClick={buttonlist[0].handleClick} endIcon={<ArrowForwardIos />}>
                        {buttonlist[0].text}
                    </Button>
                    <Button tyle={{margin: 20}} variant="contained" size="large" color="primary" onClick={buttonlist[1].handleClick} endIcon={<ArrowForwardIos />}>
                        {buttonlist[1].text}
                    </Button>
                    <br />
                    <br />
                    <br />
                    
                </div>
        </div>  
    )
}

export default withRouter(Home)