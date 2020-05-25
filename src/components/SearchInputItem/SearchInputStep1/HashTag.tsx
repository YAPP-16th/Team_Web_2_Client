import React, { useState, useEffect, KeyboardEvent } from 'react';
import useSearchInput from '../../../hooks/useSearchInput';
import '../../../pages/SearchInputPage/SearchInputPage.scss';


const HashTag = () => {

  const addTag: Function = (
    array: Array<string>,
    newItem: string
  ) => {
    array.push(newItem)
    setTagList(array)
  };

  const [isInput, setIsInput] = useState(false as boolean);
  const [tagList, setTagList] = useState(['# 회사', '# 학교'] as Array<String>);
  const [selected, setSelected] = useState('' as string)

  // useEffect(() => { }, [toggle]);

  // const onClickHandler = (e: any) => {
  //   return e === '추가+' ? addTag(tagList, -1, <input></input>) : e;
  // };

  const onClickHandler = () => {
    return setIsInput(true)
  };

  const onKeyPressHandler = (e: any) => {
    if (e.key === 'Enter') {
      addTag(tagList, e.target.value)
      setIsInput(false)
    }
  };

  const searchInput = useSearchInput();

  const setAddressTagRedux = (addressTag: any) => {
    const processed = { ...searchInput.searchInputData };
    processed.addressTag = addressTag;
    searchInput.setSearchInputData(processed);
  }

  const onClickSelectHandler = (e: string) => {
    // Redux 보내는 부분
    // setData("addressTag", e.slice(2))
    setAddressTagRedux(e.slice(2))
    setSelected(e)
  };

  const tagListMap: any = tagList.map((e: any, idx: number) => {
    console.log('이거', searchInput.searchInputData.addressTag)
    return (

      (e.slice(2) === searchInput.searchInputData.addressTag)
        ?
        <div
          className="SelectedHashTag"
          key={idx}
          onClick={() => onClickSelectHandler(e)}
        >
          {e}
        </div>
        :
        <div
          className="StyledHashTag"
          key={idx}
          onClick={() => onClickSelectHandler(e)}
        >
          {e}
        </div>
    );
  });
  return <>
    <div className="hashTag_Wrapper">
      {tagListMap}
      {isInput
        ? <input className="styledInput" defaultValue="# " onKeyPress={onKeyPressHandler} autoFocus />
        :
        <>
          <div className=" StyledHashTag" onClick={() => onClickHandler()}>+추가</div>
        </>
      }

      <br />
    </div>
  </>;
};

export default HashTag;
