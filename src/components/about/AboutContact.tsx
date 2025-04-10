import { FunctionComponent } from "react";

interface AboutContactProps {}

const AboutContact: FunctionComponent<AboutContactProps> = () => {
  return (
    <section>
      <h2 className="h3 border-bottom pb-2 mb-3">Contact Us</h2>
      <div className="d-flex align-items-center mb-3">
        <div className="bg-primary rounded-circle p-3 me-3">
          <i className="fas fa-envelope text-white"></i>
        </div>
        <div>
          <h5 className="mb-0">Email Support</h5>
          <p className="mb-0">
            <a
              href="mailto:support@businessconnect.com"
              className="text-decoration-none"
            >
              support@businessconnect.com
            </a>
          </p>
        </div>
      </div>

      <div className="d-flex align-items-center">
        <div className="bg-success rounded-circle p-3 me-3">
          <i className="fas fa-phone text-white"></i>
        </div>
        <div>
          <h5 className="mb-0">Phone Support</h5>
          <p className="mb-0">+1 (123) 456-7890</p>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
