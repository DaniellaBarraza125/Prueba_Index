import { WarningIcon } from "@chakra-ui/icons";
import { extendTheme } from "@chakra-ui/react";

const ChakraTheme = extendTheme({
    colors: {
        borderGray: "#949494",
        errorRed: "#FF0000",
    },
    fonts: {
        body: "Roboto, sans-serif",
        heading: "Roboto, sans-serif",
    },
    styles: {
        global: {
            "html, body": {
                color: "gray.800",
                lineHeight: "tall",
            },
            h1: {
                fontSize: "46px",
            },
        },
    },
    components: {
        Input: {
            baseStyle: {
                field: {
                    width: "311px",
                    height: "59px",
                    borderRadius: "4px",
                    border: "1px solid",
                    borderColor: "borderGray",
                    padding: "20px 12px",
                    _focus: {
                        borderColor: "teal.500",
                        boxShadow: "0 0 0 1px teal.500",
                    },
                },
            },
        },
        FormLabel: {
            baseStyle: {
                color: "#FFFFFF",
            },
        },
        FormErrorMessage: {
            baseStyle: {
                fontSize: "sm",
                color: "errorRed",
            },
        },
    },
});

export default ChakraTheme;
