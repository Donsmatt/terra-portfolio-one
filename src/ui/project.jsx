import "../styles/project.css";

export default function Project() {
  return (
    <div className={"pro-container"}>
      <div className={"pro-content"}>
        <img src="src/assets/waveimg.png" loading="lazy" />
        <div className={"pro-section"}>
          <p className={"pro-p1"}>Wave</p>
          <p className={"pro-p2"}>
            Messaging apps are a huge part of our daily lives-whether it's
            texting friends, coordinating work projects, or staying in touch
            with family. But what separates a good messaging app from a great
            one?
          </p>
          <div className={"pro-butt"}>
            <button>open Github</button>
          </div>
        </div>
      </div>

      <div className={"pro-content"}>
        <img
          src="src/assets/quizzyimg.png"
          style={{ width: "125px", height: "120px" }}
          loading="lazy"
        />
        <div className={"pro-section"}>
          <p className={"pro-p1"}>QuizzyGo</p>
          <p className={"pro-p2"}>
            In a fast-paced digital world, learning should be interactive,
            intuitive, and engaging. Our goal was to design QuizzyGo, a modern
            and user-friendly quiz web app tht allow users to test their
            knwledge in various categories with a smooth, distraction-free
            experience
          </p>
          <div className={"pro-butt"}>
            <button>open Github</button>
          </div>
        </div>
      </div>

      <div className={"pro-content"}>
        <img
          src="src/assets/ounjeimg.png"
          style={{ width: "140px", height: "125px" }}
          loading="lazy"
        />
        <div className={"pro-section"}>
          <p className={"pro-p1"}>Ounje Express</p>
          <p className={"pro-p2"}>
            Food delivery apps have revolutionized the way we order meals,
            providing convienence at our fingertips. However, many users still
            experence frustrations such as high delivery fees, confusing
            navigation, and unreliable order tracking.
          </p>
          <div className={"pro-butt"}>
            <button>open Github</button>
          </div>
        </div>
      </div>
    </div>
  );
}
