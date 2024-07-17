import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  FormErrorMessage,
  Tooltip,
  Flex,
  Stack,
  FormHelperText,
  Container,
  Center,
} from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { getForms } from '../../features/form/formSlice';
import Cards from '../Cards/Cards';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  lastname: Yup.string().required('Lastname is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .length(9, 'Must be exactly 9 digits')
    .nullable(),
  message: Yup.string().required('Message is required'),
});

const FormExample = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getForms());
  }, [dispatch]);

  const [formData, setFormData] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const formId = new Date().getTime().toString();
    const storedForms = JSON.parse(localStorage.getItem('Forms')) || [];
    const updatedForms = [...storedForms, { id: formId, ...values }];
    localStorage.setItem('Forms', JSON.stringify(updatedForms));
    setFormData({ id: formId, ...values });
    setSubmitting(false);
    resetForm();

    console.log('info:', { id: formId, ...values });

    setFormSubmitted(!formSubmitted);
  };

  return (
    <Container display="flex" flexDirection={{ base: 'column', md: 'row' }}>
      <Box justifyContent={'center'} width={{ base: '100%', md: '575px' }} marginBottom={{ base: '50px', md: '0' }}>
        <Center>
          <Box width="100%">
            <h1>Example Form</h1>
            <Formik
              initialValues={{ name: '', lastname: '', email: '', phone: '', message: '' }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Stack spacing={4}>
                    <Field name="name">
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.name && form.touched.name}>
                          <FormLabel htmlFor="name">Name</FormLabel>
                          <Flex align="center" justifyContent="space-between">
                            <Input {...field} id="name" borderRadius="4px" />
                            {form.errors.name && form.touched.name && (
                              <Tooltip label={form.errors.name} placement="right-end" bg="red.500">
                                <WarningIcon color="red.500" boxSize={5} ml={2} />
                              </Tooltip>
                            )}
                          </Flex>
                          <FormErrorMessage fontSize="sm">{form.errors.name}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="lastname">
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.lastname && form.touched.lastname}>
                          <FormLabel htmlFor="lastname">Lastname</FormLabel>
                          <Flex align="center" justifyContent="space-between">
                            <Input {...field} id="lastname" borderRadius="4px" />
                            {form.errors.lastname && form.touched.lastname && (
                              <Tooltip label={form.errors.lastname} placement="right-end" bg="red.500">
                                <WarningIcon color="red.500" boxSize={5} ml={2} />
                              </Tooltip>
                            )}
                          </Flex>
                          <FormErrorMessage fontSize="sm">{form.errors.lastname}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="email">
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.email && form.touched.email}>
                          <FormLabel htmlFor="email">Email Address</FormLabel>
                          <Flex align="center" justifyContent="space-between">
                            <Input {...field} id="email" borderRadius="4px" />
                            {form.errors.email && form.touched.email && (
                              <Tooltip label={form.errors.email} placement="right-end" bg="red.500">
                                <WarningIcon color="red.500" boxSize={5} ml={2} />
                              </Tooltip>
                            )}
                          </Flex>
                          <FormErrorMessage fontSize="sm">{form.errors.email}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="phone">
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.phone && form.touched.phone}>
                          <FormLabel htmlFor="phone">Phone Number</FormLabel>
                          <Flex align="center" justifyContent="space-between">
                            <Input {...field} id="phone" borderRadius="4px" />
                            {form.errors.phone && form.touched.phone && (
                              <Tooltip label={form.errors.phone} placement="right-end" bg="red.500">
                                <WarningIcon color="red.500" boxSize={5} ml={2} />
                              </Tooltip>
                            )}
                          </Flex>
                          <FormHelperText>Optional - we never use this for marketing</FormHelperText>
                          <FormErrorMessage fontSize="sm">{form.errors.phone}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="message">
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.message && form.touched.message}>
                          <FormLabel htmlFor="message">Message</FormLabel>
                          <Flex align="center" justifyContent="space-between">
                            <Input {...field} id="message" borderRadius="4px" />
                            {form.errors.message && form.touched.message && (
                              <Tooltip label={form.errors.message} placement="right-end" bg="red.500">
                                <WarningIcon color="red.500" boxSize={5} ml={2} />
                              </Tooltip>
                            )}
                          </Flex>
                          <FormErrorMessage fontSize="sm">{form.errors.message}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Stack>

                  <Button mt={4} bg="black" isLoading={isSubmitting} type="submit" color="white">
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </Center>
      </Box>

      <Box flex="1" justifyContent={'center'} marginLeft={{ md: '30px' }}>
        <Cards formSubmitted={formSubmitted} />
      </Box>
    </Container>
  );
};

export default FormExample;
