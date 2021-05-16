import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { BrowserRouter as Router, withRouter } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ClippedDrawer(props) {
    const [open, setOpen] = React.useState(false)

    function handleClick() {
      setOpen(!open)
    }
    const { history } = props
    const classes = useStyles();
    const itemsList = [
        {
            text: "Home",
            onClick: () => (
              history.push('/')
              )
        },
        {
            text: "Generators",
            onClick: () => (
              handleClick()
            ),
            secondLayer: [
              {
                text: "Random Picker",
                onClick: () => history.push('/generators/picker')
              },
              {
                text: "Random Groups",
                onClick: () => history.push('/generators/groups')
              },
              {
                text: "Throw a Dice",
                onClick: () => history.push('/generators/dice')
              }
            ]
        },
        {
            text: "Contact us",
            onClick: () => history.push('/contact')
        }
    ]

  return (
    <Router>
    <div className={classes.root}>
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
            paper: classes.drawerPaper,
            }}
        >
            <Toolbar />
            <div className={classes.drawerContainer}>
                <List>
                  <ListItem button key={itemsList[0].text} onClick={itemsList[0].onClick}>
                    <ListItemText primary={itemsList[0].text} />
                  </ListItem>
                  <ListItem button key={itemsList[1].text} onClick={itemsList[1].onClick}>
                    <ListItemText primary={itemsList[1].text} />
                  </ListItem>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem button key={itemsList[1].secondLayer[0].text} onClick={itemsList[1].secondLayer[0].onClick}>
                          <ListItemText inset primary={itemsList[1].secondLayer[0].text} />
                        </ListItem>
                        <ListItem button key={itemsList[1].secondLayer[1].text} onClick={itemsList[1].secondLayer[1].onClick}>
                          <ListItemText inset primary={itemsList[1].secondLayer[1].text} />
                        </ListItem>
                        <ListItem button key={itemsList[1].secondLayer[2].text} onClick={itemsList[1].secondLayer[2].onClick}>
                          <ListItemText inset primary={itemsList[1].secondLayer[2].text} />
                        </ListItem>
                      </List>
                  </Collapse>
                  <ListItem button key={itemsList[2].text} onClick={itemsList[2].onClick}>
                    <ListItemText primary={itemsList[2].text} />
                  </ListItem> 
                </List>
            </div>
        </Drawer>
    </div>
    </Router>
  );
}

export default withRouter(ClippedDrawer)
