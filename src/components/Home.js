import HomeSection from "./HomeSection";

export default function Home() {
  let contents = [
    {
      subtitle:
        "Access the most exclusive boutique fitness & wellness studios.",
      details:
        "Our 30+ studio partners were handpicked for their excellence, proven methodologies, and expert instructors across Yoga, HIIT, Barre, Cardio, Pilates, Dance, Martial Arts, Strength Training & more. With new classes added monthly - never get bored!",
      img: "https://jetsweatfitness.com/static/media/image1.0037c10c.png",
      alt: "Person doing a side plank pose, with the that is up holding a weight",
    },
    {
      subtitle: "Sweat, breathe and recover your way, on your watch.",
      details:
        "Whether you want a daily dose of fitspo, a 10-min core workout w/ dumbbells, or a 1-mo fitness program tailored to your goals – JETSWEAT adapts to your style, tracks your progress, and keeps you motivated and accountable along the way.",
      img: "https://jetsweatfitness.com/static/media/image2.70ac867d.png",
      alt: "Person meditating with Headphones on",
    },
    {
      subtitle: "Stream unlimited video classes & sessions from any device.",
      details:
        "Your all-access JETSWEAT membership lets you stream more than 500 exclusive workout classes on-demand at home or on the go through our mobile app, website, or your TV via Chromecast, Roku, or HDMI.",
      img: "https://jetsweatfitness.com/static/media/image3.1402a5d1.png",
      alt: "Person stretching on the floor while looking at tablet",
    },
  ];

  return (
    <>
      <div className="Home--Outer-div">
        {contents.map((content, index) => {
          return (
            <HomeSection
              id={index}
              isEven={(index + 1) % 2 === 0}
              subtitle={content.subtitle}
              details={content.details}
              img={content.img}
              alt={content.alt}
            />
          );
        })}
      </div>
      <div className="Home--second-section">
        <h1 className="subtitle Home--second-subtitle">
          Do it all for $19.99/mo - just half the cost of a single class or
          session at our studios!
        </h1>
        <button className="Button--primary">Start Your Free Trial</button>
      </div>
    </>
  );
}
