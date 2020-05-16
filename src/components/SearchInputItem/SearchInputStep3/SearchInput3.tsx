import React, { useState } from 'react';
// import '../../pages/SearchInputPage/ZoneSearchPage.scss';

const SearchInput3 = () => {

  const times = ['0-10분', '10분-20분', '20분-30분', '30분 이상']

  const HandleRadio = (e: any) => {
    console.log(e.target.value, '리덕스 보내기')
  }


  const timeList = times.map((time, idx) => {
    return (
      <>
        {/* unique key error 가 왜 나는지 모르겠음 ㅡㅡ */}
        <label key={time.toString()} >
          <input type="radio" id="transport" name="transport" value={time} key={idx + 10000} onChange={HandleRadio}></input>
          <div className="transportList" key={Math.random()}>{time}</div>
        </label>
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