import { extendTheme } from "@chakra-ui/react";

const ChakraTheme = extendTheme({
    colors: {
        borderGray: "#949494",
        errorRed: "#FF0000",
    },
    fonts: {
        body: "Inter, sans-serif",
        heading: "Inter, sans-serif",
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
                    width: "387px",
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
                color: "black",
                fontSize: "14px",
                _disabled: {
                    color: "gray.400", // Color del label cuando el input está deshabilitado
                },
                _invalid: {
                    color: "errorRed", // Color del label cuando hay un error
                },
            },
        },
        FormErrorMessage: {
            baseStyle: {
                fontSize: "sm",
                color: "errorRed", // Color del mensaje de error
            },
        },
    },
});

export default ChakraTheme;
