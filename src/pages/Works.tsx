import Layout from "../components/Layout/Layout";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ProjectData {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function Works() {
  const [activeSlide, setActiveSlide] = useState(0);

  const projects: ProjectData[][] = [
    [
      {
        id: "001",
        number: "001/006",
        title: "Video Streamer App",
        description:
          "A video streamer in C# using TCP connections for client and server.",
        image: "/assets/images/work01-hover.jpg",
        link: "/work1",
      },
      {
        id: "002",
        number: "002/006",
        title: "Ticket Booking System",
        description:
          "A Ticket Booking System using Typescript, Express, Prisma.",
        image: "/assets/images/work02-hover.jpg",
        link: "/work2",
      },
      {
        id: "003",
        number: "003/006",
        title: "PubSub",
        description:
          "A simple publisher-subcriber model using Typescript, Express.",
        image: "/assets/images/work03-hover.jpg",
        link: "/work3",
      },
    ],
    [
      {
        id: "004",
        number: "004/006",
        title: "Sasta Aimlabs",
        description: "A simple 2D aim trainer created using C++, SDL Library.",
        image: "/assets/images/work02-hover.jpg",
        link: "/work4",
      },
      {
        id: "005",
        number: "005/006",
        title: "Zupee Clone",
        description:
          "A simple 2D clone of Zupee ludo game. Created using Unity, C#.",
        image: "/assets/images/work01-hover.jpg",
        link: "/work5",
      },
      {
        id: "006",
        number: "006/006",
        title: "Tic-Tac-Toe",
        description:
          "A simple console game in Java, utilizes concept of backtracking, bit manipulation.",
        image: "/assets/images/work03-hover.jpg",
        link: "/work6",
      },
    ],
  ];

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <Layout>
      <div className="section-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2 section-container-spacer">
              <div className="text-center">
                <h1 className="h2">02 : Works</h1>
                <p>
                  These are some of my projects :D. More can be found on my
                  Github.
                </p>
              </div>
            </div>

            <div className="col-md-12">
              <div id="myCarousel" className="carousel slide projects-carousel">
                <div className="carousel-inner">
                  {projects.map((slideProjects, slideIndex) => (
                    <div
                      key={slideIndex}
                      className={`item ${
                        slideIndex === activeSlide ? "active" : ""
                      }`}
                    >
                      <div className="row">
                        {slideProjects.map((project) => (
                          <div key={project.id} className="col-sm-4">
                            <Link
                              to={project.link}
                              className="black-image-project-hover"
                            >
                              <img
                                src={project.image}
                                alt={project.title}
                                className="img-responsive"
                              />
                            </Link>
                            <div className="card-container card-container-lg">
                              <h4>{project.number}</h4>
                              <h3>{project.title}</h3>
                              <p>{project.description}</p>
                              <Link
                                to={project.link}
                                className="btn btn-default"
                              >
                                Discover
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  className="left carousel-control"
                  onClick={handlePrevSlide}
                  aria-label="Previous slide"
                >
                  ‹
                </button>
                <button
                  className="right carousel-control"
                  onClick={handleNextSlide}
                  aria-label="Next slide"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
