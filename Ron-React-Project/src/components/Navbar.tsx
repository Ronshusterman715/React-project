import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  decodedToken: any;
  logoutEvent: () => void;
}

const Navbar: FunctionComponent<NavbarProps> = ({
  decodedToken,
  logoutEvent,
}) => {
  const logout = () => {
    logoutEvent();
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark w-100 px-3"
        style={{ backgroundColor: "#1976d2" }}
      >
        <div className="container">
          {/* Brand */}
          <NavLink className="navbar-brand" to="/">
            Business Connect
          </NavLink>

          {/* Hamburger toggle (for mobile) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Content */}
          <div className="collapse navbar-collapse" id="navbarContent">
            {/* Left Links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                >
                  ABOUT
                </NavLink>
              </li>
              {decodedToken ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/favcards"
                      className={({ isActive }) =>
                        "nav-link" + (isActive ? " active" : "")
                      }
                    >
                      Fav Cards
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={logout}
                      to="/login"
                      className={({ isActive }) =>
                        "nav-link" + (isActive ? " active" : "")
                      }
                    >
                      Logout
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/register"
                      className={({ isActive }) =>
                        "nav-link" + (isActive ? " active" : "")
                      }
                    >
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        "nav-link" + (isActive ? " active" : "")
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>

            {/* Search Form */}
            <form className="d-flex me-3">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>

            {/* User Avatar */}
            <div>
              <img
                src="../../public/images/profile-image.png"
                alt="User Avatar"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
