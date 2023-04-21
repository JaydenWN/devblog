import { Link } from "react-router-dom";
import TechLandingCard from "./TechLandingCard";
import TECHLANDCONTCSS from "./styles/technologiesLandingContainer.module.css";
import { gql, useQuery } from "@apollo/client";

import { AiOutlineFileUnknown, AiOutlineHtml5 } from "react-icons/ai";
import { SiJavascript, SiStrapi, SiVite } from "react-icons/si";
import { FaReact } from "react-icons/fa";

function TechnologiesLandingContainer() {
  const GETTECH = gql`
    query getTech {
      technologies {
        data {
          id
          attributes {
            name
            link
            reactIcon
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(GETTECH);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <ErrorPage />;

  return (
    <div className={TECHLANDCONTCSS.technologiesLandingContainer}>
      <h2>Technologies I've worked with</h2>
      <div className={TECHLANDCONTCSS.techLandingCards}>
        {data.technologies.data.map((techs) => {
          let icon = <AiOutlineFileUnknown />;
          if (techs.id == 1) {
            icon = <AiOutlineHtml5 />;
          } else if (techs.id == 2) {
            icon = <SiJavascript />;
          } else if (techs.id == 3) {
            icon = <SiStrapi />;
          } else if (techs.id == 4) {
            icon = <FaReact />;
          } else if (techs.id == 5) {
            icon = <SiVite />;
          }

          return (
            <Link to={techs.attributes.link} key={techs.id}>
              <TechLandingCard
                name={techs.attributes.name}
                iconJSX={icon}
              ></TechLandingCard>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TechnologiesLandingContainer;
