import React, { useState, useEffect } from "react";
import MediaCard from "./MediaCard";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, Typography, Box, Button, Container } from "@mui/material";
import Navigation from "./Navigation";
import { useAuth0 } from "@auth0/auth0-react";

const FoodDonationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { user } = useAuth0();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    start_date: "",
    end_date: "",
    phone: "",
    preferred_food: "",
    allergies: "",
    target_amount_in_grams: "",
    Address_1: "",
    Address_2: "",
    city: "",
    province: "",
    postal_code: "",
    Country: "Canada",
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/food-donations")
      .then((response) => response.json())
      .then((data) => setFormData(data))
      .catch((error) => console.error("Error fetching form data", error));
  }, []);

  const handleSubmit = async (values, { setSubmitting }) => {
    const userId = window.sessionStorage.getItem("userId");
    try {
      const foodDonationResponse = await fetch(
        "http://localhost:8080/api/food-donations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            
          },
          body: JSON.stringify({...values, user_id: userId}),

          
        }
      );
      setFormData(values);
      const response = await foodDonationResponse.json();
      console.log("response", response);
      if (foodDonationResponse.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Failed to save food donation");
      }
    } catch (error) {
      console.error("Error saving form data:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navigation user={user} />
      <Container maxWidth="md">
        <div className="donation-form-container">
          {isSubmitted ? (
            <div>
              <h1>Form Submission Received; Thank you!</h1>
              <div className="submitted-data-new-donation">
                <MediaCard formData={formData} />
              </div>
            </div>
          ) : (
            <>
              <Typography variant="h2">Food Drive Form</Typography>
              <Formik
                initialValues={formData}
                onSubmit={handleSubmit}
                validate={(values) => {
                  const errors = {};
                  if (!values.phone) {
                    errors.phone = "Required";
                  } else if (!/^[0-9]+$/.test(values.phone)) {
                    errors.phone = "Invalid phone number";
                  }
                  if (
                    !values.postal_code ||
                    !/^[A-Za-z]\d[A-Za-z]\s?\d[A-Za-z]\d$/.test(
                      values.postal_code
                    )
                  ) {
                    errors.postal_code = "Invalid postal code format";
                  }
                  return errors;
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <Form className="donation-entries" onSubmit={handleSubmit}>
                    <Box mb={2}>
                      <label htmlFor="title">Title</label>
      <Field
        as={TextField}
        type="text"
        name="title"
        variant="outlined"
        fullWidth
        size="small"
        
      />
      <ErrorMessage name="title" component="div" className="error" />
    </Box>
    <Box mb={2}>
      <label htmlFor="description">Description</label>
      <Field
        as={TextField}
        type="text"
        name="description"
        variant="outlined"
        fullWidth
        size="small"
      />
      <ErrorMessage name="description" component="div" className="error" />
    </Box>

    <Box mb={2}>
      <label htmlFor="start_date">Start Date</label>
      <Field
        as={TextField}
        type="text"
        name="start_date"
        variant="outlined"
        fullWidth
        placeholder="YYYY-MM-DD"
        size="small"
      />
      <ErrorMessage name="start_date" component="div" className="error" />
    </Box>
    <Box mb={2}>
      <label htmlFor="end_date">End Date</label>
      <Field
        as={TextField}
        type="text"
        name="end_date"
        variant="outlined"
        fullWidth
        placeholder="YYYY-MM-DD"
        size="small"
      />
      <ErrorMessage name="end_date" component="div" className="error" />
    </Box>

    <Box mb={2}>
      <label htmlFor="phone">Phone</label>
      <Field
        as={TextField}
        type="text"
        name="phone"
        variant="outlined"
        fullWidth
        placeholder="'1234567890'"
        size="small"
      />
      <ErrorMessage name="phone" component="div" className="error" />
    </Box>
    <Box mb={2}>
      <label htmlFor="preferred_food">Preferred Food</label>
      <Field
        as={TextField}
        type="text"
        name="preferred_food"
        variant="outlined"
        fullWidth
        size="small"
      />
      <ErrorMessage name="preferred_food" component="div" className="error" />
    </Box>
    <Box mb={2}>
      <label htmlFor="allergies">Allergies</label>
      <Field
        as={TextField}
        type="text"
        name="allergies"
        variant="outlined"
        fullWidth
        size="small"
      />
      <ErrorMessage name="allergies" component="div" className="error" />
    </Box>

  
    <Box mb={2}>
      <label htmlFor="target_amount_in_grams">Target Amount in Grams</label>
      <Field
        as={TextField}
        type="text"
        name="target_amount_in_grams"
        variant="outlined"
        fullWidth
        size="small"
      />
      <ErrorMessage name="target_amount_in_grams" component="div" className="error" />
    </Box>
    <Box mb={2}>
      <label htmlFor="Address_1">Address</label>
      <Field
        as={TextField}
        type="text"
        name="Address_1"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Box>
    <Box mb={2}>
      <label htmlFor="Address_2">Address (line 2)</label>
      <Field
        as={TextField}
        type="text"
        name="Address_2"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Box>
    <Box mb={2}>
      <label htmlFor="city">City</label>
      <Field
        as={TextField}
        type="text"
        name="city"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Box>
    <Box mb={2}>
      <label htmlFor="province">Province</label>
      <Field
        as={TextField}
        type="text"
        name="province"
        variant="outlined"
        fullWidth
        size="small"
      />
      <ErrorMessage name="province" component="div" className="error" />
    </Box>
    <Box mb={2}>
      <label htmlFor="postal_code">Postal Code</label>
      <Field
        as={TextField}
        type="text"
        name="postal_code"
        variant="outlined"
        fullWidth
        placeholder="'M4P 1N8'"
        size="small"
      />
      <ErrorMessage name="postal_code" component="div" className="error" />
    </Box>
    <Box mb={2}>
      <label htmlFor="Country">Country</label>
      <Field
        as={TextField}
        type="text"
        name="Country"
        variant="outlined"
        size="small"
        fullWidth
      />
    </Box>
    
    <Button
                      className="submit-button"
                      type="submit"
                      disabled={isSubmitting}
                      variant="contained"
                      color="primary"
                    >
                      Submit
                    </Button>
                    <Box mb={6} />
                  </Form>
                )}
              </Formik>
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default FoodDonationForm;
