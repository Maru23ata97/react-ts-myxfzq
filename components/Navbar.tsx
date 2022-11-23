import * as React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand text-info" href="#">
        FIRIAPU Tau
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a
              className="nav-link active text-info"
              aria-current="page"
              href="#"
            >
              Accueil
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-info" href="#">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-info"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Menu
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item text-info" href="/Portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="dropdown-item text-info" href="/Blog">
                  Blog
                </a>
              </li>
              <li>
                <a className="dropdown-item text-info" href="/Netflix">
                  Netflix
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled text-info">Disabled</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success text-info" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
);

export default Navbar;
