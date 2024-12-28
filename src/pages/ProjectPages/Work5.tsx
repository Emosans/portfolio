import Layout from "../../components/Layout/Layout";
import ProjectCard from "../../components/Projects/ProjectCard";

export default function Work5() {
  return (
    <Layout>
      <div className="section-container">
        <div className="container">
          <div className="row">
            <ProjectCard
              number="005"
              title="Zupee Clone"
              description="This is a game created using Unity engine and C# as the language. It is a simple clone of the Zupee Ludo Game. It involves chance based dice rolls, repeat chances when 6 is rolled. The path is created using separate nodes that link together to form an array of gameobjects. Future scope is to add customized animations for the pieces as well as dice."
              techStack="Unity, C#"
              image="/assets/images/work001-01.jpg"
              link="/work5"
            />

            <div className="col-md-8 col-md-offset-2 section-container-spacer text-center">
              <div className="row">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/PQ6CkVei5Dc?mute=1"
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
