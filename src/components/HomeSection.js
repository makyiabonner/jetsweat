export default function HomeSection({ subtitle, details, img, alt, isEven }) {
  return (
    <section className={isEven ? "Home reverse" : "Home"}>
      <div className="Home--section">
        <h3 className="Home--section-subtitle">{subtitle}</h3>
        <p className="Home--section-details">{details}</p>
      </div>
      <img className="Home--section-img" src={img} alt={alt} />
    </section>
  );
}
