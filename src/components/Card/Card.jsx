import React from 'react';
import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../features/form/formSlice';

const Card = ({ form }) => {
  if (!form) {
    return null;
  }
const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(deleteCard(form.id));
    console.log(`Card ID: ${form.id}`);
  };

  return (
    <Box padding="20px" id={form.id} border="solid lightgrey 1px" margin="10px" borderRadius="4px">
      <Box mt={1}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text><strong>Name:</strong> {form.name}</Text>
          <IconButton
            icon={<CloseIcon />}
            size="sm"
            variant="ghost"
            aria-label="Close"
            _hover={{ bg: 'white' }}
            onClick={handleClick}
            id={form.id} 
          />
        </Flex>
        <Box mt={1}>
          <Text><strong>Lastname:</strong> {form.lastname}</Text>
        </Box>
        <Box mt={1}>
          <Text><strong>Email:</strong> {form.email}</Text>
        </Box>
        <Box mt={1}>
          <Text><strong>Phone:</strong> {form.phone}</Text>
        </Box>
        <Box mt={1}>
          <Text><strong>Message:</strong> {form.message}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
