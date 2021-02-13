import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { StyledHeader } from "../Header/style";
import { StyledSearch } from "./style";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const history = useHistory();

  useEffect(() => {
    function handleSearch(search) {
      if (search !== "") {
        history.push(`/search/${search}`);
      }
    }
    return handleSearch(search);
  }, [search, history]);

  return (
    <>
      <StyledHeader>
        <br />
        <StyledSearch
          type="text"
          name="search"
          id="sch"
          onKeyPress={(e) =>
            e.key === "Enter"
              ? setSearch(e.target.value.toLowerCase()) || e.target.blur()
              : null
          }
        />
      </StyledHeader>
    </>
  );
}
