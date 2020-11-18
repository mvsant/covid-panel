import styled from "styled-components";
import EarthFlag from "../../assets/images/un-flag.png";

export const StyledSelectContainer = styled.div`
  label {
    padding-bottom: 1rem;
  }
`;
export const StyledSelect = styled.select`
  background-repeat: no-repeat;
  padding-right: 10px;
  margin-bottom: 1rem;
  max-width: 20vw;
`;

export const StyledOption = styled.option`
  //For future use
  option[value=${(props) => props.name}] {
    //background-image:url(${EarthFlag});
  }
`;
