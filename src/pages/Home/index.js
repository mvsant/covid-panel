import { useState, useEffect } from "react";
import { index } from "../../api";
import Card from "../../components/Card";
import Container from "../../components/Container";

export default function Home() {
    const [data, setData] = useState('');

    useEffect(() => {
        index(setData);
    }, [])
    return data[0] === undefined ? (
        <>Loading</>
    ) : (
            <Container>
            <h2>World Status:</h2>
            <Card data={data[0]} name={data[0].country} type="world" />
                <h2>Most affected countries:</h2>

        {data.map((item,index)=>(
            index <= 10 && index !== 0 ? 
            <Card key={index} data={item} name={item.country} type="snack" />
            :null
        ))}
            </Container>
        )
}