import React, { useState } from "react";
import { Formik } from "formik";
import "../styles/donation.scss";
import "../styles/address.scss";
// import data_queries from '../../../../backend/db/queries/data_queries';

const FoodDonationForm = ({}) => {
  //var to track the state
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = async (values, { setSubmitting }) => {
    try {
      console.log("Form sumitted with values:", values);
      await savedDonationForm(values);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error saving form data:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="donation-form-container">
      {isSubmitted ? (
        <div>
          <h1>Form Submission Received!</h1>
        </div>
      ) : (
        <>
          <h1> Food Donations </h1>
          <Formik
            initialValues={{
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
              City: "",
              Province: "",
              PostalCode: "",
              Country: "Canada",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.phone) {
                errors.phone = "Required";
              } else if (!/[0-9]/i.test(values.phone)) {
                errors.phone = "Invalid phone number";
              }
              if (!values.PostalCode) {
                errors.PostalCode = "Format = 'A1A 1A1";
              }
              return errors;
            }}
            onSubmit={handleFormSubmit}
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
              <form className="donation-entries" onSubmit={handleSubmit}>
                <label className="form-field">
                  Title:
                  <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                  />
                </label>

                <label className="form-field">
                  Description:
                  <input
                    type="text"
                    name="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                  />
                  {errors.description &&
                    touched.description &&
                    errors.description}
                </label>

                <label className="form-field">
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

                <label className="form-field">
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

                <label className="form-field">
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

                <label className="form-field">
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

                <label className="form-field">
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

                <label className="form-field">
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

                <label className="form-field">
                  Address:
                  <input
                    type="text"
                    name="Address_1"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Address_1}
                  />
                </label>

                <label className="form-field">
                  Address (line 2):
                  <input
                    type="text"
                    name="Address_2"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Address_2}
                  />
                </label>

                <label className="form-field">
                  City:
                  <input
                    type="text"
                    name="city"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.City}
                  />
                </label>

                <label className="form-field">
                  Province:
                  <input
                    type="text"
                    name="province"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Province}
                  />
                  {errors.Province && touched.Province && errors.Province}
                </label>

                <label className="form-field">
                  Postal Code:
                  <input
                    type="text"
                    name="postal_code"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Postal_code}
                  />
                  {errors.Postal_code &&
                    touched.Postal_code &&
                    errors.Postal_code}
                </label>

                <label className="form-field">
                  Country:
                  <input
                    type="text"
                    name="Country"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Country}
                  />
                </label>

                <button
                  className="submit-button"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
};

export default FoodDonationForm;
