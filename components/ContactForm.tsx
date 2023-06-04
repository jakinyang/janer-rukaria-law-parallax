import React, { useState } from 'react';
import Modal from 'react-modal';
import SectionWrapper from './SectionWrapper';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#333',
    borderRadius: '8px',
    padding: '2rem',
    width: "50%",
  },
};

Modal.setAppElement('#__next');

const ContactForm: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <SectionWrapper id='contactForm'>
      <div className="w-full flex flex-col items-center mt-8">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <button className="neobrutalist px-4 py-2" onClick={openModal}>
          Open Contact Form
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Contact Form"
        >
          <h3 className="text-xl font-bold mb-4">Contact Form</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="neobrutalist w-full px-2 py-1"
                type="text"
                id="name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="neobrutalist w-full px-2 py-1"
                type="email"
                id="email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="neobrutalist w-full px-2 py-1"
                id="message"
                rows={4}
              ></textarea>
            </div>
            <button
              className="neobrutalist px-4 py-2"
              type="submit"
              onClick={closeModal}
            >
              Send
            </button>
          </form>
        </Modal>
      </div>
    </SectionWrapper>
  );
};

export default ContactForm;
