import { extendTheme } from '@chakra-ui/react'
import Button from './Button';
import Container from './Container';


const theme = extendTheme({
    components: {
      Button,
      Container
    }
});

export default theme;