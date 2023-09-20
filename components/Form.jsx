"use client";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

export default function Form() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      tel: "",
      massage: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("required"),
      email: Yup.string().email("Invalid email adress").required("required"),
      tel: Yup.string()
        .max(11, "Must be 12 numbers or less")
        .min(9, "Must be 10 numbers or more")
        .required("required"),
      massage: Yup.string()
        .max(150, "Must be 150 characters or less")
        .min(5, "Must be 5 characters or more")
        .required("required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      setFormSubmitted(true);
    },
  });

  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => {
        setFormSubmitted(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  return (
    <section className="m-12 font-serif">
      <h1 className="text-2xl py-6">Kontakta oss</h1>
      <form
        action="#"
        className="px-4 max-w-4xl"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-wrap md:flex-nowrap gap-6 mb-6">
          <div className="flex flex-col w-full">
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Förnamn"
              className="form-input border-black rounded md:basis-1/2 basis-full"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <p className="mb-6">{formik.errors.firstName}</p>
            ) : null}
          </div>
          <div className="flex flex-col w-full">
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Efternamn"
              className="form-input border-black rounded md:basis-1/2 basis-full  "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <p className="mb-6">{formik.errors.lastName}</p>
            ) : null}
          </div>
        </div>
        <div className="flex gap-6 mb-6 flex-wrap md:flex-nowrap">
          <div className="flex flex-col w-full">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="form-input border-black rounded md:basis-1/2 basis-full"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="mb-6">{formik.errors.email}</p>
            ) : null}
          </div>
          <div className="flex flex-col w-full">
            <input
              id="tel"
              name="tel"
              type="number"
              placeholder="Nummer"
              className="form-input border-black rounded md:basis-1/2 basis-full"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.tel}
            />
            {formik.touched.tel && formik.errors.tel ? (
              <p className="mb-6">{formik.errors.tel}</p>
            ) : null}
          </div>
        </div>
        <div>
          <div className="mb-6">
            <input
              id="massage"
              name="massage"
              type="text"
              placeholder="Meddelande"
              className="form-input border-black rounded w-full"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.massage}
            />
            {formik.touched.massage && formik.errors.massage ? (
              <p className="mb-6">{formik.errors.massage}</p>
            ) : null}
          </div>
          <button
            type="submit"
            className="py-1 px-6 border rounded-sm border-black hover:shadow-2xl"
          >
            Skicka
          </button>
        </div>
      </form>

      {formSubmitted && (
        <p className="italic mx-5 my-6 duration-300">
          Tack för meddelandet! <br /> Vi hör av oss så fort vi kan.
        </p>
      )}
    </section>
  );
}
