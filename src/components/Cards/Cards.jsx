import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import { Box, Center, Text } from '@chakra-ui/react';

const Cards = () => {
  const forms = useSelector((state) => state.form.forms);
  console.log("forms", Array.isArray(forms), forms);

  return (
    <>
      <Box bg="gray.100" p={4} w="411px" borderRadius="md" boxShadow="md">
      <Center>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Información recibida
        </Text>
      </Center>
      {forms.map((form, index) => (
        <Card key={index} form={form} />
      ))}
    </Box>
    
    </>
  );
};

export default Cards;
