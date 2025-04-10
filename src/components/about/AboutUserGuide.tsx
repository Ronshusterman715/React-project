import { FunctionComponent } from "react";

interface AboutUserGuideProps {}

const AboutUserGuide: FunctionComponent<AboutUserGuideProps> = () => {
  return (
    <section className="mb-4">
      <h2 className="h3 border-bottom pb-2 mb-3">
        How to Use Business Connect
      </h2>

      <div className="accordion" id="userGuideAccordion">
        <div className="accordion-item border mb-3">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <i className="fas fa-user me-2"></i> For Visitors
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#userGuideAccordion"
          >
            <div className="accordion-body">
              <ol className="list-group list-group-numbered">
                <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Browse Business Cards</div>
                    View all available business cards on the home page
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Search</div>
                    Use the search bar in the navigation to find specific
                    businesses
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Register</div>
                    Create an account to access additional features
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="accordion-item border mb-3">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <i className="fas fa-user-check me-2"></i> For Registered Users
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#userGuideAccordion"
          >
            <div className="accordion-body">
              <ol className="list-group list-group-numbered">
                <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Save Favorites</div>
                    Click the heart icon on any business card to save it to your
                    favorites
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">View Business Details</div>
                    Click on any business card to view full details, including
                    location map
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Contact Businesses</div>
                    Easily call or email businesses directly from their cards
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Manage Account</div>
                    Update your personal information through the account
                    settings
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="accordion-item border">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <i className="fas fa-briefcase me-2"></i> For Business Owners
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#userGuideAccordion"
          >
            <div className="accordion-body">
              <ol className="list-group list-group-numbered">
                <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Create Business Cards</div>
                    Create detailed digital business cards by filling out our
                    comprehensive form
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Manage Your Cards</div>
                    Edit or delete your business cards as needed
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">View My Cards</div>
                    Access all your created business cards in one convenient
                    location
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUserGuide;
