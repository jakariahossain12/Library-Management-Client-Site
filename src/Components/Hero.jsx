import React from 'react';

const Hero = () => {
  return (
    <div className="hero bg-slate-50 py-12 px-6 lg:px-20">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full max-w-7xl mx-auto gap-8">
        
        {/* Right side: Promo Banner */}
        <div className="flex-1 flex justify-center">
          <div className="bg-teal-700 rounded-2xl p-6 text-white max-w-sm shadow-lg relative overflow-hidden">
            <div className="bg-teal-600/50 text-xs px-2 py-1 rounded inline-block mb-3">
              visit-the-new-city-park.com
            </div>
            <h2 className="text-2xl font-bold mb-4">VISIT THE NEW CITY PARK</h2>
            <div className="rounded-xl overflow-hidden mb-4 bg-white p-2">
              <img
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80"
                alt="City Park"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <p className="text-xs text-teal-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>

        {/* Left side: Hero Text */}
        <div className="flex-1 text-left">
          <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-2">
            Let's make the best investment
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-4">
            There Is No Friend As Loyal As A Book
          </h1>
          <p className="py-2 text-gray-500 text-sm max-w-md mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad harum quibusdam, assumenda quia explicabo.
          </p>
          <button className="btn bg-teal-700 hover:bg-teal-800 text-white border-none rounded-md px-6">
            Shop now
          </button>
        </div>

      </div>
    </div>
  );
};

export default Hero;