import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Categories } from "../../utils/categories";
import { categoryMask } from "../../utils/masks";
import { StyledOption, StyledSelect, StyledSelectContainer } from "./style";

export default function Selector() {
  const [category, setCategory] = useState("");
  let history = useHistory();

  useEffect(() => {
    function handleCategory(category) {
      if (category !== "") {
        history.push(`/category/${category}/1`);
      }
    }
    return handleCategory(category);
  }, [category, history]);

  return (
    <StyledSelectContainer>
      <label htmlFor="countrySelect">Select a category:</label>
      <br />
      <StyledSelect
        value={category}
        id="countrySelect"
        onChange={(event) => setCategory(event.target.value)}
      >
        {Categories.map((item, index) => (
          <StyledOption key={index} value={item.category} name={item.category}>
            {categoryMask(item.category)}
          </StyledOption>
        ))}
      </StyledSelect>
    </StyledSelectContainer>
  );
}
