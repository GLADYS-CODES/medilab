import React from 'react';

function AppointmentForm() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Make an Appointment</h2>
      <form className="grid grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md px-6 py-4">
          <h3 className="text-lg font-bold mb-4">Personal Information</h3>
          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="block w-full border border-gray-400 rounded-lg px-4 py-2"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="block w-full border border-gray-400 rounded-lg px-4 py-2"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              className="block w-full border border-gray-400 rounded-lg px-4 py-2"
            />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md px-6 py-4">
          <h3 className="text-lg font-bold mb-4">Appointment Details</h3>
          <div>
            <label htmlFor="doctor" className="block text-gray-700 font-bold mb-2">
              Doctor
            </label>
            <select
              id="doctor"
              className="block w-full border border-gray-400 rounded-lg px-4 py-2"
            >
              <option value="">Select a doctor</option>
              <option value="dr-john-doe">Dr. John Doe</option>
              <option value="dr-jane-smith">Dr. Jane Smith</option>
              <option value="dr-mike-jones">Dr. Mike Jones</option>
            </select>
          </div>
          <div className="mt-4">
            <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
              Date
            </label>
            <input
              id="date"
              type="date"
              className="block w-full border border-gray-400 rounded-lg px-4 py-2"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="time" className="block text-gray-700 font-bold mb-2">
              Time
            </label>
            <input
              id="time"
              type="time"
              className="block w-full border border-gray-400 rounded-lg px-4 py-2"
            />
          </div>
        </div>
        <div className="col-span-2">
          <div className="mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AppointmentForm;
``
