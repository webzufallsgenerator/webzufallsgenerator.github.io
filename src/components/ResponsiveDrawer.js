import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse'
import { withRouter } from 'react-router-dom'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  appBar: {
    background: 'rgb(113, 116, 129)',
    zIndex: theme.zIndex.drawer + 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: {
    ...theme.mixins.toolbar,
    zIndex: theme.zIndex.drawer - 1
  },

  drawerPaper: {
    width: drawerWidth,
    
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window, history } = props;
  function handleClick() {
    setOpen(!open)
  }
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const itemsList = [
    {
        text: "Home",
        onClick: () => {
          history.push('/')
          // setOpen(false)
          setMobileOpen(false)
        }
    },
    {
        text: "Generators",
        onClick: () => {
          handleClick()
        },
        secondLayer: [
          {
            text: "Random Picker",
            onClick: () => {
                history.push('/generators/item_picker')
                // setOpen(false)
                setMobileOpen(false)
            }
          },
          {
            text: "Random Groups",
            onClick: () => {
                history.push('/generators/groups')
                // setOpen(false)
                setMobileOpen(false)
            }
          },
          {
            text: "Random Number",
            onClick: () => {
              history.push('/generators/number_picker')
              setMobileOpen(false)
            }
          },
          {
            text: "Throw a Dice",
            onClick: () => {
                history.push('/generators/dice')
                // setOpen(false)
                setMobileOpen(false)
            }
          }
        ]
    },
    {
        text: "Contact us",
        onClick: () => {
            history.push('/contact')
            // setOpen(false)
            setMobileOpen(false)
        }
    }
]
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
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
                    <ListItem button key={itemsList[1].secondLayer[2].text} onClick={itemsList[1].secondLayer[2].onClick}>
                      <ListItemText inset primary={itemsList[1].secondLayer[2].text} />
                    </ListItem>
                    { /* <ListItem button key={itemsList[1].secondLayer[1].text} onClick={itemsList[1].secondLayer[1].onClick}>
                        <ListItemText inset primary={itemsList[1].secondLayer[1].text} />
                    </ListItem>
                    <ListItem button key={itemsList[1].secondLayer[2].text} onClick={itemsList[1].secondLayer[2].onClick}>
                        <ListItemText inset primary={itemsList[1].secondLayer[2].text} />
                    </ListItem> */}
                </List>
            </Collapse>
            { /* <ListItem button key={itemsList[2].text} onClick={itemsList[2].onClick}>
                <ListItemText primary={itemsList[2].text} />
              </ListItem> */}
        </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar  className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap>
            random-now
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default withRouter(ResponsiveDrawer);