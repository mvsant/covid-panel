import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { index } from "../../api";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Loading from "../../components/Loading";

export default function Search() {
    const [data, setData] = useState('');
    const search = useLocation().pathname.substring(8);

    function handleData() {
        const result = [].concat(data).filter((result) => result.country.toLowerCase().includes(search)).sort((a, b) => a.country > b.country ? 1 : -1);
        return result;
    }

    useEffect(() => {
        index(setData);
        window.scrollTo(0, 0);
    }, [])

    return data[0] === undefined ? (
        <Loading />
    ) : (
            <Container>
                {handleData().length === 0 || search.length < 3 ?
                    <p>No Results found !</p> :
                    handleData().map(item =>
                        <Card data={item} name={item.country} />
                    )
                }
            </Container>
        )
}