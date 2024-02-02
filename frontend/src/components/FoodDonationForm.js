import React from "react";
import { Formik } from "formik";

const FoodDonationForm = () => (
  <div>
    <h1>Food Donations</h1>
    <Formik
      initialValues={{
        description: "",
        start_date: "",
        end_date: "",
        phone: "",
        preferred_food: "",
        allergies: "",
        target_amount_in_grams: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.phone) {
          errors.phone = "Required";
        } else if (!/[0-9]/i.test(values.phone)) {
          errors.phone = "Invalid phone number";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log("values:", values);
        fetch("http://localhost:8080/api/food-donations", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle success response from the server
            console.log("Form submitted successfully!", data);
          })
          .catch((error) => {
            // Handle error
            console.error("Error submitting form:", error);
          })
          .finally(() => {
            setSubmitting(false); // Reset the form submission state
          });
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
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <label>
            description
            <input
              type="text"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            {errors.description && touched.description && errors.description}
          </label>

          <label>
            Start Date:
            <input
              type="text"
              name="start_date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.start_date}
            />
            {errors.start_date && touched.start_date && errors.start_date}
          </label>

          <label>
            End Date:
            <input
              type="text"
              name="end_date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.end_date}
            />
            {errors.end_date && touched.end_date && errors.end_date}
          </label>

          <label>
            Phone:
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
            {errors.phone && touched.phone && errors.phone}
          </label>

          <label>
            Preferred Food:
            <input
              type="text"
              name="preferred_food"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.preferred_food}
            />
            {errors.preferred_food &&
              touched.preferred_food &&
              errors.preferred_food}
          </label>

          <label>
            Allergies:
            <input
              type="text"
              name="allergies"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.allergies}
            />
            {errors.allergies && touched.allergies && errors.allergies}
          </label>

          <label>
            Target Amount in Grams:
            <input
              type="text"
              name="target_amount_in_grams"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.target_amount_in_grams}
            />
            {errors.target_amount_in_grams &&
              touched.target_amount_in_grams &&
              errors.target_amount_in_grams}
          </label>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default FoodDonationForm;
