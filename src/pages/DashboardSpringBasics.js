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
  }));

const routes = [
  {
    path: "/dashboard-js-basics/hello-js",
    exact: true,
    sidebar: () => <div></div>,
    main: () => 
        <div>
            <h2>Hello, JS!</h2>
            <p>JavaScript was initially created to “make web pages alive”.
            <br></br>
            <br></br>
            The programs in this language are called scripts. They can be written right in a web page’s HTML and run automatically as the page loads.
            Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run.
            <br></br>
            <br></br>
            JavaScript was initially created as a browser-only language, but is now used in many other environments as well.
            Today, JavaScript has a unique position as the most widely-adopted browser language with full integration with HTML/CSS.
            There are many languages that get “transpiled” to JavaScript and provide certain features. It is recommended to take a look at them, at least briefly, after mastering JavaScript.
            <br></br>
            <br></br>
            Reference: https://javascript.info/intro
            </p>
        </div>
  },
  {
    path: "/dashboard-js-basics/this-keyword",
    sidebar: () => <div></div>,
    main: () => 
        <div>
        <h2>JavaScript This keyword</h2>
        <p>
        A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.
        <br></br>
        <br></br>
        In most cases, the value of this is determined by how a function is called (runtime binding). 
        <br></br>
        <br></br>
        It can't be set by assignment during execution, and it may be different each time the function is called. 
        ES5 introduced the bind() method to set the value of a function's this regardless of how it's called, and ES2015 introduced arrow functions which don't provide their own this binding (it retains the this value of the enclosing lexical context).
        <br></br>
        <br></br>
        Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
        </p>
    </div>
  },
  {
    path: "/dashboard-js-basics/object-and-functions",
    sidebar: () => <div></div>,
    main: () => <h2>Objects and Functions</h2>
  },
  {
    path: "/dashboard-js-basics/scope-and-variables",
    sidebar: () => <div></div>,
    main: () => <h2>Scopes and Variables</h2>
  },
  {
    path: "/dashboard-js-basics/js-in-browser",
    sidebar: () => <div></div>,
    main: () => <h2>JavaScript in the Browser</h2>
  },
  {
    path: "/dashboard-js-basics/types-and-quality",
    sidebar: () => <div></div>,
    main: () => <h2>Types and Equality</h2>
  },
  {
    path: "/dashboard-js-basics/error-handling-and-regex",
    sidebar: () => <div></div>,
    main: () => <h2>Error Handling and Regular Expressions</h2>
  },
  {
    path: "/dashboard-js-basics/loops-conditions-and-links",
    sidebar: () => <div></div>,
    main: () => <h2>Loops, Conditions and Links</h2>
  },
  {
    path: "/dashboard-js-basics/working-with-forms",
    sidebar: () => <div></div>,
    main: () => <h2>Working with Forms</h2>
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
              JavaScript Basics
            </Typography>
            </Container>
        </div>
        <Router>
        <div style={{ display: "flex" }}>
            <div
            style={{
                padding: "10px",
                width: "40%",
                background: "#f0f0f0"
            }}
            >
            <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
                <Link to="/dashboard-js-basics/hello-js">Hello, JS!</Link>
                </li>
                <li>
                <Link to="/dashboard-js-basics/this-keyword">JavaScript This keyword</Link>
                </li>
                <li>
                <Link to="/dashboard-js-basics/object-and-functions">Object and Functions</Link>
                </li>
                <li>
                <Link to="/dashboard-js-basics/scope-and-variables">Scopes and Variables</Link>
                </li>
                <li>
                <Link to="/dashboard-js-basics/js-in-browser">JavaScript in the Browser</Link>
                </li>
                <li>
                <Link to="/dashboard-js-basics/types-and-quality">Types and Equality</Link>
                </li>
                <li>
                <Link to="/dashboard-js-basics/error-handling-and-regex">Error Handling and Regular Expressions</Link>
                </li>
                <li>
                <Link to="/dashboard-js-basics/loops-conditions-and-links">Loops, Conditions and Links</Link>
                </li>
                <li>
                <Link to="/dashboard-js-basics/working-with-forms">Working with Forms</Link>
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

            <div style={{ flex: 1, padding: "10px" }}>
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
