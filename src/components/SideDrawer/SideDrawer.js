import React from 'react';
import './SideDrawer.css'
import {BrowserRouter as Router, Link, Switch, withRouter} from 'react-router-dom'

const SideDrawer =  props => (
  <nav className='side-drawer'>
    <ul>

      <Link to='/login'>
      <li>Login</li>
      </Link>
      <Link to='/messeges'>
      <li>Messages</li>
      </Link>
      <Link to='/paycheck'>
      <li>View paycheck</li>
      </Link>


    </ul>

    
  </nav>
)

export default SideDrawer;
