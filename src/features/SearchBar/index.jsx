import React from 'react';
import MobileSearchBar from './components/MobileSearchBar';
import DesktopSearchBar from './components/DesktopSearchBar';

const SearchBar = () => {
  return (
    <>
      <MobileSearchBar />
      <DesktopSearchBar />
    </>
  );
};

export default SearchBar;
