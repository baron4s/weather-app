import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import cloudy from '../assets/icons/partly_cloudy.png';

function LocationWeather({ id, name, main, message, dt }) {
  if (message) {
    return (
      <h2 className="font-poppins text-2xl text-slate-950/50 text-center mt-10 ">
        {message}
      </h2>
    );
  }

  return (
    <section className="locationWeather mx-5 my-6 px-8 py-3  backdrop-blur-sm bg-white/40 rounded-xl">
      <div className="today flex justify-between items-center font-poppins text-slate-800">
        <h2 className="text-xl font-semibold ">Today</h2>
        <span className="text-xs">{new Date().toDateString()}</span>
      </div>
      <div className="weather flex justify-between items-center mt-4 ">
        <p className="font-poppins text-6xl font-bold text-slate-800 relative">
          {Math.round(main.temp)}
          <span className="text-base absolute top-0">&#8451;</span>
        </p>
        <img src={cloudy} alt="weather" className="w-[100px] h-[100px]" />
      </div>
      <div className="location flex items-center gap-1 mt-4">
        <IoLocationSharp className="text-[#6499e9]" />
        <p className="font-poppins text-sm">{name}</p>
      </div>
    </section>
  );
}

export default LocationWeather;
