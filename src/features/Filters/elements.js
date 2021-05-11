import styled from 'styled-components';

export const FiltersWrapper = styled.div`
  background-color: #eeeeee;
  margin-top: 50px;
  height: 116px;
`;

export const FiltersList = styled.ul`
  display: flex;
  position: relative;
  flex-flow: row wrap;
  align-content: space-between;
  text-align: left;
  width: 100%;
  gap: 8px 20px;
  z-index: 2;
`;

export const Filter = styled.li`
  display: inline-block;
  vertical-align: top;
  width: calc(16.66667% - 17.5px);

  & > div {
    position: relative;
  }
`;

export const FilterButton = styled.button`
  position: relative;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.3px;
  color: #666;
  line-height: 1.12;
  text-align: left;
  padding: 3px 20px 3px 6px;
  width: 100%;
  height: 42px;
  border-radius: 0;
  border: 1px solid #ddd;
  border-right: none;
  border-left: none;
  background-color: rgba(0, 0, 0, 0);

  &:hover {
    color: #0770cf;
  }

  &:after {
    content: '';
    color: #666;
    position: absolute;
    right: 10px;
    top: 16px;
    height: 8px;
    width: 8px;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='10' height='7' xmlns='http://www.w3.org/2000/svg' fill='%23666'%3E%3Cpath d='M5.057 3.566L7.974.649l1.414 1.414-4.243 4.243-.088-.089-.084.085L.73 2.06 2.141.65l2.916 2.916z' fill-rule='evenodd'/%3E%3C/svg%3E");
    background-repeat: no-repeat;

    transform: rotate(${(props) => (props.open ? '180deg' : '0deg')});
  }
`;

export const FilterItemsWrapper = styled.div`
  display: ${(props) => (props.open ? 'block' : 'none')};
  box-shadow: 0 5px 13px -2px rgb(0 0 0 / 80%);
  width: 356px;
  position: absolute;
  box-sizing: border-box;
  background-color: #eee;
  top: 42px;
  padding: 0;
  z-index: 900;
`;

export const ItemsList = styled.ul`
  padding: 10px;
`;

export const Item = styled.li`
  display: block;
  list-style-type: none;
  font-size: 16px;
  text-align: left;
  font-weight: 400;
  line-height: 1.12;
  border-radius: 5px;
  background-color: ${(props) => (props.checked ? '#a8b8d2' : '#ffffff')};
  color: #2d2d2d;
  height: 100%;
  padding: 14px;
  width: 100%;
  height: 44px;
  margin: 0 0 8px;
  position: relative;
  text-decoration: none;
  cursor: pointer;
`;
