import styled from "styled-components"
export const StyledWrapper = styled.div`
div:nth-child(2) div:nth-child(${props => props.highlight}) {
    color:green;
    font-size:1.3rem;
}
`;