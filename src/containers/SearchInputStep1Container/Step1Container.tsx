import React, { useState } from 'react';
// import '../../pages/SearchInputPage/ZoneSearchPage.scss';
import SearchInput1 from '../../components/SearchInputItem/SearchInputStep1/SearchInput1';
import ZoneSearchPopUp from '../../components/SearchInputItem/SearchInputStep1/ZoneSearchPopup';
import Dialog from '../../components/Dialog/Dialog';

type InputProps = {
  click?: () => void;
};

const SearchInputStep1Container = ({ click }: InputProps) => {

  const onClickLocationHandler = () => {
    return setIsOpen(!isOpen)
  };

  const [location, setLocation] = useState('주소를 입력하세요' as string)
  const [isOpen, setIsOpen] = useState(false as boolean);

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
          //@ts-ignore
          setLocation={setLocation}
          />
        </Dialog>
        :
        <SearchInput1
          click={onClickLocationHandler}
          location={location}
        />
      }

    </>
  );
}

export default SearchInputStep1Container;
