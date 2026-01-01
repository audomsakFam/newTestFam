import styled from "styled-components";

export const EmptyWrapper = styled.div<{ $w: number; $h: number }>`
  grid-column: span ${(props) => props.$w};
  grid-row: span ${(props) => props.$h};

  border: 2px dashed #333;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  font-size: 24px;
  min-height: 200px; /* หรือตามความสูง Grid ของคุณ */

  &:hover {
    border-color: #3cff0044;
    color: #3cff0044;
    background: #ffffff05;
  }
`;
