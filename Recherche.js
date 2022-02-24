import React from 'react';
import Filter from './Filter'

const Recherche = ({ searchValue, setSearchValue }) => {

  return (
  <div>
      <Filter
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
  </div>)
};

export default Recherche;
