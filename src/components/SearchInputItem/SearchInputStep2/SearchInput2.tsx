import React, { useState } from 'react';
import ZoneSearchPopUp from '../SearchInputStep1/ZoneSearchPopup';
import Dialog from '../../Dialog/Dialog';
import styled from 'styled-components';
import HashTag from '../SearchInputStep1/HashTag';
import CurrentLocation from '../SearchInputStep1/CurrentLocation';
import check1 from '../../../assets/img/check1.png';
import check0 from '../../../assets/img/check0.png';

const SearchInput2 = ({ setData }: any) => {

  const transport = ['지하철', '버스', '지하철 & 버스'];

  const transportDetail = ['환승없음', '1회환승', '2회환승'];

  const [selectedTp, setSelectedTp] = useState('' as string);
  const [selectedDetailTp, setSelectedDetailTp] = useState('' as string);

  const handleTp = (tp: string) => {
    setSelectedTp(tp)
    if (tp === "지하철") {
      setData("transitMode", ["subway"])
    } else if (tp === "버스") {
      setData("transitMode", ["bus"])
    } else if (tp === "지하철 & 버스") {
      setData("transitMode", ["subway", "bus"])
    }
  }

  const handleDetailTp = (dtp: string) => {
    setSelectedDetailTp(dtp)
    if (dtp === "환승없음") {
      setData("transferLimit", 0)
    } else if (dtp === "1회환승") {
      setData("transferLimit", 1)
    } else if (dtp === "2회환승") {
      setData("transferLimit", 2)
    }
  }

  const selectedTpCheckBox = (item: string, selected: string) => {
    return item === selected ? <img className="check1" src={check1}></img> : <img className="check1" src={check0}></img>
  }


  const transportDetailList = transportDetail.map((tpd, idx) => {
    return (
      <>
        <div className="Rectangle" onClick={() => handleDetailTp(tpd)} style={{ marginLeft: '30px' }}>
          {selectedTpCheckBox(tpd, selectedDetailTp)}
          {tpd}
        </div>
      </>
    )
  })

  const transportList = transport.map((tp, idx) => {
    return (
      <>
        <div className="Rectangle" onClick={() => handleTp(tp)} key={idx}>
          {selectedTpCheckBox(tp, selectedTp)}
          {tp}
        </div>
        {tp === selectedTp
          ? transportDetailList
          : null
        }
      </>
    );
  });

  return (
    <>

      <div className="search1_select_done">
        {/* <input type="text" onChange={ZoneSearchClickHandler} value="주소를 입력하세요" /> */}
        {/* <ZoneSearchPopUp></ZoneSearchPopUp> */}
        <span className="STEP-1">STEP 2</span>
        <span className="location"> / transport</span>
        <br />
        <span className="Rectangle_ment">선호하는 이동수단을</span>
        <br />
        <span className="Rectangle_ment">선택해주세요</span>
        <br />
        {transportList}
        <span className="option"> * 옵션을 선택해주세요</span>
      </div>


    </>
  );
}

export default SearchInput2;