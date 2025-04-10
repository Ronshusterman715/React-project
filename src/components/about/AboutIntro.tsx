import { FunctionComponent } from "react";

interface AboutIntroProps {}

const AboutIntro: FunctionComponent<AboutIntroProps> = () => {
  return (
    <section className="mb-4">
      <h2 className="h3 border-bottom pb-2 mb-3">What is Business Connect?</h2>
      <p className="lead">
        Business Connect is a platform designed to connect businesses with
        potential customers. It allows business owners to create and manage
        digital business cards, making their services easily discoverable to
        users browsing the platform.
      </p>
      <p>
        Whether you're looking to promote your business or find services in your
        area, Business Connect serves as the bridge between businesses and
        customers.
      </p>
    </section>
  );
};

export default AboutIntro;
