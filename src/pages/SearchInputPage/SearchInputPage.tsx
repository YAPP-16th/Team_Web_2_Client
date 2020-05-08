import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import './ZoneSearchPage.scss';
import SearchInput from '../../containers/SearchInputContainer/SearchInput';


const SearchInputPage = () => {
  return (
    <>
      <div style={{ backgroundColor: 'black' }}>
        <SearchInput />
      </div>
    </>
  );
};

export default SearchInputPage;
