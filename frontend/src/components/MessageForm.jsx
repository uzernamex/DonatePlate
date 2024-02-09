import React from "react";
import { Formik } from "formik";


const MessageForm = () => (
  <div>
    <h1>Contact Us</h1>
    <Formik
  initialValues={{ name: '', email: '', message: '' }}
  validate={values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    if (!values.message) {
      errors.message = 'Required';
    }
    return errors;
  }}
  onSubmit={(values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }}
>

    </Formik>
  </div>
);

export default MessageForm;