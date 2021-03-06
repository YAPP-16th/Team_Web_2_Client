import React from 'react';
import SearchInput3 from '../../components/SearchInputItem/SearchInputStep3/SearchInput3';
import useSearchInput from '../../hooks/useSearchInput';

const SearchInputStep3Container = ({ setIsHover }: any) => {

  const searchInput = useSearchInput();

  (searchInput.searchInputData.maxTime !== 0)
    ? setIsHover(true)
    : setIsHover(false)
  return (
    <SearchInput3 />
  );
}

export default SearchInputStep3Container;
