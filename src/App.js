import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Osu from './comnonents/Osu/Osu';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function App() {
  const classes = useStyles();
  return (
    <div className="App">

      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MailOutlineIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Заявка на участие
          </Typography>
        </Toolbar>
      </AppBar>


      <Switch>
        <Route exact path='/' component={Osu} />
      </Switch>
    </div>
  );
}

export default App;
