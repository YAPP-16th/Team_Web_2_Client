import React, { useState } from 'react';
import check1 from '../../../assets/img/check1.png';
import check0 from '../../../assets/img/check0.png';
import useSearchInput from '../../../hooks/useSearchInput';

const SearchInput3 = () => {

  const times = ['0-10분', '10분-20분', '20분-30분', '30분 이상']
  const timesForData = [[0, 10], [10, 20], [20, 30], [30, 40], [0, 0]]

  const searchInput = useSearchInput();

  const setTimeRedux = (minTime: number, maxTime: number) => {
    const processed = { ...searchInput.searchInputData };
    processed.minTime = minTime;
    processed.maxTime = maxTime;
    searchInput.setSearchInputData(processed);
  }

  const handleTime = (time: string) => {
    const a = parseInt(time[0])
    setTimeRedux(timesForData[a][0], timesForData[a][1])
    // setData("minTime", timesForData[a][0])
    // setData("maxTime", timesForData[a][1])
    // console.log(searchInput.searchInputData.minTime)
  }

  const selectedTpCheckBox = (time: any) => {
    const minTime = searchInput.searchInputData.minTime
    const maxTime = searchInput.searchInputData.maxTime
    const isChecked = (element: any) => JSON.stringify(element) === JSON.stringify([minTime, maxTime]);
    const idx_data = timesForData.findIndex(isChecked);
    const is = (element: any) => JSON.stringify(element) === JSON.stringify(time);
    const idx_time = times.findIndex(is)
    return idx_data === 4
      ? <img className="check1" src={check0}></img>
      :
      idx_time === idx_data
        ?
        <img className="check1" src={check1}></img>
        :
        <img className="check1" src={check0}></img>
  }


  const timeList = times.map((time, idx) => {
    return (
      <>
        {/* unique key error 가 왜 나는지 모르겠음 ㅡㅡ */}
        <div className="Rectangle" onClick={() => handleTime(time)} key={idx}>
          {selectedTpCheckBox(time)}
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