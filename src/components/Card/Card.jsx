import React, { useState } from 'react';
import { Box, Flex, IconButton, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Center } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../features/form/formSlice';

const Card = ({ form }) => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = () => {
    dispatch(deleteCard(form.id));
    console.log(`Card ID: ${form.id} deleted`);
    onClose();
  };

  const toggleConfirmation = () => {
    onOpen();
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
            onClick={toggleConfirmation}
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
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <Center>
                <Text>Are you sure you want to delete this card?</Text>
              </Center>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="red" mr={3} onClick={handleDelete}>
                Yes
              </Button>
              <Button variant="ghost" onClick={onClose}>
                No
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default Card;
