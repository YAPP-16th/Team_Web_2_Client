import React from 'react';
import HashTag from './HashTag';
import useSearchInput from '../../../hooks/useSearchInput';
import '../../../pages/SearchInputPage/SearchInputPage.scss'

type InputProps = {
  click?: () => void;
}
const SearchInput1 = ({ click }: InputProps) => {
  const searchInput = useSearchInput();
  const location = searchInput.searchInputData.address

  return (
    <>
      <div className="search_elements_wrapper">
        <div className="input_header_wrapper">
          <span className="STEP">STEP 1</span>
          <span className="slash"> / location</span>
        </div>
        <div className="input_question_wrapper">
          <span className="Rectangle_ment">평소 자주 방문하는 곳의</span>
          <span className="Rectangle_ment">위치를 알려주세요.</span>
        </div>
      </div>
      <div className="contents" style={{ marginLeft: '20px' }}>
        <HashTag />
        <input
          type="text"
          placeholder={location}
          onClick={click}
          className="Rectangle_Long"
        ></input>
      </div>
    </>
  );
}

export default SearchInput1;