import Layout from "../../components/Layout/Layout";
import ProjectCard from "../../components/Projects/ProjectCard";

export default function Work2() {
  return (
    <Layout>
      <div className="section-container">
        <div className="container">
          <div className="row">
            <ProjectCard
              number="002"
              title="Ticket Booking System"
              description="This is a simple ticket booking system in Typescript, Express. There are separate API's for users and admins. The users can register and login through different endpoints. The user can check for seat availability, book trains. The admin can add trains and their source & destinations for them. Validation is done through tokens and role based access. Concurrent transactions are done through 'transactions' feature in Prisma."
              techStack="NodeJs, Typescript, Express"
              image="/assets/images/work001-01.jpg"
              link="/work2"
            />

            <div className="col-md-8 col-md-offset-2 section-container-spacer text-center">
              <div className="row">
                {/* Additional content can be added here if needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
