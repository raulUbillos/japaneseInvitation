import { Container, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import StyledButton from "../../components/Button";
import Gallery from "../../components/Gallery";
import LilGirl from "../../components/Icons/LilGirl";

const Photos = () => {    
    const navigate = useNavigate();

    const goBack = (event : React.MouseEvent) => {
        navigate("/")
    }
    return (
        <Container variant="container" >
            <Container 
                flexDirection="row" 
                height="10vh" 
                marginBottom="1rem" 
                justifyContent="center"
                alignItems="center">
                <LilGirl width="20vw" height="100%" marginRight="1rem"/>
                <Heading
                    fontSize="4xl" 
                    fontFamily="japanese"
                    textAlign="center" 
                    lineHeight="5rem"
                    fontWeight="light"
                >
                    Fotos
                </Heading>
            </Container>
            <Gallery title="Fotos mias" idAlbum="i8ekZQmfYHe55WtN8"/>
            <Gallery title="Mi book de XV" idAlbum="FJqK5MDUoJL25b1u6"/>
            <Gallery title="La fiesta" idAlbum="uWSa9QKakiSqi6pa7"/>
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
    )
}

export default Photos;