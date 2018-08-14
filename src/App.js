import React, { Component } from 'react';
import './App.css';

import Users from './Users/Users'
import List from './Users/List'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


class App extends Component {

  state = {
    users:[
      {name: 'Justin Davis'},
      {name: 'Caleb Bass'},
      {name: 'Chris Moss'}

    ]
  }

switchUser = () => {
  // alert('You clicked me!');
  this.setState({
    users:[
      {name: 'Justina'},
      {name: 'Jimbo'},
      {name: 'Billy'}

    ]
  });
}

nameChanger = (event) => {
  this.setState({
    users:[
      {name: event.target.value},
      {name: 'Jimbo'},
      {name: 'Billy'}

    ]
  });

}

  render() {

    return (
      <div className="container">
        <Grid container direction="row" justify="center" alignItems="center">
      
                  <Grid item xs>
                    <Paper>
                      <Users 
                      name={this.state.users[0].name}
                      click={this.switchUser}
                      changed={this.nameChanger}
                      />
                    </Paper>
                  </Grid>
                  
                  <Grid item xs>
                    <Paper>
                      <Users 
                      name={this.state.users[1].name}/>
                    </Paper>
                  
                  </Grid>
                  <Grid item xs>
                    <Paper>
                      <Users 
                        name={this.state.users[2].name}/>
                    </Paper>
                  </Grid>

                  <Grid item xs>
                    <Paper>
                      <Users 
                        name={this.state.users[2].name}/>
                    </Paper>
                  </Grid>

                  <Grid item xs>
                    
                      <Button  variant="contained" color="primary" onClick={() => this.switchUser()}>Click me</Button>
                    
                  </Grid>
                                    
        </Grid>              
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React app!!!'));
  }
}

export default withStyles(styles)(App);
