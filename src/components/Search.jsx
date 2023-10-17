import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IoLocationSharp } from 'react-icons/io5';

function Search({ onSearch }) {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(location);
    setLocation('');
  };

  return (
    <section className="search container mx-auto">
      <form onSubmit={handleSubmit} className="flex gap-2 px-5">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Search location here"
          className="grow font-poppins text-sm px-2 py-2 rounded-lg outline-none focus:ring-2 ring-indigo-50"
        />
        <button
          type="submit"
          className="flex-grow-0 bg-slate-50 px-3 py-3 rounded"
        >
          <IoLocationSharp className="text-[#6499e9]" />
        </button>
      </form>
    </section>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
