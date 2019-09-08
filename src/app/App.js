import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import HomePage from "../containers/HomePage";
import AboutPage from "../containers/AboutPage";
import ProjectPage from "../containers/ProjectPage";
import NotFoundPage from "../containers/NotFoundPage";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route
        render={({ location }) => (
          <React.Fragment>
            <Header />
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                classNames="transition"
                timeout={300}
                appear
              >
                <Switch location={location}>
                  <Route exact path={"/"} component={HomePage} />
                  <Route path={"/about"} component={AboutPage} />
                  <Route path={"/projects"} component={ProjectPage} />
                  <Route path="/404" component={NotFoundPage} />
                  <Route path="*" component={() => <Redirect to="/404" />} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
            <Footer />
          </React.Fragment>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
