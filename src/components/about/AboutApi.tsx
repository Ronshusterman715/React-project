import { FunctionComponent } from "react";

interface AboutApiProps {}

const AboutApi: FunctionComponent<AboutApiProps> = () => {
  return (
    <section className="mb-4">
      <h2 className="h3 border-bottom pb-2 mb-3">API Integration</h2>
      <div className="alert alert-info">
        <h4 className="alert-heading">
          <i className="fas fa-server me-2"></i>Backend API Integration
        </h4>
        <p>
          Business Connect connects to an existing RESTful API that handles all
          data operations. Our application interfaces with this backend service
          to manage authentication, retrieve and store business card data, and
          handle user information.
        </p>
        <hr />
        <p className="mb-0">
          We also integrate with the Google Maps API to provide accurate
          location visualization for each business address entered by users.
        </p>
      </div>
    </section>
  );
};

export default AboutApi;
