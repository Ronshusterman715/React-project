import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface NotFoundProps {}

const NotFound: FunctionComponent<NotFoundProps> = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 mx-auto text-center">
          <div className="card shadow">
            <div className="card-body p-5">
              <h1 className="display-1 text-danger">404</h1>
              <h2 className="mb-4">Page Not Found</h2>
              <p className="lead mb-4">
                The page you're looking for doesn't exist or has been moved.
              </p>
              <div className="d-flex justify-content-center">
                <Link to="/" className="btn btn-primary me-3">
                  <i className="fas fa-home me-2"></i>
                  Return Home
                </Link>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => window.history.back()}
                >
                  <i className="fas fa-arrow-left me-2"></i>
                  Go Back
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 text-muted">
            <small>
              If you believe this is a mistake, please contact support.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
