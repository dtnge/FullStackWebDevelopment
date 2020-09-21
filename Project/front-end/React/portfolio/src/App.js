import React, { Fragment } from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Home from './components/index';
import Resume from './components/Resume';
import CssBaseline from '@material-ui/core/CssBaseline';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Fragment>
      <CssBaseline />
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />

   </Fragment>
  );
}

export default App;

//Css-base line is to remove the padding or gaps in responsive mode
// place Home in a hierarchical position