import video from "../landing_section.mp4";

export default function Main() {
  return (
    <>
      <section className="Hero">
        <video
          className="Hero--video"
          preload="auto"
          loop
          playsInline
          webkit-playsinline="true"
          autoPlay
          muted
        >
          <source src={video} type="video/mp4" />
        </video>
        <h1 className="Hero--text">
          The best boutique fitness classes in the world,
        </h1>
        <div className="Hero--transition"></div>
      </section>
      <div className="Main">
        <div className="Main--description">
          <p className="Main--description-text">
            Whether you're at home or on-the-go —crush your mind AND body goals
            with hundreds of on-demand classes & sessions from top boutique
            fitness + wellness studios in every category.
          </p>
          <button className="Button--primary">Start Your Free Trial</button>
        </div>
        <img
          alt="desktop browser studios tab woman is working out"
          className="Main--img"
          src="https://jetsweatfitness.com/static/media/devices.c8ba7ea1.png"
        />
      </div>
    </>
  );
}
