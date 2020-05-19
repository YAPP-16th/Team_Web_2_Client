import React, { useState } from 'react';
import SearchInput1 from '../../components/SearchInputItem/SearchInputStep1/SearchInput1';
import ZoneSearchPopUp from '../../components/SearchInputItem/SearchInputStep1/ZoneSearchPopup';
import Dialog from '../../components/Dialog/Dialog';
import styled from 'styled-components';
import useSearchInput from '../../hooks/useSearchInput';

type InputProps = {
  setData?: any;
  setIsHover?: any;
};

const SearchInputStep1Container = ({ setData, setIsHover }: InputProps) => {


  const onClickLocationHandler = () => {
    return setIsOpen(!isOpen)
  };

  const [location, setLocation] = useState('주소를 입력하세요' as string)
  const [isOpen, setIsOpen] = useState(false as boolean);
  const [upLoadedHashTag, setUploadedHashTag] = useState(false as boolean);
  const [uploacedLocation, setUploadedLocation] = useState(false as boolean);

  if (uploacedLocation && upLoadedHashTag) {
    setIsHover(true);
  };

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
            setLocation={setLocation}
            setData={setData}
            setUploadedLocation={setUploadedLocation}
          />
        </Dialog>
        :
        <SearchInput1
          click={onClickLocationHandler}
          location={location}
          setUploadedHashTag={setUploadedHashTag}
          setData={setData}
        />
      }
      {/* <MoreItemButton onClick={() => stepForwardHandler(stepParam)}>다음으로</MoreItemButton> */}
    </>
  );
}

export default SearchInputStep1Container;
