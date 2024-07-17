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
  Container
} from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { getForms } from '../../features/form/formSlice';
import Card from '../Card/Card'; 
import Cards from '../Cards/Cards';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
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

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const formId = new Date().getTime().toString();
    const storedForms = JSON.parse(localStorage.getItem('Forms')) || [];
    const updatedForms = [...storedForms, { id: formId, ...values }];
    localStorage.setItem('Forms', JSON.stringify(updatedForms));
    setFormData({ id: formId, ...values });
    setSubmitting(false);
    resetForm();
    
    console.log('info:', { id: formId, ...values });
  };

  return (
    <Container display="flex">
      <Box width="575px" height="741px">
        <Box width="411px">
          <h1>Example Form</h1>
          <Formik
            initialValues={{ firstName: '', lastName: '', email: '', phone: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Stack spacing={4}>
                  <Field name="firstName">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.firstName && form.touched.firstName}>
                        <FormLabel htmlFor="firstName">First Name</FormLabel>
                        <Flex align="center" justifyContent="space-between">
                          <Input {...field} id="firstName" borderRadius="4px" />
                          {form.errors.firstName && form.touched.firstName && (
                            <Tooltip label={form.errors.firstName} placement="right-end" bg="red.500">
                              <WarningIcon color="red.500" boxSize={5} ml={2} />
                            </Tooltip>
                          )}
                        </Flex>
                        <FormErrorMessage fontSize="sm">{form.errors.firstName}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="lastName">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.lastName && form.touched.lastName}>
                        <FormLabel htmlFor="lastName">Last Name</FormLabel>
                        <Flex align="center" justifyContent="space-between">
                          <Input {...field} id="lastName" borderRadius="4px" />
                          {form.errors.lastName && form.touched.lastName && (
                            <Tooltip label={form.errors.lastName} placement="right-end" bg="red.500">
                              <WarningIcon color="red.500" boxSize={5} ml={2} />
                            </Tooltip>
                          )}
                        </Flex>
                        <FormErrorMessage fontSize="sm">{form.errors.lastName}</FormErrorMessage>
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

                <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>

      <Box justifyContent="center" width="575px" p="20px">
         <Cards />
      </Box>
    </Container>
  );
};

export default FormExample;
