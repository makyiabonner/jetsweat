import yoga from "../photos/yoga.jpg";

export default function Banner() {
  return (
    <>
      <div className="Container">
        <img
          className="Container--img"
          src={yoga}
          alt="Woman sitting in meditation with her dog sitting by her waist side"
        />
        <div className="Container--title-div">
          <h1 className="Container--title">STREAM</h1>
        </div>
      </div>
      <section className="Banner">
        <ul className="Banner--list">
          <li className="Banner--list-item">Why join JETSWEAT?</li>
          <li className="Banner--list-item">Why join JETSWEAT?</li>
          <li className="Banner--list-item">Why join JETSWEAT?</li>
          <li className="Banner--list-item">Why join JETSWEAT?</li>
          <li className="Banner--list-item">Why join JETSWEAT?</li>
          <li className="Banner--list-item">Why join JETSWEAT?</li>
          <li className="Banner--list-item">Why join JETSWEAT?</li>
          <li className="Banner--list-item">Why join JETSWEAT?</li>
          <li className="Banner--list-item">Why join JETSWEAT?</li>
          <li className="Banner--list-item">Why join JETSWEAT?</li>
          <li className="Banner--list-item">Why join JETSWEAT?</li>
          <li className="Banner--list-item">Why join JETSWEAT?</li>
        </ul>
      </section>
    </>
  );
}
