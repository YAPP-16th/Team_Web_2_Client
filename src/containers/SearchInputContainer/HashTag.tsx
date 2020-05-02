import React from 'react';

const HashTag = () => {
  const tagList: any = ['#회사', '#학교', '추가+'];

  const addTag: any = (
    array: Array<string>,
    index: number,
    newItem: string
  ) => {
    return [...array.slice(0, index), newItem, ...array.slice(index)];
  };

  const onClickHandler = (e: any) => {
    return e === '추가+' ? addTag(tagList, -1, e) : e;
  };

  const tagListMap: any = tagList.map((e: any, idx: number) => {
    return (
      <>
        {e}
        <div
          className="StyledHashTag"
          key={idx}
          onClick={() => onClickHandler(e)}
        />
      </>
    );
  });
  return <>{tagListMap}</>;
};

export { HashTag };
