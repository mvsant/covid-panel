import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { request } from "../../api";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Loading from "../../components/Loading";
import './styles.css';

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

export default function Country(props) {
    const [data, setData] = useState('World');
    const [inProp, setInProp] = useState(false);
    const location = useLocation();
    const country = location.pathname.substring(9);
    const prevCount = usePrevious(country)

    useEffect(() => {
        function effect() {
            if (country !== prevCount) {
                request(setData, country)
                setInProp(!inProp)
            }
        }
        return effect()
    }, [country, inProp, prevCount])

    return data.country === undefined ? (
        <Loading />
    ) : (
            <CSSTransition in={inProp} timeout={300} classNames="my-node">
                <Container>
                    <Card data={data} name={data.country} />
                </Container>
            </CSSTransition>
        )
}