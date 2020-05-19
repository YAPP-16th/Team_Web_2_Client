import React from 'react';
import SearchInput3 from '../../components/SearchInputItem/SearchInputStep3/SearchInput3';
import useSearchInput from '../../hooks/useSearchInput';

const SearchInputStep3Container = ({ setData }: any) => {

  const searchInput = useSearchInput();
  return (
    <SearchInput3
      setData={setData} />
  );
}

export default SearchInputStep3Container;
