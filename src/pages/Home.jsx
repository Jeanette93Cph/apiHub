//import picture from '../assets/images/eventpic.png';
import styled from "styled-components";
import eventlogo from '../assets/images/Eventpic.png';


const StyledDiv = styled.div`
    padding-top: 20px;
`

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 200px;
  //margin: 20px 0; /* Space around the image */
  border-radius: 4px;
`;


function Home() {
    return ( 
        <>
        <StyledImage src={eventlogo} alt="Event Recommendation" /> 
        <StyledDiv>
            <a href="https://event.xn--jeanettessgttsche-80bc.dk/api/routes">Deployed API</a>
        </StyledDiv>
        <StyledDiv>
            <a href="https://github.com/KamiStolt/eventRecommendation.git">Repository</a>
        </StyledDiv>
        <StyledDiv>
            <a href="https://excalidraw.com/#json=LgTpZsk99PIBNqsxtu-jp,trA5eG2xVmcJhqpH8ee2tg">Mockup</a>
        </StyledDiv>
        </>
     );
}

export default Home;