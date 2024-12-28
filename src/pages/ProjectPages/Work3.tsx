import Layout from "../../components/Layout/Layout";
import ProjectCard from "../../components/Projects/ProjectCard";

export default function Work3() {
  return (
    <Layout>
      <div className="section-container">
        <div className="container">
          <div className="row">
            <ProjectCard
              number="003"
              title="PubSub"
              description="This is a simple publisher-subscriber model in Typescript. It allows users to subscribe to a particular topic and recieve news on that topic. The user can pose as a subscriber or publisher. The publisher can publish message on the news topic and the message is broadcasted to all the subscribers."
              techStack="NodeJs, Typescript, Express"
              image="/assets/images/work001-01.jpg"
              link="/work3"
            />

            <div className="col-md-8 col-md-offset-2 section-container-spacer text-center">
              <div className="row">
                <div className="col-xs-12 col-md-6">
                  <img
                    src="/assets/images/pubsub.png"
                    className="img-responsive"
                    alt="Pub Sub Logic"
                  />
                  <p>Pub Sub Logic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
