import PROJLANDCARDCSS from "./styles/projectsLandingCard.module.css";
import { gql, useQuery } from "@apollo/client";

function ProjectsLandingCard({ title, description }) {
  return (
    <div className={PROJLANDCARDCSS.projectLandingCard}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProjectsLandingCard;
