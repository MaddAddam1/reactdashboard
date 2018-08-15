import React, { Component, Fragment }  from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'

import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ScriptStepsBar from './ScriptStepsBar'
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import { CardMDB, ButtonMDB, CardHeader, CardFooterMDB, CardBody,
    CardTitle, CardTextMDB } from './../../node_modules/mdbreact';



const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
  });

  const buttonPass = createMuiTheme({
    palette: {
      primary: green,
    },
    
  });

  const buttonFail = createMuiTheme({
    palette: {
      primary: red,
    },
    padding: '6px 12px',
  });




class ScriptContent extends Component {
    
    
    state = {};

    handlePass() {
        
    }

    render() {
        return (
        <Card >
         
                <CardContent>
           
                <CardTitle> Script Steps </CardTitle>
                   
                        
                        <Typography color="textTertiary">
                            Script author: <br/>
                            Last run by: <br/>
                            Last modified by: <br/>
                        </Typography><br/>
                   
                
                    <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                    chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                    salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                    minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                </CardContent>

                <CardActions>

                   <MuiThemeProvider theme={buttonFail}>
                        <Button variant="contained" color="primary" >
                        Fail
                        </Button>
                    </MuiThemeProvider>

                    <MuiThemeProvider theme={buttonPass}>
                        <Button variant="contained" color="primary" >
                        Pass
                        </Button>
                    </MuiThemeProvider>
             

                </CardActions>
              
        </Card>


        );
    


    }



}

  
  export default withStyles(styles)(ScriptContent);