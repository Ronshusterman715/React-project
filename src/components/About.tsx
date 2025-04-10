import { FunctionComponent } from "react";

import AboutUserGuide from "./about/AboutUserGuide";
import AboutTechStack from "./about/AboutTechStack";
import AboutApi from "./about/AboutApi";
import AboutContact from "./about/AboutContact";
import AboutIntro from "./about/AboutIntro";
import AboutFeatures from "./about/AboutFeatures";

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card shadow">
            <div className="card-body p-4 p-md-5">
              <h1 className="text-center mb-4">About Business Connect</h1>

              <AboutIntro />
              <AboutFeatures />
              <AboutUserGuide />
              <AboutTechStack />
              <AboutApi />
              <AboutContact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
