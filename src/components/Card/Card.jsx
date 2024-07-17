import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Center, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

const Card = ({ form }) => {

  if (!form) {
    return null;
  }

  return (
  
    <Box padding="20px" border="solid lightgrey 1px" margin="10px"borderRadius="4px">
      <Box alignItems="flex-end"> 
        <CloseIcon/>
      </Box>
    <Box>
      <strong>Name:</strong> {form.name}
    </Box>
    <Box>
      <strong>Surname:</strong> {form.lastname}
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
