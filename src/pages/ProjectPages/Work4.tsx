import Layout from "../../components/Layout/Layout";
import ProjectCard from "../../components/Projects/ProjectCard";

export default function Work4() {
  return (
    <Layout>
      <div className="section-container">
        <div className="container">
          <div className="row">
            <ProjectCard
              number="004"
              title="Sasta Aimlabs"
              description="Sasta Aimlabs, a simple 2D version of the popular aim training app, 'Aimlabs,' built using SDL2. This app is designed to help improve your aim with different training modes. It includes features such as Gridshot, Microflicks and Tracking to improve your aiming mechanisms. The user can also manually arrange the sensitivity suited for their best needs."
              techStack="C++, SDL"
              image="/assets/images/work001-01.jpg"
              link="/work4"
            />

            <div className="col-md-8 col-md-offset-2 section-container-spacer text-center">
              <div className="row">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/ypSTLVRqFuQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
