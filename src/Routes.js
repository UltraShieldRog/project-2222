import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import FAQs from "./pages/FAQs";
import About from "./pages/About";

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />   
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/faq" component={FAQs} />
                {/* <Route path="/dashboard" component={Dashboard} isPrivate />
                <Route component={SignIn} /> */}
            </Switch>
        )
    }
}