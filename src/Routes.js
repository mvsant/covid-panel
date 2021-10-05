import {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import Loading from "./components/Loading";

import "./styles/styles.css";

const Footer = lazy(() => import("./components/Footer"));
const Navbar = lazy(() => import("./components/Navbar"));
const About = lazy(() => import("./pages/About"));
const Category = lazy(() => import("./pages/Category"));
const Country = lazy(() => import("./pages/Country"));
const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));

const routes = [
  {path: "/", name: "Home", Component: Home, routes: []},
  {path: "/about", name: "About", Component: About},
  {path: "/country/:country", name: "Country", Component: Country},
  {path: "/category/:category/:page", name: "Category", Component: Category},
  {path: "/search/:country", name: "Search", Component: Search},
];

export default function Routes() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Navbar />
        <div className="container">
          {routes.map(({path, Component}) => (
            <Route key={path} exact path={path}>
              {({match}) => (
                <CSSTransition
                  in={match != null}
                  timeout={1500}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </div>
        <Footer />
      </Router>
    </Suspense>
  );
}
