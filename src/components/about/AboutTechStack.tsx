import { FunctionComponent } from "react";

interface AboutTechStackProps {}

const AboutTechStack: FunctionComponent<AboutTechStackProps> = () => {
  return (
    <section className="mb-4">
      <h2 className="h3 border-bottom pb-2 mb-3">Technology Stack</h2>
      <div className="row text-center">
        <div className="col-md-3 col-6 mb-4">
          <div className="p-3 border rounded shadow-sm h-100">
            <i className="fab fa-react fa-2x text-info mb-2"></i>
            <h5 className="mb-0">React</h5>
            <small className="text-muted">Frontend</small>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-4">
          <div className="p-3 border rounded shadow-sm h-100">
            <i className="fab fa-js fa-2x text-warning mb-2"></i>
            <h5 className="mb-0">TypeScript</h5>
            <small className="text-muted">Type Safety</small>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-4">
          <div className="p-3 border rounded shadow-sm h-100">
            <i className="fas fa-check-circle fa-2x text-success mb-2"></i>
            <h5 className="mb-0">Formik & Yup</h5>
            <small className="text-muted">Form Validation</small>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-4">
          <div className="p-3 border rounded shadow-sm h-100">
            <i className="fas fa-route fa-2x text-danger mb-2"></i>
            <h5 className="mb-0">React Router</h5>
            <small className="text-muted">Navigation</small>
          </div>
        </div>
        <div className="col-md-4 col-6 mb-4">
          <div className="p-3 border rounded shadow-sm h-100">
            <i className="fas fa-map-marker-alt fa-2x text-primary mb-2"></i>
            <h5 className="mb-0">Google Maps</h5>
            <small className="text-muted">Location Services</small>
          </div>
        </div>
        <div className="col-md-4 col-6 mb-4">
          <div className="p-3 border rounded shadow-sm h-100">
            <i className="fas fa-server fa-2x text-secondary mb-2"></i>
            <h5 className="mb-0">Axios</h5>
            <small className="text-muted">API Requests</small>
          </div>
        </div>
        <div className="col-md-4 col-6 mb-4">
          <div className="p-3 border rounded shadow-sm h-100">
            <i className="fas fa-moon fa-2x text-warning mb-2"></i>
            <h5 className="mb-0">Context API</h5>
            <small className="text-muted">Theme Management</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTechStack;
