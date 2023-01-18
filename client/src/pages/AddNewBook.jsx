import axios from "axios";
import { Field, Formik, Form } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

const AddNewBook = () => {
  const AddSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Enter your name!"),
    category: Yup.string()
      .min(2, "Too Short!")
      .max(500, "Too Long!")
      .required("Enter the category!"),
    price: Yup.string()
      .min(2, "Too Short!")
      .max(500, "Too Long!")
      .required("Enter the Price!"),
    pageCount: Yup.string()
      .min(2, "Too Short!")
      .max(500, "Too Long!")
      .required("Enter the Page Count!"),
    discountPercent: Yup.string()
      .min(2, "Too Short!")
      .max(500, "Too Long!")
      .required("Enter the Discount Percent!"),
    authorId: Yup.string()
      .min(2, "Too Short!")
      .max(500, "Too Long!")
      .required("Enter the Author ID!"),
  });

  const [add, setAdd] = useState([]);
  function handleChange(event) {
    event.preventDefault();
    axios
    .post("http://localhost:8080/books",{
    
    })
    .then((res) => {
      setAdd(res.data);
    })
  }
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          category: "",
          pageCount: "",
          price: "",
          discountPercent: "",
          authorId: "",
        }}
        validationSchema={AddSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            {" "}
            <div className="formDiv">
              <Field
                className="formss"
                name="name"
                placeholder="enter name"
                onSubmit={handleChange}
              />
              {errors.name && touched.name ? (
                <div style={{ color: "red", fontSize: "12px" }}>
                  {errors.name}
                </div>
              ) : null}
              <br></br>
              <Field
                className="formss"
                name="category"
                placeholder=" enter lastname"
                onSubmit={handleChange}
              />
              {errors.category && touched.category ? (
                <div style={{ color: "red", fontSize: "12px" }}>
                  {errors.category}
                </div>
              ) : null}
              <br></br>
              <Field
                className="formss"
                name="price"
                type="price"
                placeholder="enter price"
                onSubmit={handleChange}
              />
              {errors.price && touched.price ? (
                <div style={{ color: "red", fontSize: "12px" }}>
                  {errors.price}
                </div>
              ) : null}
              <br></br>
              <Field
                className="formss"
                name="pageCount"
                placeholder="enter page count"
                onSubmit={handleChange}
              />
              {errors.pageCount && touched.pageCount ? (
                <div style={{ color: "red", fontSize: "12px" }}>
                  {errors.pageCount}
                </div>
              ) : null}
              <br></br>
              <Field
                className="formss"
                name="discountPercent"
                placeholder="enter discount percent"
                onSubmit={handleChange}
              />
              {errors.discountPercent && touched.discountPercent ? (
                <div style={{ color: "red", fontSize: "12px" }}>
                  {errors.discountPercent}
                </div>
              ) : null}
              <br></br>

              <Field
                className="formss"
                name="authorId"
                placeholder="enter author id"
                onSubmit={handleChange}
              />
              {errors.authorId && touched.authorId ? (
                <div style={{ color: "red", fontSize: "12px" }}>
                  {errors.authorId}
                </div>
              ) : null}
              <br></br>

              <div className="btn">
                {" "}
                <button id="submitBtnn" type="submit">
                  {" "}
                  Submit{" "}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddNewBook;
