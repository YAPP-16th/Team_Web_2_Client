import React from 'react';
import SearchInput2 from '../../components/SearchInputItem/SearchInputStep2/SearchInput2';
import useSearchInput from '../../hooks/useSearchInput';

const SearchInputStep2Container = ({ setIsHover }: any) => {
  const searchInput = useSearchInput();

  (searchInput.searchInputData.transitMode !== [])
    && (searchInput.searchInputData.transferLimit !== 100)
    ? setIsHover(true)
    : setIsHover(false)
  return (
    <SearchInput2 />
  );
}

export default SearchInputStep2Container;
