import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav
      className={`navbar navbar-fixed-top ${
        isHome ? "navbar-inverse" : "navbar-default"
      }`}
    >
      <div className="container">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar-collapse"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">01 : Home</Link>
            </li>
            <li>
              <Link to="/works">02 : Works</Link>
            </li>
            <li>
              <Link to="/about">03 : About me</Link>
            </li>
            <li>
              <Link to="/contact">04 : Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
