import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Countries } from "../../utils/countries";
import { StyledOption, StyledSelect, StyledSelectContainer } from "./style";

export default function Select() {
    const [country, setCountry] = useState("");
    let history = useHistory();

    useEffect(() => {
        function handleCountry(country) {
            if (country !== "") {
                history.push(`/country/${country}`);
            }
        }
        return handleCountry(country)
    }, [country, history])

    return (
        <StyledSelectContainer>
            <label htmlFor="countrySelect">Select a country</label><br />
            <StyledSelect value={country} id="countrySelect" onChange={event => setCountry(event.target.value)}>
                {Countries.map((item, index) => (
                    <StyledOption key={index} value={item.name} name={item.name}>{item.name}</StyledOption>
                ))}
            </StyledSelect>
        </StyledSelectContainer>
    )
}