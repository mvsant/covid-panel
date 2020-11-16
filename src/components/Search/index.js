import { StyledHeader } from "../Header/style";
import { StyledLabel, StyledSearch } from "./style";

export default function Search() {

    return (
        <>
            <StyledHeader>
                <StyledLabel htmlFor="sch">
                    Search:
                </StyledLabel>
                <br/>
                    <StyledSearch type="text" name="search" id="sch" />
            </StyledHeader>
        </>
    )
}