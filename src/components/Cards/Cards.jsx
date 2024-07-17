import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import { Box, Center, Text } from '@chakra-ui/react';
import { getForms } from '../../features/form/formSlice';

const Cards = ({ formSubmitted }) => {
    const forms = useSelector((state) => state.form.forms);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getForms());
    }, [dispatch, formSubmitted]);

    console.log("forms", Array.isArray(forms), forms);

    return (
        <Box bg="gray.100" p={4} w="411px" borderRadius="md" boxShadow="md">
            <Center>
                <Text fontSize="xl" fontWeight="bold" mb={4}>
                    Información recibida
                </Text>
            </Center>
            <Box display={'flex'} flexDirection={'column-reverse'}>

            {forms.map((form, index) => (
                <Card key={index} form={form} />
            ))}
            </Box>
        </Box>
    );
};

export default Cards;
