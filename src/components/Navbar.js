import { logo } from "../logo";
import { useState } from "react";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const toggleActive = () => setIsActive(!isActive);

  const toggleOffcanvas = () => {
    return (
      <div className="Offcanvas">
        <ul className="Offcanvas--list">
          <a href="/">
            <li>
              <p className="Nav--item">STUDIOS</p>
            </li>
          </a>
          <a href="/">
            <li>
              <p className="Nav--item">WHO WE SERVE</p>
            </li>
          </a>
          <a href="/">
            <li>
              <p className="Nav--item">START YOUR FREE TRIAL</p>
            </li>
          </a>
          <a href="/">
            <li>
              <p className="Nav--item">LIVE SCHEDULE</p>
            </li>
          </a>
          <a href="/">
            <li>
              <p className="Nav--item">LOGIN</p>
            </li>
          </a>
        </ul>
      </div>
    );
  };
  return (
    <>
      <nav className="Nav">
        <div className="Nav--div">
          <img alt="logo" src={logo} className="Nav--logo" />
          <div className="Nav--container--desktop-menu">
            <a href="/">
              <p className="Nav--item">Studios</p>
            </a>
            <a href="/">
              <p className="Nav--item">Who We Serve</p>
            </a>
            <a href="/">
              <p className="Nav--item">Live Schedule</p>
            </a>
          </div>
          <button className="Nav--container--desktop-login">Login</button>
          <button className="Menu--mobile-toggle" onClick={toggleActive}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        </div>
      </nav>
      {isActive ? toggleOffcanvas() : null}
    </>
  );
}
