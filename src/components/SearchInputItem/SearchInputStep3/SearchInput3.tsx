import React, { useState } from 'react';
// import '../../pages/SearchInputPage/ZoneSearchPage.scss';
import check1 from '../../../assets/img/check1.png';
import check0 from '../../../assets/img/check0.png';

const SearchInput3 = () => {

  const times = ['0-10분', '10분-20분', '20분-30분', '30분 이상']

  const handleTime = (time: string) => {
    setSelectedTime(time)
    console.log(time)
  }

  const [selectedTime, setSelectedTime] = useState('' as string);

  const selectedTpCheckBox = (item: string, selected: string) => {
    return item === selected ? <img className="check1" src={check1}></img> : <img className="check1" src={check0}></img>
  }


  const timeList = times.map((time, idx) => {
    return (
      <>
        {/* unique key error 가 왜 나는지 모르겠음 ㅡㅡ */}
        <div className="Rectangle" onClick={() => handleTime(time)} key={idx}>
          {selectedTpCheckBox(time, selectedTime)}
          {time}
        </div>


      </>
    );
  });

  return (
    <>

      <div className="search1_select_done">
        {/* <input type="text" onChange={ZoneSearchClickHandler} value="주소를 입력하세요" /> */}
        {/* <ZoneSearchPopUp></ZoneSearchPopUp> */}
        <span className="STEP-1">STEP 3</span>
        <span className="location"> / time</span>
        <br />
        <span className="Rectangle_ment">이동시 희망하는 소요시간을</span>
        <br />
        <span className="Rectangle_ment">선택해주세요 (편도기준)</span>
        <br />
        {timeList}
      </div>


    </>
  );
}
export default SearchInput3;