import React from 'react';
import LeftNav from './LeftNav';
import CentralPanel from './CentralPanel';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    footer: {
        bottom: 0,
        position: 'fixed',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: drawerWidth,
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
});

class Root extends React.Component {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    constructor(props) {
        super(props); this.state = {
            employee: [
                { id: 1, name: "Rohini", contact: 8928593563 },
                { id: 2, name: "Komal", contact: 7845892564 },
                { id: 3, name: "Priyanka", contact: 9653451268 },
                { id: 4, name: "Ankur", contact: 895364256 },
                { id: 5, name: "Dhruvika", contact: 9653451268 },
            ],
            selected_emp: null
        };
        this.onEmpSelection = this.onEmpSelection.bind(this);
    }
    onEmpSelection(empobj) {
        this.setState({ selected_emp: empobj });
    }
    render() {

        const { classes, theme } = this.props;
        const { open } = this.state;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Grid
                            justify="space-between"
                            container
                            spacing={24}
                        >
                            <Grid item>
                                <Typography variant="h6" color="inherit" className={classes.logo}>
                                    |SYNERZIP>>>
                        </Typography>
                            </Grid>
                            <Grid item>
                                <Button color="inherit" className={classes.grow}>Logout</Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />
                    <CentralPanel selected_emp={this.state.selected_emp} />
                    <div className={classNames(classes.footer, classes.appBar, {
                        [classes.appBarShift]: open,
                    })}>
                        <Toolbar>
                            <Typography variant="h6" color="inherit" className={classes.grow}>
                                Synerzip React ver 1.0 © React Inc. 2018 All rights reserved
                </Typography>
                        </Toolbar>
                    </div>
                </main>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <LeftNav employee={this.state.employee}
                        selected_emp={this.state.selected_emp}
                        onEmpSelection={this.onEmpSelection} />
                </Drawer>
            </div>
        );
    }
}

Root.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(Root);
















