import styled from "styled-components";
import EarthFlag from "../../assets/images/un-flag.png";

export const StyledSelectContainer = styled.div``;
export const StyledSelect = styled.select`
  background-repeat: no-repeat;
  background-position: bottom left;
  padding-left: 20px;
  padding-right: 10px;
  max-width: 15vw;
`;

export const StyledOption = styled.option`
  //For future use
  option[value=${(props) => props.name}] {
    //background-image:url(${EarthFlag});
  }
`;
