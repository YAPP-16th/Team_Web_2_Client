import React, { useState, useEffect } from 'react';

const HashTag = () => {

  const addTag: any = (
    array: Array<string>,
    newItem: string
  ) => {
    array.push(newItem)
    console.log(array)
    setTagList(array)
  };

  const [isInput, setIsInput] = useState(false as boolean)
  const [tagList, setTagList] = useState(['# 회사', '# 학교'] as any)

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
  }

  const tagListMap: any = tagList.map((e: any, idx: number) => {
    return (
      <>
        <div
          className="StyledHashTag"
          key={idx}
        >
          {e}
        </div>
      </>
    );
  });
  return <>
    {tagListMap}
    {isInput
      ? <input defaultValue="# " onKeyPress={onKeyPressHandler} />
      :
      <>

        <div className=" StyledHashTag" onClick={() => onClickHandler()}>+추가</div>
      </>
    }

    <br />
    <br />
    <br />
  </>;
};

export default HashTag;
