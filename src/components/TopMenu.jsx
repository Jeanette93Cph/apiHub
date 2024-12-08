import { NavLink } from "react-router";
import styled from "styled-components";

const StyledMenu = styled.ul`
    display: flex; 
    list-style: none;
    gap: 10px;
`

const StyledNavLink = styled.li`
    a {
    text-decoration: none;
    color: #333;
    font-size: 1rem;
    padding: 8px 10px;
    font-weight: bold;
    border-radius: 4px;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: #c4ff61;
      color: #000;
    }
  }
`
const LoginNavLink = styled(StyledNavLink)`
  margin-left: auto; /* Pushes the Login link to the far right */
`;

function TopMenu() {
    return ( 
        <nav>
            <StyledMenu>
                <StyledNavLink> 
                    <NavLink to='/'>Home</NavLink>
                </StyledNavLink>
                <StyledNavLink>
                    <NavLink to='/vision'>Vision</NavLink>
                </StyledNavLink>
                <StyledNavLink>
                    <NavLink to='/endpoints'>Endpoints</NavLink>
                </StyledNavLink>
                <LoginNavLink>
                    <NavLink to='/login'>Login</NavLink>
                 </LoginNavLink>
            </StyledMenu>
        </nav>
     );
}

export default TopMenu;