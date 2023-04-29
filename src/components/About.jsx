import React from 'react';

function About() {
  return (
    <section name='about'className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 p-6">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Our History</h3>
                <p className="text-gray-700 text-base">
                  Medilab was founded in 1990 with the mission to provide affordable healthcare services to the community.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-6">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-700 text-base">
                  Our mission is to provide high-quality healthcare services to our patients and ensure their well-being.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-6">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <p className="text-gray-700 text-base">
                  At Medilab, we value integrity, compassion, and respect for our patients and their families.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 bg-blue-200 py-12 px-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Why Choose Medilab?</h2>
          <p className="text-gray-700 text-base text-center">
            Medilab is committed to providing the highest quality of care to our patients. Our team of experienced doctors and staff are dedicated to ensuring your well-being and comfort. We offer a wide range of services, from routine check-ups to complex surgeries, all in a state-of-the-art facility.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

