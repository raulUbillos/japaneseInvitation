import { defineStyleConfig } from "@chakra-ui/react";

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

export default Container;