import yoga from "../photos/yoga.jpg";

export default function Banner() {
  return (
    <>
      <div className="Container">
        <img className="Container--img" src={yoga} />
        <div className="Container--title-div">
          <h1 className="Container--title">STREAM</h1>
        </div>
      </div>
      <marquee className="Banner">
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
      </marquee>
    </>
  );
}
