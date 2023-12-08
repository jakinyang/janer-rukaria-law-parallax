import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

import SectionWrapper from "../SectionWrapper";
import { useRef, useState } from "react";
import Image from "next/image";

const ContactForm: React.FC = () => {
  const [isValid, setIsValid] = useState(false);
  const [sending, setSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const recaptchaRef = useRef<any>(null);

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
    email: Yup.string().email("Invalid email format").required("Required"),
    phone: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
  });

  const form = useRef<HTMLFormElement>(null);

  const onSubmit = async () => {
    if (form.current && isValid) {
      setSending(true);
      const formData = new FormData(form.current);
      const formValues = Object.fromEntries(formData.entries());
      const params = {
        ...formValues,
        "g-recaptcha-response": captchaValue,
      }

      try {
        await emailjs // uncomment out from line 36-50 and replace line 38, 39, and 41 with values given from emailjs once account is created
          .send(
            process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE || "service_s4x21cm", // Service Key
            process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE || "contact_form_01", // Template Name
            params,
            process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY || "SdxDr4OEdOaAfkyfh" // Public Key
          )
        setEmailSent(true);
      } catch (error) {
        setSending(false);
        console.log(error);
      }
    }
  };

  // see recaptcha component on line 24; a sitekey is needed and can be set up fairly easily on the google recaptcha website
  const onChange = (captchaValue: any) => {
    setCaptchaValue(captchaValue);
    setIsValid(true);
  };

  return (
    <SectionWrapper id="contactForm">
      <div className="container mx-auto my-4 md:pt-[6.5rem] duration-200">
        <h2 className="font-serif font-semibold text-3xl mb-5 md:text-5xl">
          Send us a message
        </h2>

        <div className="grid gap-10 lg:grid-cols-5">
          {!emailSent ? (
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => {
                return (
                  <Form ref={form} className="grid col-span-3 gap-4">
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
                    <div className="flex justify-center">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={"6LeuEikpAAAAAMnqQD1XFgxuOCQDN52KDtqWTffP"}
                        onChange={onChange}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={!formik.isValid && !isValid}
                      className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline disabled:opacity-70 hover:brightness-75 flex items-center justify-center gap-4"
                    >
                      {sending ? "Sending" : "Send Message"}
                      {sending && <Image src="/images/loading.png" alt="" width={20} height={20} className="spin" />}
                    </button>
                  </Form>
                );
              }}
            </Formik>
          ) : (
            <div className="col-span-3">
              <p className="px-8 py-12 text-2xl text-center bg-blue-900 rounded-2xl h-full flex items-center justify-center">
                We look forward to reading your message!
              </p>
            </div>
          )}

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
