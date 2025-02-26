import "../_dist/IntroComponent.css";

const IntroComponent = () => {
  return (
    <div className="content-container">
      <article className="paragraph-content">
        <p>
          Hi there! I’m <span className="name">ALADDIN</span>, a designer who
          loves blending creativity with purpose. From smooth, user-friendly
          apps to bold, unforgettable brands (sometimes with a touch of Arabic
          calligraphy flair), I create designs that{" "}
          <span className="centred-line">connect and captivate.</span>
        </p>
        <p>Take a scroll through my work—I promise it’s worth it!</p>
      </article>
      <div className="decoration">
      <img src="./images/intro-card.svg" alt="ala" />

<div className="divider"></div>
      </div>
        
    </div>
  );
};

export default IntroComponent;
