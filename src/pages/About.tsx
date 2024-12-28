import Layout from "../components/Layout/Layout";

export default function About() {
  return (
    <Layout>
      <div className="section-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="section-container-spacer text-center">
                <h1 className="h2">03 : About me</h1>
              </div>

              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <div className="row">
                    <div className="col-xs-12 col-md-6">
                      <h3>Who Am I?</h3>
                      <p>
                        I am a final year student at the University of Mumbai,
                        Pursuing a Bachelor's Degree in Information Technology
                        From Thadomal Shahani Engineering College.
                      </p>

                      <h3>What are my Interests?</h3>
                      <p>
                        I have deep interests in game developement in Unity and
                        building low level applications usin C and C++. I have a
                        clear understanding of backend and frontend technologies
                        to build full-stack applications.
                      </p>

                      <h3>What am I currently learning?</h3>
                      <p>
                        I am currently learning DSA, System Designs, Shader
                        Programming and Backend development.
                      </p>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <img
                        src="/assets/images/maps.png"
                        className="img-responsive"
                        alt="Location Map"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
