import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { index } from "../../api";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import { categoryFinder } from "../../utils/categories";
import { usePrevious } from "../../utils/hooks";
import { categoryMask } from "../../utils/masks";
import { StyledWrapper } from "./style";

export default function Test() {
    const [data, setData] = useState('');
    const [itemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [inProp, setInProp] = useState(false);
    const [highlight, setHighight] = useState('');
    const category = useLocation().pathname.replace(/[^a-zA-Z]/g, '').substring(8);
    const prevCount = usePrevious(category);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        index(setData);
        window.scrollTo(0, 0);
    }, [])


    useEffect(() => {
        function effect() {
            if (category !== prevCount) {
                //request(setData, category)
                //handleCategory(category);

                setHighight(categoryFinder(category))
                setInProp(!inProp)
                setCurrentPage(1)
            }
        }
        return effect()
    }, [category, inProp, prevCount])

    function handleSort() {
        return [].concat(data)
            .sort((a, b) => a[category] < b[category] ? 1 : -1)
    }

    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const current = handleSort().slice(indexOfFirst, indexOfLast);


    return data[0] === undefined ? (
        <Loading />
    ) : (
            <>
                <Container>
                    <h2>Sort by: {categoryMask(category)}</h2>
                    <Pagination
                        itemsPerPage={itemsPerPage}
                        total={data.length}
                        paginate={paginate}
                        next={currentPage + 1}
                        previous={currentPage - 1}
                        category={category}
                    />

                    {[].concat(current)
                        .sort((a, b) => a[category] < b[category] ? 1 : -1)
                        .map((item, index) => (
                            index <= 10 && item.country !== "World" ?
                                <StyledWrapper highlight={highlight} key={index}>
                                    <Card data={item} name={item.country} type="single" category={category} />
                                </StyledWrapper>

                                : null
                        ))}
                    <Pagination
                        itemsPerPage={itemsPerPage}
                        total={data.length}
                        paginate={paginate}
                        next={currentPage + 1}
                        previous={currentPage - 1}
                        category={category}
                    />
                </Container>
            </>
        )
}

/*

*/