import { WarningIcon } from "@chakra-ui/icons";
import { extendTheme } from "@chakra-ui/react";

const ChakraTheme = extendTheme({
    colors: {
        borderGray: "#949494",
        errorRed: "#FF0000",
        active: "#543FD3",
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
            a: {
                color: "white",
                textDecoration: "none",
                _hover: {
                    borderBottom: "2px solid white",
                },
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
                        borderColor: "active",
                        boxShadow: "0 0 0 1px active",
                    },
                },
            },
        },
        FormLabel: {
            baseStyle: {
                color: "black",
                fontSize: "14px",
                _disabled: {
                    color: "gray.400",
                },
                _invalid: {
                    color: "errorRed",
                },
                _focus: {
                    color: "active",
                },
            },
        },
        FormErrorMessage: {
            baseStyle: {
                fontSize: "11px",
                color: "errorRed",
            },
        },
    },
});

export default ChakraTheme;
