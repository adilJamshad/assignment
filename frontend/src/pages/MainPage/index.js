import React from "react";
import { Formik, Form } from "formik";

import { Box, Typography } from "@material-ui/core";

import Input from "../../components/Input";
import Button from "../../components/Button";
import myImage from "../../assets/myImage.png";

const MainPage = ({ volumeMutation }) => {
  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Box bgcolor="#fff" width="40%" p={7} mt={5}>
        <Box my={3}>
          <Typography variant="h6">Add a new volume</Typography>
        </Box>
        <Formik
          initialValues={{ volume: "" }}
          onSubmit={(values) => volumeMutation.mutate(values)}
        >
          <Form>
            <Box my={4}>
              <Input name="volume" type="number" />
            </Box>
            <Button title="Add" type="submit" variant="contained" />
          </Form>
        </Formik>
        <Box width="100%" my={5} display="flex" justifyContent="center">
          <img src={myImage} alt="work flow" />
        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;
