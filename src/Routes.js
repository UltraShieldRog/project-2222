import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import FAQs from "./pages/FAQs";
import About from "./pages/About";
import NotFound404 from "./pages/NotFound404";

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />   
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/faq" component={FAQs} />
                <Route path="*" component={NotFound404} />
            </Switch>
        )
    }
}