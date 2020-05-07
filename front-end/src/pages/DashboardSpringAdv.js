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
    path: "/dashboard-spring-adv/spring-boot",
    exact: true,
    sidebar: () => <div></div>,
    main: () => 
        <div>
            <h2>Spring Boot</h2>
            <p>
            Spring Boot is an open source Java-based framework used to create a micro Service. It is developed by Pivotal Team and is used to build stand-alone and production ready spring applications. This chapter will give you an introduction to Spring Boot and familiarizes you with its basic concepts.
            <br></br>
            <br></br>
            Spring Boot provides a good platform for Java developers to develop a stand-alone and production-grade spring application that you can just run. You can get started with minimum configurations without the need for an entire Spring configuration setup.
            <br></br>
            <br></br>
            Reference: https://www.tutorialspoint.com/spring_boot/spring_boot_introduction.htm
            </p>
        </div>
  },
  {
    path: "/dashboard-spring-adv/security",
    sidebar: () => <div></div>,
    main: () => 
        <div>
            <h2>Security</h2>
            <p>
            Spring Security is a powerful and highly customizable authentication and access-control framework. It is the de-facto standard for securing Spring-based applications.
            <br></br>
            <br></br>
            Spring Security is a framework that focuses on providing both authentication and authorization to Java applications. Like all Spring projects, the real power of Spring Security is found in how easily it can be extended to meet custom requirements\
            <br></br>
            <br></br>
            Reference: https://spring.io/projects/spring-security
            </p>
        </div>
  },
  {
    path: "/dashboard-spring-adv/spring-mvc",
    sidebar: () => <div></div>,
    main: () => 
        <div>
            <h2>Web Development with Spring MVC</h2>
            <p>
            The Spring framework is an eco-system of discrete modules, libraries, and frameworks that provide diverse utility leveraging enterprise application development, Web services, data persistence, OSGi to the .NET framework, and many more. 
            <br></br>
            <br></br>
            Web MVC is a significant module from the Spring framework foundry that primarily targets in leveraging servlet and portlet environment of a Web application. Though it works in the view layer of the J2EE spectrum, within the view layer it expands itself in a MVC pattern. The article explores some of its key aspects that help to build loosely coupled Web applications on the Spring IoC container.
            <br></br>
            <br></br>
            Reference: https://www.developer.com/java/data/exploring-the-spring-web-mvc-for-web-application-development.html
            </p>
        </div>
  },
  {
    path: "/dashboard-spring-adv/framework-configuration",
    sidebar: () => <div></div>,
    main: () => 
        <div>
            <h2>Spring Framework Configuration</h2>
            <p>
            Spring @Configuration annotation is part of the spring core framework. Spring Configuration annotation indicates that the class has @Bean definition methods. So Spring container can process the class and generate Spring Beans to be used in the application.
            <br></br>
            <br></br>
            Reference: https://www.journaldev.com/21033/spring-configuration-annotation
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
              Spring Advanced
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
                <Link to="/dashboard-spring-adv/spring-boot">Spring Boot</Link>
                </li>
                <li>
                <Link to="/dashboard-spring-adv/security">Security</Link>
                </li>
                <li>
                <Link to="/dashboard-spring-adv/spring-mvc">Web Development with Spring MVC</Link>
                </li>
                <li>
                <Link to="/dashboard-spring-adv/framework-configuration">Spring Framework Configuration</Link>
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
