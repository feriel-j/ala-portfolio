import React from "react";
import "../_dist/TestimonialsComponent.css";
import TestimonialCard from "./TestimonialCard";
import Divider from "./Divider";
import ArrowDownIcon from "./icons/ArrowDownIcon";
const TestimonialsComponent = () => {
  return (
    <div className="testimonials-container">
      <header>
        <h1>What They’re Saying</h1>
        <h3>(I Swear I Didn’t Bribe Them!)</h3>
      </header>
      <div className="testimonial-content">
        <TestimonialCard icon={<ArrowDownIcon/>}
          title="an absolute marvel when it comes to creating innovative, intuitive and captivating digital experiences for users."
          image={"./images/aymen.svg"}
          writer="Aymen Chatti"
          position="DESIRE Clothing">
          Aladdin’s ability to fuse creativity with functionality results in
          seamless, user-centered designs that are pure genius. Working with him
          is a privilege; he has a unique talent for transforming abstract ideas
          into captivating and intuitive realities. If you're in search of a
          design virtuoso who can elevate your project, look no further than
          Aladdin.
        </TestimonialCard>
        <TestimonialCard
          title="an inspiring journey of creativity, originality, and innovation."
          image={"./images/feriel.svg"}
          writer="Feriel Jabri"
          position="Fullstack JS Developer">
          Aladdin’s commitment to refining every detail based on feedback,
          combined with his insightful artistic expertise, left me truly
          impressed. Aladdin's designs not only captivate visually but also
          function seamlessly, reflecting his deep understanding of users'
          principles. In one sentence: an exceptional professional who merges
          creativity with diligence.
        </TestimonialCard>
      </div>
      <Divider/>
    </div>
  );
};

export default TestimonialsComponent;
