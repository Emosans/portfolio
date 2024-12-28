import Layout from "../../components/Layout/Layout";
import ProjectCard from "../../components/Projects/ProjectCard";

export default function Work1() {
  return (
    <Layout>
      <div className="section-container">
        <div className="container">
          <div className="row">
            <ProjectCard
              number="001"
              title="Video Streamer App"
              description="This is a simple video streamer project in C# that utilizes TCP connections for communication. The server captures image frames from a camera and sends them to the client, where the video is displayed in a window. The project uses OpenCV Sharp, with future plans to enable port forwarding for transmission across networks."
              techStack="C#, TCP listeners, OpenCV Sharp"
              image="/assets/images/work001-01.jpg"
              link="/work1"
            />

            <div className="col-md-8 col-md-offset-2 section-container-spacer text-center">
              <div className="row">
                <div className="col-xs-12 col-md-6">
                  <img
                    src="/assets/images/video.png"
                    className="img-responsive"
                    alt="Features"
                  />
                  <p>Features</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
