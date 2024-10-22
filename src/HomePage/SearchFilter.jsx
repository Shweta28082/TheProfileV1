import React, { useState } from 'react';


const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Search Term: ${searchTerm}, Location: ${location}, Category: ${category}`);
  };

  return (
    <section className="search-filter">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search models or actors"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">Select Location</option>
          <option value="mumbai">Mumbai</option>
          <option value="delhi">Delhi</option>
          <option value="bangalore">Bangalore</option>
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="model">Model</option>
          <option value="actor">Actor</option>
        </select>
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default SearchFilter;
