import BurguerStyle from "./style";

export default function Burguer({ onClick, toggle }) {
  return (
    <BurguerStyle onClick={onClick} toggle={toggle}>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </BurguerStyle>
  );
}
