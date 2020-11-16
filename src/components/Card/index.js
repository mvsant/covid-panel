import { Link } from "react-router-dom";
import { flagFinder } from "../../utils/countries";
import { categoryMask, numbersMask } from "../../utils/masks";
import { StyledCard } from "./style";

export default function Card({ data, name, type, category }) {
  function handleType(item, type) {
    if (type === "world") {
      return (
        !item.includes("country") &&
        !item.includes("totalTests") &&
        !item.includes("testsPerOneMillion")
      );
    } else if (type === "snack") {
      return (
        item.includes("cases") ||
        item.includes("todayCases") ||
        item.includes("deaths") ||
        item.includes("todayDeaths") ||
        item.includes("recovered")
      );
    } else if (type === "single") {
      return (
        item.includes(category)
      );
    } else {
      return !item.includes("country");
    }
  }
  return data === undefined ? (
    null
  ) : (
      <StyledCard type={type}>
        <div className="profile">
          <img className="avatar" src={flagFinder(name).flag} alt={data.country} />
          < h3>
            {data.country}
          </h3>
          {type === "snack" || type==="single" ?
            <span> <Link to={`/country/${data.country}`}>Details</Link></span>
            : null
          }
        </div>

        <div >
          {Object.entries(data)
            .filter((choosen) => handleType(choosen, type))
            .map((list, index) => (
              <div key={index} className="data">
                <span>{categoryMask(list[0])}:</span> {numbersMask(list[1])}
              </div>
            ))}
        </div>
      </StyledCard>
    );
}