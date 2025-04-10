import { FunctionComponent } from "react";

interface AboutFeaturesProps {}

const AboutFeatures: FunctionComponent<AboutFeaturesProps> = () => {
  return (
    <section className="mb-4">
      <h2 className="h3 border-bottom pb-2 mb-3">Our Features</h2>

      <div className="mb-3">
        <h3 className="h5">
          <i className="fas fa-id-card text-primary me-2"></i>
          Business Card Management
        </h3>
        <p>
          Business owners can create detailed digital business cards with
          comprehensive information about their services, including:
        </p>
        <ul className="list-group list-group-flush mb-3">
          <li className="list-group-item bg-transparent">
            Business name and description
          </li>
          <li className="list-group-item bg-transparent">
            Contact information (phone, email, website)
          </li>
          <li className="list-group-item bg-transparent">
            Physical address with integrated Google Maps location
          </li>
          <li className="list-group-item bg-transparent">Business images</li>
        </ul>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center">
              <i className="fas fa-heart text-danger fa-2x mb-3"></i>
              <h4 className="h5 card-title">Favorites System</h4>
              <p className="card-text">
                Save businesses you like to your favorites list for easy access
                later.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center">
              <i className="fas fa-search text-primary fa-2x mb-3"></i>
              <h4 className="h5 card-title">Search Functionality</h4>
              <p className="card-text">
                Easily find businesses by name using our intuitive search
                feature.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center">
              <i className="fas fa-moon text-warning fa-2x mb-3"></i>
              <h4 className="h5 card-title">Dark/Light Mode</h4>
              <p className="card-text">
                Customize your viewing experience with our built-in theme
                switcher.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;
