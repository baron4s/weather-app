import React from 'react';
import PropTypes, { number } from 'prop-types';
import { IoLocationSharp } from 'react-icons/io5';
import { getIcon } from '../utils/api/weather';

function LocationWeather({ name, main, message, weather }) {
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
        <div>
          <p className="font-poppins text-6xl font-bold text-slate-800 relative">
            {Math.round(main.temp)}
            <span className="text-base absolute top-0">&#8451;</span>
          </p>
          <p className="font-poppins text-center">{weather[0].main}</p>
        </div>
        <img
          src={getIcon(weather[0].icon)}
          alt="weather"
          className="w-[100px] h-[100px]"
        />
      </div>
      <div className="location flex items-center gap-1 mt-4">
        <IoLocationSharp className="text-[#6499e9]" />
        <p className="font-poppins text-sm">{name}</p>
      </div>
    </section>
  );
}

LocationWeather.propTypes = {
  name: PropTypes.string.isRequired,
  main: PropTypes.objectOf(number).isRequired,
  message: PropTypes.string.isRequired,
  weather: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      main: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default LocationWeather;
