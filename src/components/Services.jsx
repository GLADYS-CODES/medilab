
import React from 'react';

function Service() {
  const services = [
    {
      title: 'Cardiology',
      description: 'We offer a comprehensive range of cardiology services to our patients, including diagnostic testing, treatments, and procedures.',
      imageUrl: 'https://source.unsplash.com/600x400/?cardiology',
      imageAlt: 'Cardiology'
    },
    {
      title: 'Dermatology',
      description: 'Our dermatology services include treatments for various skin conditions, such as acne, eczema, psoriasis, and more.',
      imageUrl: 'https://source.unsplash.com/600x400/?dermatology',
      imageAlt: 'Dermatology'
    },
    {
      title: 'Endocrinology',
      description: 'We specialize in the diagnosis and treatment of endocrine disorders, including diabetes, thyroid disorders, and more.',
      imageUrl: 'https://source.unsplash.com/600x400/?endocrinology',
      imageAlt: 'Endocrinology'
    }
  ];

  const doctors = [
    {
      name: 'Dr. John Doe',
      specialization: 'Cardiologist',
      imageUrl: 'https://source.unsplash.com/300x300/?doctor',
      imageAlt: 'Dr. John Doe'
    },
    {
      name: 'Dr. Jane Doe',
      specialization: 'Dermatologist',
      imageUrl: 'https://source.unsplash.com/300x300/?doctor',
      imageAlt: 'Dr. Jane Doe'
    },
    {
      name: 'Dr. Mark Smith',
      specialization: 'Endocrinologist',
      imageUrl: 'https://source.unsplash.com/300x300/?doctor',
      imageAlt: 'Dr. Mark Smith'
    }
  ];

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-bold mb-5">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <div key={index} className="bg-blue-100 rounded-lg shadow-md p-5 hover:bg-blue-200">
            <img className="w-full h-48 object-cover mb-4 rounded-md" src={service.imageUrl} alt={service.imageAlt} />
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-800">{service.description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold my-10">Our Doctors</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {doctors.map((doctor, index) => (
          <div key={index} className="bg-blue-100 rounded-lg shadow-md p-5 hover:bg-blue-200">
            <img className="w-48 h-48 object-cover mb-4 rounded-full mx-auto" src={doctor.imageUrl} alt={doctor.imageAlt} />
            <h3 className="text-xl font-bold mb-2">{doctor.name}</h3>
            <p className="text-gray-800">{doctor.specialization}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
