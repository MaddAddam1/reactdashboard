import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import React, { Component, Fragment }  from 'react';
import ReactDOM from 'react-dom';
import Steps, { Step } from '../../node_modules/rc-steps';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'

function generateSteps() {
    const arr = [];
    // fill the array with the title of the various scripts related to the Test Case
    const titles = ["Login to Epic", "Build a vendor", "Double check your work", "Logout of Epic"];
    for (let i = 0; i < titles.length; i++) {
      arr.push({
        title: `${titles[i]}`,
      });
    }
    return arr;
  }
  const steps = generateSteps();

class ScriptStepsBar extends React.Component {
    state = {
      currentStep: 0,
    };
  
    
    nextStep = () => {
      let s = this.state.currentStep + 1;
      if (s === steps.length) {
        s = 0;
      }
      this.setState({
        currentStep: s,
      });
    }
  
    render() {
      const cs = this.state.currentStep;
      this.stepsRefs = [];
      return (
        <div>
            <Card>
                <CardContent>
                <form className="my-step-form" >
                
                    
                    <div className="my-step-container">
                    <Steps current={cs} size="small">
                        {
                        steps.map((s, i) => {
                            return (
                            <Step ref={c => this.stepsRefs[i] = c}
                                key={i}
                                title={s.title}
                                
                            />
                            );
                        })
                        }
                    </Steps>
                    </div>
        
                    <br/>
                    {/* On click, re-render the content component with the contents of the next step. Also, save progress of the Test Case */}
                    <Button variant="contained" color="primary"  onClick={this.nextStep}>Next</Button>
                </form><br/>
                
                
        
                </CardContent>
            </Card>
        </div>
        
      );
  
      
    }
  }
  

export default ScriptStepsBar;