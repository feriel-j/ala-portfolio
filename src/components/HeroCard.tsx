import "../_dist/HeroCard.css";
const HeroCard = () => {

  return (
    <section  className="hero-card">
      <img src="./images/hero.svg" alt="" />

      <div className="titles">
        <h1>Multidisciplinary Artist</h1>
        <h2 className="first-line">
          UI/UX Design, Graphic Design, Digital Art,
        </h2>
        <h2 className="second-line">Arabic Calligraphy, & More</h2>
        <h6>“Our Creations are made with Passion.”</h6>
      </div>
      {/* <img src="./images/hero-card.svg" alt="" /> */}
    </section>
  );
};

export default HeroCard;
