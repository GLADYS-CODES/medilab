import React from 'react';

function Home() {
  return (
    <div name='home'className="bg-cover bg-center h-screen" style={{backgroundImage: "url('https://st.depositphotos.com/1011643/2307/i/450/depositphotos_23072528-stock-photo-african-mother-and-her-son.jpghttps://st.depositphotos.com/1011643/2307/i/450/depositphotos_23072528-stock-photo-african-mother-and-her-son.jpghttps://st.depositphotos.com/1011643/2307/i/450/depositphotos_23072528-stock-photo-african-mother-and-her-son.jpghttps://st.depositphotos.com/1011643/2307/i/450/depositphotos_23072528-stock-photo-african-mother-and-her-son.jpg')"}}>
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black mb-4">Welcome to Medilab</h1>
          <p className="text-2xl text-black">We're here when you need us - for world class care</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Home;
