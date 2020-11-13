import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { index } from "../../api";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Loading from "../../components/Loading";
import { categoryFinder } from "../../utils/categories";
import { usePrevious } from "../../utils/hooks";
import { categoryMask } from "../../utils/masks";
import { StyledWrapper } from "./style";

export default function Category() {
    const [data, setData] = useState('');
    const [inProp, setInProp] = useState(false);
    const category = useLocation().pathname.substring(10);
    const [highlight,setHighight] = useState('');
    const prevCount = usePrevious(category);

    function handleSort(data,type) {
       return [].concat(data)
            .sort((a, b) => a[type] < b[type] ? 1 : -1).map((item, index) => (
                index <= 10 && item.country !== "World" ?
                <StyledWrapper highlight={highlight} key={index}>
                    <Card data={item} name={item.country}  />
                </StyledWrapper>

                    : null
            ))
    }

    useEffect(() => {
        index(setData);
    }, [])

    useEffect(() => {
        function effect() {
            if (category !== prevCount) {
                //request(setData, category)
                setHighight(categoryFinder(category))
                setInProp(!inProp)
                
            }
        }
        return effect()
    }, [category, inProp, prevCount])
    return data[0] === undefined ? (
        <Loading />
    ) : (
        <CSSTransition in={inProp} timeout={400} classNames="my-node">
            <Container>
                <h2>Countries by: {categoryMask(category)}</h2>

{handleSort(data,category)}
                {

                }
            </Container>
            </CSSTransition>
        )
}