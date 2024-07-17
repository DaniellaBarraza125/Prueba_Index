import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import { Box, Center, Text } from '@chakra-ui/react';
import { getForms } from '../../features/form/formSlice';

const Cards = ({ formSubmitted, setInvisible }) => {
    const forms = useSelector((state) => state.form.forms);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getForms());
    }, [dispatch, formSubmitted]);


    if (forms.length <= 0) { 
        return (
            <Center marginTop="10vh">
                {!setInvisible && (
                    <Text fontSize="xl" fontWeight="bold" mb={4}>
                        No forms submitted currently
                    </Text>
                )}
            </Center>
        );
    }

    return (
        <Center>
            <Box bg="gray.100" p={4} width={{ base: '100%', md: '411px' }} borderRadius="md" boxShadow="md" marginTop="5%">
                <Text fontSize="xl" fontWeight="bold" mb={4} textAlign="center">
                    Information received
                </Text>
                <Box display="flex" flexDirection="column">
                    {forms.map((form, index) => (
                        <Card key={index} form={form} />
                    ))}
                </Box>
            </Box>
        </Center>
    );
};

export default Cards;
