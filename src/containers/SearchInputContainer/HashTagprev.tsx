import React, { useState } from 'react';

const HashTag = () => {
  const tagList: any = ['#회사', '#학교', '추가+'];

  const addTag: any = (
    array: Array<string>,
    index: number,
    newItem: string
  ) => {
    console.log([...array.slice(0, index), newItem, ...array.slice(index)])
  };

  const onClickHandler = (e: any) => {
    return e === '추가+' ? addTag(tagList, -1, e) : e;
  };

  const tagListMap: any = tagList.map((e: any, idx: number) => {
    return (
      <>
        <div
          className="StyledHashTag"
          key={idx}
          onClick={() => onClickHandler(e)}
        >
          {e}
        </div>
      </>
    );
  });
  return <>{tagListMap}</>;
};

export default HashTag;
