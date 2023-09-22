import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <SectionWrapper id="contactForm">
      <div>
        {/* <h2>Contact Us</h2> */}

        {/* <form onSubmit={handleSubmit}>
        // <label htmlFor="name">Name:</label>
        //{" "}
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        // <label htmlFor="email">Email:</label>
        //{" "}
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        // <label htmlFor="message">Message:</label>
        //{" "}
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        // <button type="submit">Send Message</button>
        //{" "}
      </form> */}
        <div className="lg:mt-[250px] flex flex-col">
          <div className="container mx-auto my-4">
            <h1 className="font-bold text-3xl mb-5 md:text-5xl">
              Send us a message
            </h1>
            <div className="grid gap-10 lg:grid-cols-5">
              <div className="rounded-2xl lg:col-span-3">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <input
                      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="First Name*"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    <input
                      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Last Name*"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    <input
                      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="email"
                      placeholder="Email*"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <input
                      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="number"
                      placeholder="Phone*"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="my-4">
                    <textarea
                      placeholder="Message*"
                      onChange={handleChange}
                      id="message"
                      name="message"
                      value={formData.message}
                      className="w-full h-48 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    ></textarea>
                  </div>
                  <div className="my-2">
                    <button
                      type="submit"
                      className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              <div className="px-8 py-12 bg-blue-900 rounded-2xl lg:col-span-2">
                <div className="flex flex-col text-white">
                  <h1 className="font-bold text-3xl md:text-4xl">
                    Drop in our office
                  </h1>

                  <div className="flex my-4 md:w-2/3 lg:w-full">
                    {/* <div className="flex flex-col">
                      <i className="fas fa-map-marker-alt pt-2 pr-2" />
                    </div> */}
                    <div className="flex flex-col">
                      <h2 className="text-2xl">Jane Gatwiri Rukaria</h2>
                      <h3>Barrister and Solicitor</h3>
                      <p className="text-gray-400">
                        Suite 205 3256 Cambie Street, Vancouver, BC Canada V5Z
                        2W4
                      </p>
                    </div>
                  </div>

                  {/* <div className="flex my-4 w-2/3 lg:w-1/2">
                    <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full h-8 w-8 inline-block mx-1 text-center pt-1"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                    <a
                  href="https://www.linkedin.com/in/jane-g-rukaria-43707b22/?originalSubdomain=ca"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full h-8 w-8 inline-block mx-1 text-center pt-1"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    role="img"
                    viewBox="0 0 256 256"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
                    </g>
                  </svg>
                </a>
                  </div> */}
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
