import Layout from "../../components/Layout/Layout";
import ProjectCard from "../../components/Projects/ProjectCard";

export default function Work6() {
  return (
    <Layout>
      <div className="section-container">
        <div className="container">
          <div className="row">
            <ProjectCard
              number="006"
              title="Tic-Tac-Toe"
              description="This is a console based game created using Java. It involves finding winning combinations for the board using bit manipulation. The user can choose the index of the symbols on the board with respect to bit manipulation."
              techStack="Java"
              image="/assets/images/work001-01.jpg"
              link="/work6"
            />

            <div className="col-md-8 col-md-offset-2 section-container-spacer text-center">
              <div className="row">
                <div className="col-xs-12 col-md-6">
                  <img
                    src="/assets/images/logic.png"
                    className="img-responsive"
                    alt="Base Logic"
                  />
                  <p>Base Logic</p>
                </div>
                <div className="col-xs-12 col-md-6">
                  <img
                    src="/assets/images/logic2.png"
                    className="img-responsive"
                    alt="Logic for bits"
                  />
                  <p>Logic for bits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
