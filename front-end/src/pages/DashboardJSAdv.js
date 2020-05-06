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
    path: "/dashboard-js-adv/asynchronous-programming",
    exact: true,
    sidebar: () => <div></div>,
    main: () => 
        <div>
            <h2>Asynchronous Programming</h2>
            <p>
            The central part of a computer, the part that carries out the individual steps that make up our programs, is called the processor. The programs we have seen so far are things that will keep the processor busy until they have finished their work. The speed at which something like a loop that manipulates numbers can be executed depends pretty much entirely on the speed of the processor.
            <br></br>
            <br></br>
            But many programs interact with things outside of the processor. For example, they may communicate over a computer network or request data from the hard disk—which is a lot slower than getting it from memory.
            <br></br>
            <br></br>
            When such a thing is happening, it would be a shame to let the processor sit idle—there might be some other work it could do in the meantime. In part, this is handled by your operating system, which will switch the processor between multiple running programs. But that doesn’t help when we want a single program to be able to make progress while it is waiting for a network request.
            <br></br>
            <br></br>
            Reference: https://eloquentjavascript.net/11_async.html
            </p>
        </div>
  },
  {
    path: "/dashboard-js-adv/building-pages",
    sidebar: () => <div></div>,
    main: () => 
        <div>
            <h2>Building Pages</h2>
            <p>
            Front-end frameworks are great. They abstract away much of the complexity of building a single-page application (SPA) and help you organize your code in an intelligible manner as your project grows.
            <br></br>
            <br></br>
            However, there’s a flip side: these frameworks come with a degree overhead and can introduce complexity of their own.
            <br></br>
            <br></br>
            That’s why, in this tutorial, we’re going to learn how to build an SPA from scratch, without using a client-side JavaScript framework. This will help you evaluate what these frameworks actually do for you and at what point it makes sense to use one. It will also give you an understanding of the pieces that make up a typical SPA and how they’re wired together.
            <br></br>
            <br></br>
            Reference: https://www.sitepoint.com/single-page-app-without-framework/
            </p>
        </div>
  },
  {
    path: "/dashboard-js-adv/dom",
    sidebar: () => <div></div>,
    main: () => 
        <div>
            <h2>DOM Manipulation and Events</h2>
            <p>
            Every web page resides inside a browser window which can be considered as an object.
            <br></br>
            <br></br>
            A Document object represents the HTML document that is displayed in that window. The Document object has various properties that refer to other objects which allow access to and modification of document content.
            <br></br>
            <br></br>
            The way a document content is accessed and modified is called the Document Object Model, or DOM. The Objects are organized in a hierarchy. This hierarchical structure applies to the organization of objects in a Web document.
            <br></br>
            <br></br>
            Reference: https://www.tutorialspoint.com/javascript/javascript_html_dom.htm
            </p>
        </div>
  },
  {
    path: "/dashboard-js-adv/junit",
    sidebar: () => <div></div>,
    main: () => 
        <div>
            <h2>Junit</h2>
            <p>
            A simple promise based function for unit tests. I believe we shouldn't waste time on learning, debugging and waiting the unit test framework itself, that's why I created JUnit. It's just a curried function, everything inside is controllable, nothing will be fancy.
            <br></br>
            <br></br>
            Reference: https://www.npmjs.com/package/junit
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
              JavaScript Advanced
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
                <Link to="/dashboard-js-adv/asynchronous-programming">Asynchronous Programming</Link>
                </li>
                <li>
                <Link to="/dashboard-js-adv/building-pages">Building Pages</Link>
                </li>
                <li>
                <Link to="/dashboard-js-adv/dom">DOM Manipulation and Events</Link>
                </li>
                <li>
                <Link to="/dashboard-js-adv/junit">Junit</Link>
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
