import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
// import { NewsItem } from './components/NewsItem';
import { News } from './components/News';
import {
  BrowserRouter as Router,
 Switch,
  Route,
} from "react-router-dom";


export default class App extends Component {
  pageSize=15;
  apiKey=process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div>
        <Router>
          {/* <NewsItem/> */}
          <NavBar />
       

          <Switch>

            <Route exact path="/"><News key="general" pageSize={this.pageSize} apiKey={this.apiKey}    country="in" category="general" /></Route>
            <Route exact path="/business"><News key="business" pageSize={this.pageSize} apiKey={this.apiKey}   country="in" category="business" /></Route>
            <Route exact path="/entertainment"><News key="entertainment" pageSize={this.pageSize} apiKey={this.apiKey}   country="in" category="entertainment" /></Route>
            <Route exact path="/general"><News key="general" pageSize={this.pageSize} apiKey={this.apiKey}   country="in" category="general" /></Route>
            <Route exact path="/health"><News key="health" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="health" /></Route>
            <Route exact path="/science"><News key="science" pageSize={this.pageSize} apiKey={this.apiKey}   country="in" category="science" /></Route>
            <Route exact path="/sports"><News key="sports" pageSize={this.pageSize} apiKey={this.apiKey}  country="in" category="sports" /></Route>
            <Route exact path="/technology"><News key="technology" pageSize={this.pageSize} apiKey={this.apiKey}   country="in" category="technology" /></Route>

          </Switch>
        </Router>
      </div>
    )
  }
}



