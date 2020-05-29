import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import useSearchInput from '../../../hooks/useSearchInput';

type ZoneSearchPopUpProps = {
  close?: () => void | undefined;
  setLocation?: any;
}

const ZoneSearchPopUp = ({ close, setLocation }: ZoneSearchPopUpProps) => {

  const searchInput = useSearchInput();

  // setLocation ->  
  const setLocationRedux = (location: any) => {
    const processed = { ...searchInput.searchInputData };
    processed.address = location;
    searchInput.setSearchInputData(processed);
  }

  const handleComplete = (data: any) => {
    console.log('data', data);
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    // alert(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'\
    // setLocation(fullAddress)
    setLocationRedux(fullAddress)
    //@ts-ignore
    // setData("address", fullAddress)
    //@ts-ignore
    close();


  };

  return (
    <>
      <DaumPostcode onComplete={handleComplete} />
      <script src="http://dmaps.daum.net/map_js_init/postcode.v2.js?autoload=false"></script>
    </>
  );
};


export default ZoneSearchPopUp;
