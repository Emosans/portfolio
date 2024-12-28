import Layout from "../components/Layout/Layout";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { useEffect } from "react";

export default function Home() {
  // Initialize typing effect
  useTypingEffect("typed", [
    "I'm Shreyas Dhamankar",
    "A Software & Gaming Enthusiast",
    "",
  ]);

  // Background image movement effect
  useEffect(() => {
    const movingBackgroundImage = () => {
      const pageX = window.innerWidth;
      const pageY = window.innerHeight;

      document.addEventListener("mousemove", (event) => {
        if (event instanceof MouseEvent) {
          const mouseX = event.pageX;
          const mouseY = event.pageY;

          const traX = ((4 * mouseX) / pageX) * 10 - 5;
          const traY = ((4 * mouseY) / pageY) * 10 - 5;

          const container = document.querySelector(
            ".background-image-container"
          ) as HTMLElement;
          if (container) {
            container.style.backgroundPosition = `${traX}% ${traY}%`;
          }
        }
      });
    };

    movingBackgroundImage();
  }, []);

  return (
    <Layout>
      <div
        className="hero-full-container background-image-container white-text-container"
        style={{ backgroundImage: "url('/assets/images/space.jpg')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="hero-full-wrapper">
                <div className="text-content">
                  <h1>
                    Hello,
                    <br />
                    <span id="typed-strings" style={{ display: "none" }}>
                      <span>I'm Shreyas Dhamankar</span>
                      <span>A Software & Gaming Enthusiast</span>
                      <span></span>
                    </span>
                    <span id="typed"></span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
