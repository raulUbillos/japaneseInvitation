import { Container, Heading } from "@chakra-ui/react"
import StyledButton from "../../components/Button";
import { useNavigate } from "react-router-dom";
import LilGirl from "../../components/Icons/LilGirl";

const WhereIs = () => {
    const navigate = useNavigate();

    const goBack = (event : React.MouseEvent) => {
        navigate("/")
    }

    return <Container variant="container">
        <Container 
            flexDirection="row" 
            height="10vh" 
            marginBottom="1rem" 
            justifyContent="center"
            alignItems="center">
            <LilGirl width="20vw" height="100%" marginRight="1rem"/>
            <Heading
                fontSize="3xl" 
                fontFamily="japanese"
                textAlign="center" 
                lineHeight="5rem"
                fontWeight="light"
            >
                Como llegar
            </Heading>
        </Container>
        <Container width="80vw" height="70vh">
            <Heading
                fontSize="2xl" 
                fontFamily="japanese"
                textAlign="center" 
                lineHeight="2rem"
                fontWeight="light"
            >
                Club los lagartos.
            </Heading>
            <Heading
                fontSize="xl" 
                fontFamily="japanese"
                textAlign="center" 
                lineHeight="2rem"
                fontWeight="light"
            >
                Int biscayart 950, pergamino
            </Heading>
            <iframe 
                height="100%"
                width="100%"
                id="gmap_canvas"
                title="Map"
                src="https://maps.google.com/maps?q=int biscayart 950, pergamino&t=&z=16&ie=UTF8&iwloc=&output=embed" 
            ></iframe>
        </Container>
        <Container 
            alignItems="center" 
            justifyContent="flex-end" 
            height="10vh"
        >
            <StyledButton 
                width="80vw" 
                marginBottom="0.5rem"
                onClick={goBack}
            >
                Volver atras
            </StyledButton>
        </Container>
    </Container>
}

export default WhereIs;