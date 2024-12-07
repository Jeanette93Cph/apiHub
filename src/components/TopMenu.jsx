import { NavLink } from "react-router";
import styled from "styled-components";

const StyledMenu = styled.ul`
    display: flex; 
    list-style: none;
    gap: 15px;    
`

function TopMenu() {
    return ( 
        <nav>
            <StyledMenu>
                <li> 
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/vision'>Vision</NavLink>
                </li>
                <li>
                    <NavLink to='/endpoints'>Endpoints</NavLink>
                </li>
            </StyledMenu>
        </nav>
     );
}

export default TopMenu;