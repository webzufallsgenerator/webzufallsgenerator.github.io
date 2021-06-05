import './App.css';
import { Switch, Route, HashRouter as Router } from 'react-router-dom'
import Home from './components/Home'
import ResponsiveDrawer from './components/ResponsiveDrawer';
import RandomPicker from './components/RandomPicker';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import RandomNumber from './components/RandomNumber'

const drawerWidth = 240

  const useStyles = makeStyles((theme) => ({
    content: {
        [theme.breakpoints.up('sm')]: {
            marginLeft: drawerWidth + 40
        },
        flexShrink: 0,
        padding: 50
    // padding: theme.spacing(3),
    },
  }));

function App() {
  
  const classes = useStyles();

  return(
    <React.StrictMode>
          <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
              <header className="App-header">
                <ResponsiveDrawer />
                <div className={classes.content}>
                  <Switch>
                    <Route exact path={process.env.PUBLIC_URL + "/"}>
                      <Home />
                    </Route>
                    <Route exact path={process.env.PUBLIC_URL + "/generators/item_picker"}>
                      <RandomPicker />
                    </Route> 
                    <Route exact path={process.env.PUBLIC_URL + "/generators/number_picker"}>
                      <RandomNumber />
                    </Route>
                  </Switch>
                </div>  
              </header> 
            </div>
          </Router>

    </React.StrictMode>
    
  )
}



export default App;
