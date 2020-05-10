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
    console.log('hit'); // ZoneSearchPopUp 팝업 창 띄우기
    return setIsOpen(!isOpen)
  };



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
          <ZoneSearchPopUp />
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
