import React from 'react';

function Contact() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="md:flex md:-mx-4">
          <div className="md:w-1/2 md:px-4">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="mb-8">
              We'd love to hear from you! Fill out the form below to send us a message and we'll get back to you as soon as possible.
            </p>
            <form className="max-w-md">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email address" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message"></textarea>
              </div>
              <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="md:w-1/2 md:px-4">
            <h2 className="text-3xl font-bold mb-6">Visit Us</h2>
            <p className="mb-8">
              Medilab Hospital is located at:
            </p>
            <ul className="mb-8">
              <li>123 Main Street</li>
              <li>New York, NY 10001</li>
            </ul>
            <p className="mb-4">Phone: 555-1234</p>
            <p className="mb-4">Email: info@medilabhospital.com</p>
            <h2 className="text-3xl font-bold mb-6">FAQs</h2>
            <ul>
              <li className="mb-4">
                <h3 className="text-xl font-bold mb-2">What are your hours of operation?</h3>
                <p>Our hospital is open 24 hours a day, 7 days a week.</p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-bold mb-2">Do you accept insurance?</h3>
                <p>Yes, we accept most major insurance plans.</p>
              </li>
              <li className="mb-4">
                
                    <h3 className="text-xl font-bold mb-2">Do I need to schedule an appointment for urgent care?</h3>
                    <p>No, you can walk in anytime for urgent care.</p>
                    </li>
                    </ul>
                    </div>
                    </div>
                    </div>
                    </section>
                    );
                    }
               export default Contact;     
