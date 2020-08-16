import React, {Component} from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar'
import  SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/BackDrop'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Messages from './components/messages/Messages'
import PayCheck from './components/paycheck/PayCheck'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect
} from "react-router-dom";


class App extends Component {
  state = {
    sideDrawerOpen: false
  }


  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backdropClickHandller = () => {
    this.setState({sideDrawerOpen: false})
  }


  render(){
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer/>
      backdrop = <Backdrop click={this.backdropClickHandller}/>
    } 
  return (
     <div style={{height: '100%'}}>

    <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
    {sideDrawer}
    {backdrop}
  

    <main style={{marginTop:'64px'}}>
      <Router>
     
       <Switch>
       <Route exact={true} path="/login" component={Login}/>
      <Route exact={true} path="/messages" component={Messages}/>
      <Route exact={true} path="/paycheck" component={PayCheck}/>
      <Route exact={true} path="/" component={Home}/>

      
      </Switch>
      </Router>




    </main>
    </div>
    
      
  );
  }
}

export default App;
