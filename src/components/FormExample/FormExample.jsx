import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, FormControl, FormLabel, Input, Box, FormErrorMessage, Tooltip, Flex, Stack, Center } from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';
import ChakraTheme from "../../ChakraTheme";

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  surname: Yup.string().required('Surname is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
});

const FormExample = () => {
  return (
    <Center>
      <Box width="575px" height="741px">
        <Box width="411px">
          <h1>Ejemplo formulario </h1>
     
        <Formik
          initialValues={{ name: '', surname: '', email: '', phone: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Stack spacing={4}>
                <Field name="name">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel htmlFor="name">Name d</FormLabel>
                      <Flex align="center" justifyContent="space-between" width="411px">
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

                <Field name="surname">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.surname && form.touched.surname}>
                      <FormLabel htmlFor="surname">Surname</FormLabel>
                      <Flex align="center" justifyContent="space-between" width="411px">
                        <Input {...field} id="surname" borderRadius="4px" />
                        {form.errors.surname && form.touched.surname && (
                          <Tooltip label={form.errors.surname} placement="right-end" bg="red.500">
                            <WarningIcon color="red.500" boxSize={5} ml={2} />
                          </Tooltip>
                        )}
                      </Flex>
                      <FormErrorMessage fontSize="sm">{form.errors.surname}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="email">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email}>
                      <FormLabel htmlFor="email">Email Address</FormLabel>
                      <Flex align="center" justifyContent="space-between" width="411px">
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
                      <Flex align="center" justifyContent="space-between" width="411px">
                        <Input {...field} id="phone" borderRadius="4px" />
                        {form.errors.phone && form.touched.phone && (
                          <Tooltip label={form.errors.phone} placement="right-end" bg="red.500">
                            <WarningIcon color="red.500" boxSize={5} ml={2} />
                          </Tooltip>
                        )}
                      </Flex>
                      <FormErrorMessage fontSize="sm">{form.errors.phone}</FormErrorMessage>
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
    </Center>
  );
};

export default FormExample;
