import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, Button, Typography, Container, Box } from "@mui/material";


const InsertMessageForm = ({ foodDonationId }) => {
  const [submissionStatus, setSubmissionStatus] = useState(null);
 
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    fetch("http://localhost:8080/api/insert-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        message: values.message,
        foodDonation: foodDonationId
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        setSubmissionStatus("success");
        resetForm(); // Reset form to clear the content
      })
      .catch((error) => {
        console.error("Error inserting message:", error);
        setSubmissionStatus("error");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        overflowY: "auto",
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box p={4}>
        <Typography variant="h2">Contact Us</Typography>
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Required";
            }
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.message) {
              errors.message = "Required";
            }
            return errors;
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Box mb={2}>
              <label htmlFor="name">Name</label>
              <Field
                as={TextField}
                type="text"
                name="name"
                variant="outlined"
                fullWidth
              />
               <Typography variant="body2" sx={{ color: "red" }}>
              <ErrorMessage name="name" component="div" className="error" sx={{ color: "red" }} />
              </Typography>
            </Box>
            <Box mb={2}>
              <label htmlFor="email">Email</label>
              <Field
                as={TextField}
                type="email"
                name="email"
                variant="outlined"
                fullWidth
              />
               <Typography variant="body2" sx={{ color: "red" }}>
              <ErrorMessage name="email" component="div" className="error" sx={{ color: "red" }} />
              </Typography>
            </Box>
            <Box mb={2}>
              <label htmlFor="message">Message</label>
              <Field
                as={TextField}
                type="textarea"
                name="message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
              <Typography variant="body2" sx={{ color: "red" }}>
              <ErrorMessage name="message" component="div" className="error" sx={{ color: "red" }} />
              </Typography>
            </Box>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Form>
        </Formik>
        {submissionStatus === "success" && (
          <Typography
            variant="body1"
            className="success-message"
            sx={{ color: "green" }} 
          >
            Thank you for contacting us, We will get back to you soon!
          </Typography>
        )}
        {submissionStatus === "error" && (
          <Typography variant="body1" className="error-message">
            Error submitting message. Please try again later.
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default InsertMessageForm;
