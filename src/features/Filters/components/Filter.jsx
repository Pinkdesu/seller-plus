import React, { useState } from 'react';
import * as S from '../elements';

export const Filter = (props) => {
  const { title } = props;

  const [open, setOpen] = useState(false);

  const toggleFilter = () => {
    setOpen(!open);
  };

  return (
    <S.Filter>
      <div>
        <S.FilterButton onClick={toggleFilter} open={open}>
          {title}
        </S.FilterButton>
        <S.FilterItemsWrapper open={open}>
          {open && (
            <div>
              <S.ItemsList>
                <S.Item>Good</S.Item>
                <S.Item>Good</S.Item>
                <S.Item>Good</S.Item>
                <S.Item>Good</S.Item>
              </S.ItemsList>
            </div>
          )}
        </S.FilterItemsWrapper>
      </div>
    </S.Filter>
  );
};

export default Filter;
