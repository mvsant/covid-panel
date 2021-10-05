import { lazy, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { request } from "../../api";
import Loading from "../../components/Loading";
import { usePrevious } from "../../utils/hooks";
import "./styles.css";

const Container = lazy(() => import("../../components/Container"));
const Card = lazy(() => import("../../components/Card"));

export default function Country() {
  const [data, setData] = useState("World");
  const [inProp, setInProp] = useState(false);
  const location = useLocation();
  const country = location.pathname.substring(9);
  const prevCount = usePrevious(country);

  useEffect(() => {
    function effect() {
      if (country !== prevCount) {
        request(setData, country);
        setInProp(!inProp);
        window.scrollTo(0, 0);
      }
    }
    return effect();
  }, [country, inProp, prevCount]);

  return data.country === undefined ? (
    <Loading />
  ) : (
    <CSSTransition in={inProp} timeout={300} classNames="my-node">
      <Container>
        <Card data={data} name={data.country} />
        <Container />
      </Container>
    </CSSTransition>
  );
}
