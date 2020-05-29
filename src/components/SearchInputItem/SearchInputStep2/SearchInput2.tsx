import React, { useState } from 'react';
import Dialog from '../../Dialog/Dialog';
import styled from 'styled-components';
import check1 from '../../../assets/img/check1.png';
import check0 from '../../../assets/img/check0.png';
import useSearchInput from '../../../hooks/useSearchInput';


const SearchInput2 = () => {

  const searchInput = useSearchInput();

  const setTransitModeRedux = (transitMode: any) => {
    const processed = { ...searchInput.searchInputData };
    processed.transitMode = transitMode;
    searchInput.setSearchInputData(processed);
  }

  const setTransferLimitRedux = (transferLimit: any) => {
    const processed = { ...searchInput.searchInputData };
    processed.transferLimit = transferLimit;
    searchInput.setSearchInputData(processed);
  }

  const translate = (item: any) => {
    if (item == "subway") {
      return "지하철"
    } else if (item == "bus") {
      return "버스"
    } else if (item.length === 2) {
      return "지하철 & 버스"
    } else if (item === 0) {
      return "환승없음"
    } else if (item === 1) {
      return "1회환승"
    } else if (item === 2) {
      return "2회환승"
    }
  }


  const transport = ['지하철', '버스', '지하철 & 버스'];

  const transportDetail = ['환승없음', '1회환승', '2회환승'];

  // const [selectedTp, setSelectedTp] = useState('' as string);
  // const [selectedDetailTp, setSelectedDetailTp] = useState('' as string);

  const handleTp = (tp: string) => {
    // setSelectedTp(tp)
    if (tp === "지하철") {
      // setData("transitMode", ["subway"])
      setTransitModeRedux(["subway"])
    } else if (tp === "버스") {
      // setData("transitMode", ["bus"])
      setTransitModeRedux(["bus"])
    } else if (tp === "지하철 & 버스") {
      // setData("transitMode", ["subway", "bus"])
      setTransitModeRedux(["subway", "bus"])
    }
  }

  const handleDetailTp = (dtp: string) => {
    // setSelectedDetailTp(dtp)
    if (dtp === "환승없음") {
      // setData("transferLimit", 0)
      setTransferLimitRedux(0)
    } else if (dtp === "1회환승") {
      // setData("transferLimit", 1)
      setTransferLimitRedux(1)
    } else if (dtp === "2회환승") {
      // setData("transferLimit", 2)
      setTransferLimitRedux(2)
    }
  }

  const selectedTpCheckBox = (item: string, selected: any) => {
    return item === selected ? <img className="check1" src={check1}></img> : <img className="check1" src={check0}></img>
  }


  const transportDetailList = transportDetail.map((tpd, idx) => {
    return (
      <>
        <div className="Rectangle" onClick={() => handleDetailTp(tpd)} style={{ marginLeft: '30px' }} key={idx}>
          {selectedTpCheckBox(tpd, translate(searchInput.searchInputData.transferLimit))}
          {tpd}
        </div>
      </>
    )
  })

  const transportList = transport.map((tp, idx) => {
    return (
      <>
        <div className="Rectangle" onClick={() => handleTp(tp)} key={idx}>
          {selectedTpCheckBox(tp, translate(searchInput.searchInputData.transitMode))}
          {tp}
        </div>
        {tp === translate(searchInput.searchInputData.transitMode)
          ? transportDetailList
          : null
        }
      </>
    );
  });

  // console.log(translate(searchInput.searchInputData.transitMode))

  return (
    <>
      <div className="search_select_done">
        <div className="search_elements_wrapper">
          <div className="input_header_wrapper">
            <span className="STEP">STEP 2</span>
            <span className="slash"> / transport</span>
          </div>
          <div className="input_question_wrapper">
            <span className="Rectangle_ment">선호하는 이동수단을</span>
            <span className="Rectangle_ment">선택해주세요</span>
          </div>
        </div>
        <div className="contents">
          {transportList}
          {/* <span className="option"> * 옵션을 선택해주세요</span> */}
        </div>
      </div>
    </>
  );
}

export default SearchInput2;