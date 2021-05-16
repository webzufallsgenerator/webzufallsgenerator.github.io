import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home'
import ResponsiveDrawer from './components/ResponsiveDrawer';
import RandomPicker from './components/RandomPicker';
import { makeStyles } from '@material-ui/core/styles';


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
    <Router>
      <div className="App">
        <header className="App-header">
          <ResponsiveDrawer />
          <div className={classes.content}>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + "/"}>
                <Home />
              </Route>
              <Route exact path={process.env.PUBLIC_URL + "/generators/picker"}>
                <RandomPicker />
              </Route> 
              <Route exact path={process.env.PUBLIC_URL + "/generators/picker?"}>
                <RandomPicker />
              </Route> 
            </Switch>
          </div>  
        </header> 
      </div>
    </Router>
  )
}



export default App;
