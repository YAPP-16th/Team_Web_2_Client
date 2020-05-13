import React, { useState } from 'react';
// import '../../pages/SearchInputPage/ZoneSearchPage.scss';
import ZoneSearchPopUp from '../SearchInputStep1/ZoneSearchPopup';
import Dialog from '../../Dialog/Dialog';
import styled from 'styled-components';
import HashTag from '../SearchInputStep1/HashTag';
import CurrentLocation from '../SearchInputStep1/CurrentLocation';
import check1 from '../../../assets/img/check1.png';
import check0 from '../../../assets/img/check0.png'

const SearchInput2 = () => {

  const transport = ['지하철', '버스', '자전거', '도보', '자동차'];

  const transportDetail = ['환승없음', '1회환승', '2회환승'];

  const [selected, setSelected] = useState('' as string)

  const HandleRadio = (tp: string) => {
    console.log(tp, '리덕스 보내기')
    setSelected(tp)
  }

  const selectedCheckBox = (item: string) => {
    return item === selected ? <img className="check1" src={check1}></img> : <img className="check1" src={check0}></img>
  }

  const transportDetailList = transportDetail.map((tpd, idx) => {
    return (
      <>
      <div className="Rectangle" onClick={() => HandleRadio(tpd)}>{tpd}</div>
      </>
    )
  })

  const transportList = transport.map((tp, idx) => {
    return (
      <>
          {selectedCheckBox(tp)}
          <div className="Rectangle" onClick={() => HandleRadio(tp)}>{tp}</div>
          {tp === selected 
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
      </div>


    </>
  );
}

export default SearchInput2;