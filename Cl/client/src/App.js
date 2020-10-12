import React, { Component } from 'react';
//import { withRouter } from 'react-router'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { loadProgressBar } from "axios-progress-bar";
import "axios-progress-bar/dist/nprogress.css";

import Home from './components/Home';
import BookDetails from './components/BookDetails';
import Documentation from './components/Documentation';
import Navbar from './components/layouts/Navbar';

loadProgressBar();


export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/:bookId" exact component={BookDetails} />
                    <Route path="/documentation" exact component={Documentation} />
                </Switch>
            </BrowserRouter>
        )
    }
}
