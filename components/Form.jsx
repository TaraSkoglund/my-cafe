"use client";
import { useFormik } from "formik";
export default function Form() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      tel: "",
      massage: "",
    },
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
            value={formik.values.firstName}
          />
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Efternamn"
            className="form-input border-black rounded mb-6 sm:w-full md:w-5/12 "
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </div>
        <div>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className="form-input border-black rounded mb-6 mr-6 sm:w-full md:w-5/12"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <input
            id="tel"
            name="tel"
            type="tel"
            placeholder="Nummer"
            className="form-input border-black rounded mb-6 sm:w-full md:w-5/12 "
            onChange={formik.handleChange}
            value={formik.values.tel}
          />
        </div>
        <div>
          <input
            id="massage"
            name="massage"
            type="text"
            placeholder="Medelande"
            className="form-input border-black rounded mb-6 w-full"
            onChange={formik.handleChange}
            value={formik.values.massage}
          />
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
