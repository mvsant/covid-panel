import {useState, useEffect, lazy, Suspense} from "react";
import {index} from "../../api";
import Loading from "../../components/Loading";

const Container = lazy(() => import("../../components/Container"));
const Card = lazy(() => import("../../components/Card"));

export default function Home() {
  const [data, setData] = useState("");

  function handleSort(data, type) {
    return []
      .concat(data)
      .sort((a, b) => (a[type] < b[type] ? 1 : -1))
      .map((item, index) =>
        index <= 10 && index !== 0 ? (
          <Card key={index} data={item} name={item.country} type="snack" />
        ) : null
      );
  }

  useEffect(() => {
    index(setData);
  }, []);

  return data[0] === undefined ? (
    <Loading />
  ) : (
    <Suspense fallback={<Loading />}>
      <Container>
        <h2>World Status:</h2>
        <Card data={data[0]} name={data[0].country} type="world" />
        <h2>Most affected countries:</h2>

        {handleSort(data, "cases")}
        {}
      </Container>
    </Suspense>
  );
}
