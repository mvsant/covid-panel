import styled from "styled-components";
export const StyledCard = styled.div`
  display: grid;
  grid-template-areas: ${(props) =>
    props.type === "snack"
      ? "'avatar . data  ' 'avatar . data '"
      : "'avatar  data ''avatar  data' "};
  background-color: ${(props) => (props.type === "snack" ? "beige" : "white")};
  margin: 1rem 0;
  border: 1px solid white;
  border-radius: 1%;
  padding: 1rem;
  width: 70vw;
  .profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .data {
    grid-area: data;
    font-size: 1.1rem;
    line-height: 1.4;
    letter-spacing: 0.09rem;
    span {
      font-weight: 700;
    }
  }
  .avatar {
    grid-area: avatar;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    background-size: cover;
  }
  span a {
    text-decoration: none;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
    padding: 0.5rem;
  }
  span a:hover {
    background-color: white;
  }
  box-shadow: 1px 10px 11px 0px rgba(0, 0, 0, 0.62);
  @media (max-width: 768px) {
    width: 80vw;
    display: flex;
    flex-direction: column;
    text-align:center;
    .profile {
      flex-direction: column;
      padding-bottom: 2rem;
    }
    .avatar {
      width: 64px;
      height: 64px;
    }
  }
`;
