import { Container, Heading } from '@chakra-ui/react';
import React from 'react'
import Carousel from '../Carousel';
import LilGirl from '../Icons/LilGirl';
import {useGetPhotosQuery} from '../../services/Photos';

interface IProps {
    title: string,
    idAlbum: string
}

function Gallery({idAlbum,title}: IProps) {
  const {data} = useGetPhotosQuery(idAlbum);

  if(!data || data.length === 0){
    return <></>
  }

  return (
    <Container flexDirection="column" marginBottom="1rem">
        <Container 
            flexDirection="row" 
            height="30%" 
            marginBottom="1rem" 
            justifyContent="center"
            alignItems="center">
            <LilGirl width="15vw" height="100%" marginRight="1rem"/>
            <Heading
                fontSize="2xl" 
                fontFamily="japanese"
                textAlign="center" 
                lineHeight="5rem"
                fontWeight="light"
            >
                {title}
            </Heading>
        </Container>        
        <Carousel images={data}/>
    </Container>
  )
}

export default Gallery