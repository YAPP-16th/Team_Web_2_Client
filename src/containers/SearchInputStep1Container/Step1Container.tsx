import React, { useState } from 'react';
import SearchInput1 from '../../components/SearchInputItem/SearchInputStep1/SearchInput1';
import ZoneSearchPopUp from '../../components/SearchInputItem/SearchInputStep1/ZoneSearchPopup';
import Dialog from '../../components/Dialog/Dialog';
import styled from 'styled-components';
import useSearchInput from '../../hooks/useSearchInput';

type InputProps = {
  setIsHover?: any;
};

const SearchInputStep1Container = ({ setIsHover }: InputProps) => {

  const onClickLocationHandler = () => {
    return setIsOpen(!isOpen)
  };

  const [isOpen, setIsOpen] = useState(false as boolean);

  const searchInput = useSearchInput();

  const isHover = () => {
    (searchInput.searchInputData.address !== '주소를 입력하세요')
      &&
      (searchInput.searchInputData.addressTag !== 'tag')
      ? setIsHover(true)
      : setIsHover(false)
  }

  isHover();

  return (
    <>
      {isOpen
        ?
        <Dialog
          className="pop_up"
          display={isOpen}
          click={onClickLocationHandler}
        >
          <ZoneSearchPopUp
            close={onClickLocationHandler}
          />
        </Dialog>
        :
        <SearchInput1
          click={onClickLocationHandler}
        />
      }
    </>
  );
}

export default SearchInputStep1Container;
