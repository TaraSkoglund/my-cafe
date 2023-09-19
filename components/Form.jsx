"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function Form() {
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
      massage: Yup.string()
        .max(150, "Must be 150 characters or less")
        .required("required"),
      tel: Yup.string()
        .max(10, "Must be 10 numbers or less")
        .required("required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <section className="m-12 font-serif">
      <h1 className="text-2xl py-6">Kontakta oss</h1>
      <form action="#" className="px-4" onSubmit={formik.handleSubmit}>
        <div>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Förnamn"
            className="form-input border-black rounded mb-6 mr-6 sm:w-full md:w-5/12"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <p className="mb-6">{formik.errors.firstName}</p>
          ) : null}
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Efternamn"
            className="form-input border-black rounded mb-6 sm:w-full md:w-5/12 "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <p className="mb-6">{formik.errors.lastName}</p>
          ) : null}
        </div>
        <div>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className="form-input border-black rounded mb-6 mr-6 sm:w-full md:w-5/12"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="mb-6">{formik.errors.email}</p>
          ) : null}
          <input
            id="tel"
            name="tel"
            type="tel"
            placeholder="Nummer"
            className="form-input border-black rounded mb-6 sm:w-full md:w-5/12 "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.tel}
          />
          {formik.touched.tel && formik.errors.tel ? (
            <p className="mb-6">{formik.errors.tel}</p>
          ) : null}
        </div>
        <div>
          <input
            id="massage"
            name="massage"
            type="text"
            placeholder="Meddelande"
            className="form-input border-black rounded mb-6 w-full"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.massage}
          />
          {formik.touched.massage && formik.errors.massage ? (
            <p className="mb-6">{formik.errors.massage}</p>
          ) : null}
          <button
            type="submit"
            className="py-1 px-6 border rounded-sm border-black hover:shadow-2xl"
          >
            Skicka
          </button>
        </div>
      </form>
    </section>
  );
}
