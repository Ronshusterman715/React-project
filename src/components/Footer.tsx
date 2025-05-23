import { FunctionComponent } from "react";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null;
  return (
    <>
      <footer className="bg-dark text-light py-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>About Us</h5>
              <p>
                Your company description goes here. Explain what you do and what
                makes you unique.
              </p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="text-light">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-light">
                    About
                  </a>
                </li>
                {user && (
                  <>
                    <li>
                      <a href="/favcards" className="text-light">
                        Fav Cards
                      </a>
                    </li>
                    <li>
                      <a
                        href={`/users/${user._id}/edit`}
                        className="text-light"
                      >
                        Account Details
                      </a>
                    </li>
                  </>
                )}
                {user && (user.isBusiness || user.isAdmin) && (
                  <>
                    <li>
                      <a href="/cards/create" className="text-light">
                        Create Card
                      </a>
                    </li>
                    <li>
                      <a href="/mycards" className="text-light">
                        My Cards
                      </a>
                    </li>
                  </>
                )}
                {!user && (
                  <>
                    <li>
                      <a href="/login" className="text-light">
                        Login
                      </a>
                    </li>
                    <li>
                      <a href="/register" className="text-light">
                        Register
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>
                  <i className="fas fa-phone me-2"></i> +1 123 456 7890
                </li>
                <li>
                  <i className="fas fa-envelope me-2"></i> info@example.com
                </li>
              </ul>
            </div>
          </div>
          <hr className="border-light" />
          <div className="row">
            <div className="col-md-6">
              <p>
                &copy; {new Date().getFullYear()} Business Connect. All rights
                reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <a href="#" className="text-light me-3">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
