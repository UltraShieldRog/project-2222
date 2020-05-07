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
    main: () => 
    <div>
    <h2>Objects and Functions</h2>
    <p>
    In JavaScript, functions are objects. You can work with functions as if they were objects. For example, you can assign functions to variables, to array elements, and to other objects. 
    <br></br>
    <br></br>
    They can also be passed around as arguments to other functions or be returned from those functions.
    <br></br>
    <br></br>
    Reference: https://www.dofactory.com/tutorial/javascript-function-objects
    </p>
    </div>
  },
  {
    path: "/dashboard-js-basics/scope-and-variables",
    sidebar: () => <div></div>,
    main: () => 
    <div>
    <h2>Scopes and Variables</h2>
    <p>
    Variables are a fundamental part of many programming languages, and are among the first and most important concepts for novice coders to learn. 
    <br></br>
    <br></br>
    There are a number of different properties of variables in JavaScript, as well as several rules which must be followed when naming them. 
    In JavaScript, there are three keywords used to declare a variable — var, let, and const — and each one affects how the code will interpret the variable differently.
    <br></br>
    <br></br>
    Reference: https://www.digitalocean.com/community/tutorials/understanding-variables-scope-hoisting-in-javascript
    </p>
    </div>
  },
  {
    path: "/dashboard-js-basics/js-in-browser",
    sidebar: () => <div></div>,
    main: () => 
    <div>
    <h2>JavaScript in the Browser</h2>
    <p>
    Nowadays almost all web pages contain JavaScript, a scripting programming language that runs on visitor's web browser. 
    It makes web pages functional for specific purposes and if disabled for some reason, the content or the functionality of the web page can be limited or unavailable. 
    <br></br>
    <br></br>
    Here you can find instructions on how to enable (activate) JavaScript in five most commonly used browsers.
    <br></br>
    <br></br>
    Reference: https://www.enable-javascript.com/
    </p>
    </div>
  },
  {
    path: "/dashboard-js-basics/types-and-quality",
    sidebar: () => <div></div>,
    main: () => 
    <div>
    <h2>Types and Equality</h2>
    <p>
    Programming languages all have built-in data structures, but these often differ from one language to another. 
    This article attempts to list the built-in data structures available in JavaScript and what properties they have; these can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
    <br></br>
    <br></br>
    Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
    </p>
    </div>
  },
  {
    path: "/dashboard-js-basics/error-handling-and-regex",
    sidebar: () => <div></div>,
    main: () => 
    <div>
    <h2>Error Handling and Regular Expressions</h2>
    <p>
    At first sight we fear Errors, because they often include being hurt or feeling humiliated in public. By doing Errors, we actually learn how not to do something and how to do it better next time.
    <br></br>
    <br></br>
    This obviously is about learning from Errors (mistakes) in real life. Errors in programming are a bit different. They provide us with nice features to improve our code and tell the user when something is wrong (and maybe also to educate them on how to fix it).
    <br></br>
    <br></br>
    Reference: https://levelup.gitconnected.com/the-definite-guide-to-handling-errors-gracefully-in-javascript-58424d9c60e6
    </p>
    </div>
  },
  {
    path: "/dashboard-js-basics/loops-conditions-and-links",
    sidebar: () => <div></div>,
    main: () => 
    <div>
    <h2>Loops, Conditions and Links</h2>
    <p>
    Loops offer a quick and easy way to do something repeatedly. 
    <br></br>
    <br></br>
    There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times. (Note that it's possible that number could be zero!)
    The various loop mechanisms offer different ways to determine the start and end points of the loop. There are various situations that are more easily served by one type of loop over the others.
    <br></br>
    <br></br>
    Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
    </p>
    </div>
  },
  {
    path: "/dashboard-js-basics/working-with-forms",
    sidebar: () => <div></div>,
    main: () => 
    <div>
    <h2>Working with Forms</h2>
    <p>
    Forms were introduced briefly in the previous chapter as a way to submit information provided by the user over HTTP. They were designed for a pre-JavaScript Web, assuming that interaction with the server always happens by navigating to a new page.
    <br></br>
    <br></br>
    But their elements are part of the DOM like the rest of the page, and the DOM elements that represent form fields support a number of properties and events that are not present on other elements. 
    These make it possible to inspect and control such input fields with JavaScript programs and do things such as adding functionality to a traditional form or using forms and fields as building blocks in a JavaScript application.
    <br></br>
    <br></br>
    Reference: https://eloquentjavascript.net/2nd_edition/18_forms.html
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
              JavaScript Basics
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
