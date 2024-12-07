//import picture from '../assets/images/eventpic.png';
import styled from "styled-components";


const StyledDiv = styled.div`
    padding-top: 20px;
`


function Home() {
    return ( 
        <>
        <h1>Event recommendation</h1>
        
        <StyledDiv>
            <a href="https://event.xn--jeanettessgttsche-80bc.dk/api/routes">Deployed API</a>
        </StyledDiv>
        <StyledDiv>
            <a href="https://github.com/KamiStolt/eventRecommendation.git">Repository</a>
        </StyledDiv>
        </>
     );
}

export default Home;