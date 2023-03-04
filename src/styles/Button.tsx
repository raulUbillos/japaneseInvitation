import { defineStyleConfig } from "@chakra-ui/react";

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

export default Button;