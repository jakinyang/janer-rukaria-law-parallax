import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import SectionWrapper from "./SectionWrapper";

const ContactForm: React.FC = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Required"),
      phone: Yup.string().required("Required"),
      message: Yup.string().required("Required")
  });

  const onSubmit = (values: any) => {
    console.log("Form data", values);
  };

  return (
    <SectionWrapper id="contactForm">
      <div className="container mx-auto my-4 pt-[6.5rem]">
        <h2 className="font-serif font-semibold text-3xl mb-5 md:text-5xl">
          Send us a message
        </h2>

        <div className="grid gap-10 lg:grid-cols-5">
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {(formik) => {
              return (
                <Form className="grid col-span-3 gap-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <Field
                      control="input"
                      type="text"
                      placeholder="First Name*"
                      name="firstName"
                      className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    />
                    <Field
                      control="input"
                      type="text"
                      placeholder="Last Name*"
                      name="lastName"
                      className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <Field
                      control="input"
                      type="email"
                      placeholder="Email*"
                      name="email"
                      className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    />
                    <Field
                      control="input"
                      type="text"
                      placeholder="Phone Number*"
                      name="phone"
                      className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <Field
                    control="input"
                    as="textarea"
                    placeholder="Message*"
                    name="message"
                    className="w-full h-48 bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  />
                  <button
                    type="submit"
                    disabled={!formik.isValid}
                    className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline disabled:opacity-70 hover:brightness-75"
                  >
                    Send Message
                  </button>
                </Form>
              );
            }}
          </Formik>

          <div className="px-8 py-12 bg-blue-900 rounded-2xl col-span-3 lg:col-span-2">
            <div className="flex flex-col text-white">
              <h3 className="font-serif font-bold text-3xl md:text-4xl">
                Drop in our office
              </h3>

              <div className="flex my-4 md:w-2/3 lg:w-full">
                <div className="flex flex-col">
                  <p className="text-2xl">Jane Gatwiri Rukaria</p>
                  <p>Barrister and Solicitor</p>
                  <p className="text-gray-400">
                    Suite 205 3256 Cambie Street, Vancouver, BC Canada V5Z 2W4
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactForm;
