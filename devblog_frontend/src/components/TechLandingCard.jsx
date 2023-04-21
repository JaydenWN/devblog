import TECHCARDCSS from "./styles/techLandingCard.module.css";

function TechLandingCard({ name, iconJSX }) {
  return (
    <div className={TECHCARDCSS.techLadningCard}>
      <div className={TECHCARDCSS.techIcon}>{iconJSX}</div>
      <h3>{name}</h3>
    </div>
  );
}

export default TechLandingCard;
