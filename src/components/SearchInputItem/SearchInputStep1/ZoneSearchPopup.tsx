import React from 'react';
import DaumPostcode from 'react-daum-postcode';

type ZoneSearchPopUpProps = {
  close?: () => void | undefined;
  setLocation?: any;
  setData?: () => any;
  setUploadedLocation?: any;
}

const ZoneSearchPopUp = ({ close, setLocation, setData, setUploadedLocation }: ZoneSearchPopUpProps) => {
  const handleComplete = (data: any) => {
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
    setLocation(fullAddress)
    setUploadedLocation(true)
    console.log('ehla')
    //@ts-ignore
    setData("address", fullAddress)
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
