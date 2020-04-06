import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    mainContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(12, 0, 6),
    },
    listStyle: {
        '& li':{
            padding: "10px",
        }
    },
  }));

const routes = [
  {
    path: "/dashboard-spring-basics/lets-build",
    exact: true,
    sidebar: () => <div></div>,
    main: () => 
        <div>
            <h2>Let’s Build a Framework/Library!</h2>
            <p>
            Spring is a powerful lightweight application development framework used for Java Enterprise Edition (JEE). In a way, it is a framework of frameworks because it provides support to various frameworks such as Struts, Hibernate, Tapestry, EJB, JSF etc. 
            The framework in broader sense can be defined as a structure using which you can solve many technical problems. You can say that, the Spring Framework is a comprehensive tool for supporting applications using Java programming language.
            <br></br>
            <br></br>
            Reference: https://www.edureka.co/blog/spring-tutorial/
            </p>
        </div>
  },
  {
    path: "/dashboard-spring-basics/maven",
    sidebar: () => <div></div>,
    main: () => 
        <div>
        <h2>Maven and Your First Project</h2>
        <p>
        Maven handles project builds. Maven can provide a lot of power and sophistication with relative ease if your project follows Maven’s conventions. It is declarative; you describe what you want done, not how you want it done. This approach will seem different if you’ve come from venerable build tools like Make, or Ant.
        <br></br>
        <br></br>
        Reference: https://spring.io/blog/2011/01/17/green-beans-getting-started-with-maven-and-spring/
        </p>
    </div>
  },
  {
    path: "/dashboard-spring-basics/thyemeleaf",
    sidebar: () => <div></div>,
    main: () => 
    <div>
        <h2>Thymeleaf Introduction</h2>
        <p>
        Thymeleaf is a modern server-side Java template engine for both web and standalone environments, capable of processing HTML, XML, JavaScript, CSS and even plain text.
        <br></br>
        <br></br>
        The main goal of Thymeleaf is to provide an elegant and highly-maintainable way of creating templates. To achieve this, it builds on the concept of Natural Templates to inject its logic into template files in a way that doesn’t affect the template from being used as a design prototype. This improves communication of design and bridges the gap between design and development teams.
        <br></br>
        <br></br>
        Thymeleaf has also been designed from the beginning with Web Standards in mind – especially HTML5 – allowing you to create fully validating templates if that is a need for you.
        <br></br>
        <br></br>
        Reference: https://www.thymeleaf.org/doc/tutorials/3.0/usingthymeleaf.html
        </p>
    </div>
  },
  {
    path: "/dashboard-spring-basics/context-and-env",
    sidebar: () => <div></div>,
    main: () => 
    <div>
        <h2>Execution Contexts and Lexical Environments</h2>
        <p>
        As a JavaScript Programmer have you ever wondered how JavaScript engine executes your code when its run inside the browser? And how they keeps track the local scoping using Lexical Environment when they executed?
        <br></br>
        <br></br>
        When your code runs in the JavaScript Engine. Each statement of your code is executed in a certain Execution Context.
        <br></br>
        <br></br>
        Reference: https://hackernoon.com/javascript-execution-context-and-lexical-environment-explained-528351703922
        </p>
    </div>
  },
];

export default function SidebarExample() {
  const classes = useStyles();
  
  return (
    <div>
        <div className={classes.mainContent}>
            <Container maxWidth="sm">
            <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
              Dashboard
            </Typography>
            <Typography variant="h5" align="center" color="secondary" paragraph>
              Spring Basics
            </Typography>
            </Container>
        </div>
        <Router>
        <div style={{ display: "flex" }}>
            <div
            style={{
                padding: "10px",
                width: "20%",
                marginLeft: "5%",
                marginRight: "5%",
                background: "#f0f0f0"
            }}
            >
            <ul className={classes.listStyle} style={{ listStyleType: "none", padding: "10px" }}>
                <li>
                <Link to="/dashboard-spring-basics/lets-build">Let’s Build a Framework/Library!</Link>
                </li>
                <li>
                <Link to="/dashboard-spring-basics/maven">Maven and Your First Project</Link>
                </li>
                <li>
                <Link to="/dashboard-spring-basics/thyemeleaf">Thymeleaf Introduction</Link>
                </li>
                <li>
                <Link to="/dashboard-spring-basics/context-and-env">Execution Contexts and Lexical Environments</Link>
                </li>
            </ul>

            <Switch>
                {routes.map((route, index) => (
                // You can render a <Route> in as many places
                // as you want in your app. It will render along
                // with any other <Route>s that also match the URL.
                // So, a sidebar or breadcrumbs or anything else
                // that requires you to render multiple things
                // in multiple places at the same URL is nothing
                // more than multiple <Route>s.
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.sidebar />}
                />
                ))}
            </Switch>
            </div>

            <div style={{ flex: 1, padding: "10px", marginRight: "10%" }}>
            <Switch>
                {routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}
                />
                ))}
            </Switch>
            </div>
        </div>
        </Router>
    </div>
  );
}
