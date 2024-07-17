import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Center, Text } from '@chakra-ui/react';

const Card = ({ form }) => {

  if (!form) {
    return null;
  }

  return (
  
    <Box>
    <Box>
      <strong>Name:</strong> {form.name}
    </Box>
    <Box>
      <strong>Surname:</strong> {form.surname}
    </Box>
    <Box>
      <strong>Email:</strong> {form.email}
    </Box>
    <Box>
      <strong>Phone:</strong> {form.phone}
    </Box>
    <Box>
      <strong>Message:</strong> {form.message}
    </Box>
  </Box>
  );
};

export default Card;
