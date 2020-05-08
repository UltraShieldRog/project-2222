import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import FAQs from "./pages/FAQs";
import About from "./pages/About";
import Forum from "./pages/Forum";
import DashboardJSBasics from "./pages/DashboardJSBasics";
import DashboardJSAdv from "./pages/DashboardJSAdv";
import DashboardSpringBasics from "./pages/DashboardSpringBasics";
import DashboardSpringAdv from "./pages/DashboardSpringAdv";
import AcademicHonesty from "./pages/AcademicHonesty";
import NotFound404 from "./pages/NotFound404";
// import register from './login/register';
import { PrivateRoute } from "./login/PrivateRoute.jsx";
import { isLoggedIn } from './login/auth.js';
import Login from './login/login.jsx';

const home = ()=> <h3>Logged in as {localStorage.getItem("username")}</h3>

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />   
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/faq" component={FAQs} />
                <Route path="/forum" component={Forum} />
                <Route path="/dashboard-js-basics" component={DashboardJSBasics} />
                <Route path="/dashboard-js-adv" component={DashboardJSAdv} />
                <Route path="/dashboard-spring-basics" component={DashboardSpringBasics} />
                <Route path="/dashboard-spring-adv" component={DashboardSpringAdv} />
                <Route path="/academic-honesty" component={AcademicHonesty} />
                <PrivateRoute exact isloggedin={isLoggedIn()} path="/" component={home} />
                <Route exact path="/login" component={Login} />
                <Route path="*" component={NotFound404} />
                {/* <Route path="/register" component={register} /> */}
            </Switch>
        )
    }
}