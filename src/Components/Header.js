import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import Link1 from "./Link1";
import Link2 from "./Link2";

export default function Header() {
  return (
    <Router className="main-wrapper">
      <div className="nav-container">
        <div className="logo">G</div>

        <ul className="nav-links">
          <li>
            <Link className="link-item active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link-item" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="link-item" to="/users">
              Terms of Services
            </Link>
          </li>
          <li>
            <Link className="link-item" to="/users">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link className="link-item" to="/users">
              Trackgram Rules
            </Link>
          </li>
          <li>
            <Link className="link-item" to="/users">
              Vacations
            </Link>
          </li>
          <li>
            <Link className="link-item" to="/users">
              Terms of Services
            </Link>
          </li>
        </ul>
      </div>
      {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <Link1 />
        </Route>
        <Route path="/users">
          <Link2 />
        </Route>
        <Route path="/">
          <Link1 />
        </Route>
      </Switch>
    </Router>
  );
}
