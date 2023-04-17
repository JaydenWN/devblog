import ProjectsLandingCard from "./projectsLandingCard";
import PROJLANDCSS from "./styles/projectsLandingContainer.module.css";
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

function ProjectsLandingContainer() {
  const PROJECTS = gql`
    query getProjects {
      projects {
        data {
          attributes {
            title
            description
          }
          id
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(PROJECTS);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <ErrorPage />;
  const lastThreeProjects = data.projects.data.slice(-3);
  console.log(lastThreeProjects);

  return (
    <div className={PROJLANDCSS.projectsLandingContainer}>
      <Link to="/portfolio" className={PROJLANDCSS.latestProjBtn}>
        <h2>View My Latest Projects</h2>
      </Link>

      {lastThreeProjects.map((project) => (
        <Link to={`/portfolio/${project.id}`}>
          <ProjectsLandingCard
            title={project.attributes.title}
            description={project.attributes.description}
            key={project.attributes.title}
          ></ProjectsLandingCard>
        </Link>
      ))}
    </div>
  );
}
export default ProjectsLandingContainer;
