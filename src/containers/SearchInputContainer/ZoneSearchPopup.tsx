import React from 'react';
import DaumPostcode from 'react-daum-postcode';

const ZoneSearchPopUp = () => {
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
    alert(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  return (
    <>
      <DaumPostcode onComplete={handleComplete} />
      <script src="http://dmaps.daum.net/map_js_init/postcode.v2.js?autoload=false"></script>
    </>
  );
};

export default ZoneSearchPopUp;
