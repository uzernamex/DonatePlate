import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../styles/InsertMessage.scss";

const InsertMessageForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    fetch("http://localhost:8080/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        message: values.message,
        userId: 1,
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
    <div className="MessageForm">
      <h1>Contact Us</h1>
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
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <Field as="textarea" name="message" />
            <ErrorMessage name="message" component="div" className="error" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      {submissionStatus === "success" && (
        <p className="success-message">
          Thank you for contacting us, We will get back to you soon!
        </p>
      )}
      {submissionStatus === "error" && (
        <p className="error-message">
          Error submitting message. Please try again later.
        </p>
      )}
    </div>
  );
};

export default InsertMessageForm;
