import { BrowserRouter as Router, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Footer from "./components/Footer";
//import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Category from "./pages/Category";
import Country from "./pages/Country";
import Home from "./pages/Home";
import Search from "./pages/Search";
import "./styles/styles.css";

const routes = [
  { path: "/", name: "Home", Component: Home, routes: [] },
  { path: "/about", name: "About", Component: About },
  { path: "/country/:country", name: "Country", Component: Country },
  { path: "/category/:category/:page", name: "Category", Component: Category },
  { path: "/search/:country", name: "Search", Component: Search },
];

export default function Routes() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
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
  );
}
