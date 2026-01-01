import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  color: white;
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const ButtonGroup = styled.div`
  button {
    background: #3cff0022;
    border: 1px solid #3cff00;
    color: #3cff00;
    padding: 8px 16px;
    margin-left: 10px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: #3cff0044;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
  grid-auto-rows: 75px;
  gap: 20px;
`;
