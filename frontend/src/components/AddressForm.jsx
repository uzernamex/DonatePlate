// // import React from "react";
// // import { Formik } from "formik";
// // import "../styles/address.scss";

// // const AddressForm = () => (
// //   <div className="address-form-container">
// //     <h1> Address </h1>
// //     <Formik
// //       initialValues={{
// //         Address_1: "",
// //         Address_2: "",
// //         City: "",
// //         Province: "",
// //         PostalCode: "",
// //         Country: "Canada",
// //       }}
// //       validate={(values) => {
// //         const errors = {};
// //         if (!values.PostalCode) {
// //           errors.PostalCode = "Format = 'A1A 1A1";
// //         }
// //         return errors;
// //       }}
// //       onSubmit={(values, { setSubmitting }) => {
// //         console.log("values:", values);


// //         fetch("http://localhost:8080/api/address-form", {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify(values),
// //         })
// //           .then((response) => response.json())
// //           .then((data) => {
// //             console.log("Form submitted successfully!", data);
// //           })
// //           .catch((error) => {
// //             console.error("Error submitting form:", error);
// //           })
// //           .finally(() => {
// //             setSubmitting(false);
// //           });
// //       }}
// //     >
// //       {({
// //         values,
// //         errors,
// //         touched,
// //         handleChange,
// //         handleBlur,
// //         handleSubmit,
// //         isSubmitting,
// //       }) => (
// //         <form className="address-entries" onSubmit={handleSubmit}>
// //           <label className="form-field">
// //             Address:
// //             <input
// //               type="text"
// //               name="title"
// //               onChange={handleChange}
// //               onBlur={handleBlur}
// //               value={values.title}
// //             />
// //           </label>

// //           <label className="form-field">
// //             Address (line 2):
// //             <input
// //               type="text"
// //               name="description"
// //               onChange={handleChange}
// //               onBlur={handleBlur}
// //               value={values.description}
// //             />
// //             {errors.description && touched.description && errors.description}
// //           </label>

// //           <label className="form-field">
// //             City:
// //             <input
// //               type="text"
// //               name="start_date"
// //               onChange={handleChange}
// //               onBlur={handleBlur}
// //               value={values.start_date}
// //             />
// //             {errors.start_date && touched.start_date && errors.start_date}
// //           </label>

// //           <label className="form-field">
// //             Province:
// //             <input
// //               type="text"
// //               name="end_date"
// //               onChange={handleChange}
// //               onBlur={handleBlur}
// //               value={values.end_date}
// //             />
// //             {errors.end_date && touched.end_date && errors.end_date}
// //           </label>

// //           <label className="form-field">
// //             Postal Code:
// //             <input
// //               type="text"
// //               name="phone"
// //               onChange={handleChange}
// //               onBlur={handleBlur}
// //               value={values.phone}
// //             />
// //             {errors.phone && touched.phone && errors.phone}
// //           </label>

// //           <label className="form-field">
// //             Country:
// //             <input
// //               type="text"
// //               name="preferred_food"
// //               onChange={handleChange}
// //               onBlur={handleBlur}
// //               value={values.preferred_food}
// //             />
// //             {errors.preferred_food &&
// //               touched.preferred_food &&
// //               errors.preferred_food}
// //           </label>

// //           <button
// //             className="submit-button"
// //             type="submit"
// //             disabled={isSubmitting}
// //           >
// //             Submit
// //           </button>
// //         </form>
// //       )}
//     </Formik>
//   </div>
// );

// export default AddressForm;