import styled from 'styled-components';
import eventlogo from '../assets/images/Eventpic.png';

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 200px;
  margin: 20px 0; /* Space around the image */
  border-radius: 4px;
`;

function Home() {
    return ( 
        <>
        <h1>Home</h1>
        <StyledImage src={eventlogo} alt="Event Recommendation" /> 
        <div>
            <a href="https://event.xn--jeanettessgttsche-80bc.dk/api/routes">Deployed API</a>
        </div>
        <div>
            <a href="https://github.com/KamiStolt/eventRecommendation.git">Repository</a>
        </div>
        <div>
            <a href="https://excalidraw.com/#json=LgTpZsk99PIBNqsxtu-jp,trA5eG2xVmcJhqpH8ee2tg">Mockup</a>
        </div>
        </>
     );
}

export default Home;