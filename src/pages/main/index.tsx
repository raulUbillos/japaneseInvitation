import StyledButton from "../../components/Button";
import { Container, Heading } from '@chakra-ui/react'
import MountainIcon from "../../components/Icons/MountainIcon";
import JapaneseNameAndDateIcon from "../../components/Icons/JapaneseNameAndDate";
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

const Main = () => {
    const navigate = useNavigate();
    const now = new Date().getTime();
    const futureDate = new Date(2023,3,7).getTime();
    
    const timeleft = futureDate - now;

    const [remaining, setRemaining] = useState(timeleft);

    setInterval(() => {

        const now = new Date().getTime();
        
        const timeleft = futureDate - now;
        if(timeleft > 0) {
            setRemaining(timeleft);
        }else{
            setRemaining(0)
        }
    }, 1000)
    const getTimeRemaining = () => {
        const days    = Math.floor( remaining / (1000 * 60 * 60 * 24));
        const hours   = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        return {
            days, hours, minutes
        };
    }
    const getRemainingTimeInText = () => {
        const {days, hours, minutes} = getTimeRemaining();
        return `${days} dias ${hours} horas ${minutes} minutos`
    }

    const whereIs = (event: React.MouseEvent) => {
        navigate("/whereIs");
    }

    const photos = (event: React.MouseEvent) => {
        navigate("/photos");
    }
    const confirmation = (event: React.MouseEvent) => {
        navigate("/confirmation");
    }
    return <Container variant="container">
            <Container height="23vh">
                <JapaneseNameAndDateIcon width="60vw" height="10vh"></JapaneseNameAndDateIcon>
                <Heading
                        fontSize="lg" 
                        fontFamily="japanese"
                        lineHeight="2rem"
                        fontWeight="light"
                >
                    07/04 21:30hs
                </Heading>
                <Heading
                        fontSize="lg" 
                        fontFamily="japanese"
                        lineHeight="2rem"
                        fontWeight="light"
                >
                    {`Quedan ${getRemainingTimeInText()}`}
                </Heading>
            </Container>
            <Container flexDirection="row" height="53vh" maxWidth="100vw">
                <MountainIcon width="80vw" height="53vh" zIndex="1" position="relative" bottom="0"></MountainIcon>
                <Container 
                    zIndex={100} 
                    position="relative" 
                    left="-4rem" 
                    maxH="52vh"
                    maxWidth="15vw"
                    minWidth="15vw">
                    <Heading 
                        fontSize="8xl" 
                        width="4rem" 
                        fontFamily="japanese"
                        textAlign="center" 
                        lineHeight="5rem"
                        color="transparent"
                        fontWeight="light"
                        sx={{
                            WebkitTextStrokeColor:"black",
                            WebkitTextStrokeWidth: "1px"
                        }}
                        marginBottom="1rem">
                            MIS
                    </Heading>
                    <Heading 
                        fontSize="8xl" 
                        width="4rem" 
                        fontFamily="japanese"
                        textAlign="center" 
                        lineHeight="5rem" 
                        fontWeight="light"
                        color="transparent"
                        sx={{
                            WebkitTextStrokeColor:"black",
                            WebkitTextStrokeWidth: "1px"
                        }}
                        marginBottom="1rem">
                            XV
                    </Heading>
                </Container>
            </Container>            
            <Container alignItems="center" justifyContent="flex-start" height="24vh">
                <StyledButton 
                    width="80vw" 
                    marginBottom="0.5rem"
                    onClick={photos}
                >
                    Fotos
                </StyledButton>
                <StyledButton 
                    width="80vw" 
                    marginBottom="0.5rem"
                    onClick={whereIs}
                >
                    Donde es
                </StyledButton>
                <StyledButton 
                    onClick={confirmation}
                    width="80vw" 
                    marginBottom="0.5rem"
                >
                    Confirmar asistencia
                </StyledButton>
            </Container>
        </Container>
}

export default Main;