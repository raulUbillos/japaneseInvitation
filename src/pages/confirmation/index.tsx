import { Container, Heading, Radio, RadioGroup, Stack } from "@chakra-ui/react"
import { 
    Input, 
    FormLabel, 
    Checkbox
} from '@chakra-ui/react'
import StyledButton from "../../components/Button";
import LilGirl from "../../components/Icons/LilGirl";
import {Controller, useForm} from 'react-hook-form';
import emailJs from '@emailjs/browser'
import {useNavigate} from "react-router-dom";
import {useState} from 'react';


const Confirmation = () => {
    const [notConfirmed, setNotConfirmed] = useState(true);
    const {register, handleSubmit, control} = useForm()

    const navigate = useNavigate();
    const submit = (data:any) => {
        emailJs.send("service_knl58mz","template_29rku4q",data,"91vWNWU5xP0a2V-AH");
        setNotConfirmed(false);
    }

    return <Container variant="container">
        <Container 
            flexDirection="row" 
            height="10vh" 
            marginBottom="4rem" 
            justifyContent="center"
            alignItems="center"
        >
            <LilGirl width="20vw" height="100%" marginRight="1rem"/>
            <Heading
                fontSize="4xl" 
                fontFamily="japanese"
                textAlign="center" 
                lineHeight="2rem"
                fontWeight="light"
            >
                Confirmacion de asistencia
            </Heading>
        </Container>
        <Container 
            flexDirection="column" 
            height="70vh" 
            justifyContent="center"
            alignItems="center"
            width="80vw"
        >
            <Container 
                fontFamily="japanese"
                textAlign="center" 
                lineHeight="2rem"
                fontWeight="light"
                color="black"
                height="80vh"
                width="80vw"
                background= "#E24100"
                padding="1rem"
                opacity= "0.77"
                border= "1px solid #000000"
                box-shadow= "0px 4px 4px rgba(0, 0, 0, 0.25)"   
            >
                {
                    notConfirmed ? 
                <>
                    <form
                        style={{
                            marginBottom: "1rem"
                        }}
                    >
                        <FormLabel>Nombre</FormLabel>
                        <Input 
                            marginBottom="1rem"
                            border="none"
                            borderBottom="2px solid black"
                            {...register('name')}
                        />
                        <FormLabel>Podes asistir</FormLabel>
                        <Controller
                            name="asists"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <RadioGroup 
                                    marginBottom="1rem" colorScheme="blackAlpha" onChange={onChange} value={value}>
                                <Stack direction="column">
                                    <Radio value="Si" borderColor="black">Si ire</Radio>
                                    <Radio value="No" borderColor="black" >No podre ir</Radio>
                                </Stack>
                                </RadioGroup>
                            )}
                        />
                        <FormLabel>Restricciones alimentarias</FormLabel>
                        <Stack spacing={5} direction='column'>
                            <Checkbox 
                                iconColor="black" 
                                borderColor="black" 
                                value="Vegano"
                                {...register("restrictions")}
                            >
                                Vegano
                            </Checkbox>
                            <Checkbox 
                                iconColor="black" 
                                borderColor="black"
                                value="Celiaco"
                                {...register("restrictions")}
                            >
                                Celiaco
                            </Checkbox>
                        </Stack>
                    </form>
                    <Heading
                        fontSize="xl" 
                        fontFamily="japanese"
                        textAlign="center" 
                        lineHeight="2rem"
                        fontWeight="light"
                    >
                        Hay que asistir con vestimenta formal
                    </Heading>
                </> : 
                    <Heading
                        fontSize="4xl" 
                        fontFamily="japanese"
                        textAlign="center" 
                        lineHeight="2rem"
                        fontWeight="light"
                    >
                        Genial! ya se mando tu confirmacion.
                    </Heading>
                }
            </Container>
            <StyledButton
                visibility={notConfirmed? "visible":"hidden"}
                onClick={handleSubmit(submit)}
                width="84vw"
                marginBottom="1rem"
            >
                    Confirmar asistencia
            </StyledButton>
            <StyledButton
                onClick={() => navigate("/")}
                width="84vw">
                    Volver
            </StyledButton>
        </Container>
    </Container>
}

export default Confirmation;