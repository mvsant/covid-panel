import { activeStyle, StyledNavLink, StyledUl } from "./style";

const Pagination = ({ itemsPerPage, total, paginate, next, previous, category }) => {
    const pageNumbers = [];
    const pages = Math.ceil(total / itemsPerPage);
    const current = next - 1;

    for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <StyledUl className='pagination'>
                {previous === 0 ? null :
                    <StyledNavLink onClick={() => paginate(previous)} activeStyle={activeStyle} to={`/category/${category}/${previous}`}>
                        Prev |
                        </StyledNavLink>
                }
                {pageNumbers.map(item => (
                    item !== current && item !== current + 1 && item !== current - 1 ? null :
                        <li key={item} className='page-item'>
                            <StyledNavLink onClick={() => paginate(item)} activeStyle={activeStyle} to={`/category/${category}/${item}`}>
                                {item}
                            </StyledNavLink>
                        </li>
                ))}
                {next > pages ? null :
                    <StyledNavLink onClick={() => paginate(next)} activeStyle={activeStyle} to={`/category/${category}/${next}`}>
                        | Next
                        </StyledNavLink>
                }
            </StyledUl>
        </nav>
    );
};

export default Pagination;