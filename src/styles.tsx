import { defineStyleConfig, extendTheme } from '@chakra-ui/react'

const Button = defineStyleConfig({
    baseStyle: {
        fontWeight: "bold",
        fontFamily: "japanese",
        border: "1px solid black",
        borderRadius: "0px"
    },
    variants: {
        solid({ colorScheme }) {
            return {
                bg: "transparent",
            }
        },
    }
});

const Container = defineStyleConfig({
    baseStyle: {
        minW: "100%",
        height: "100vh",
        display: "flex",
        flexDirection:"column",
        margin: "0"
    },
    variants: {
        container({ colorScheme }) {
            return {
                bgGradient: "linear-gradient(180.04deg, #FFFFFF -129.46%, #FBFDFD -90.89%, #F1F8FA -58.1%, #E0F0F5 -29.17%, #C8E5EE -2.17%, #AAD7E4 24.83%, #92CCDD 42.18%);",
                overflow: "scroll"
            }
        },
    }
});


const theme = extendTheme({
    components: {
      Button,
      Container
    },
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    }
});

export default theme;