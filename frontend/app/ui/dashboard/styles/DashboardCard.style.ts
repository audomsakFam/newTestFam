import styled from "styled-components";

export const CardWrapper = styled.div<{
  $w: number;
  $h: number;
  $isDragging: boolean;
  $visualSize?: { w: number; h: number } | null;
}>`
  background: #111111;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 200px;
  transition: transform 0.2s ease, border-color 0.3s ease;

  grid-column: span ${(props) => props.$w};
  grid-row: span ${(props) => props.$h};
  width: ${(props) =>
    props.$visualSize ? `${props.$visualSize.w}px` : "auto"};
  height: ${(props) =>
    props.$visualSize ? `${props.$visualSize.h}px` : "auto"};
  z-index: ${(props) => (props.$visualSize || props.$isDragging ? 100 : 1)};
  opacity: ${(props) => (props.$isDragging ? 0.6 : 1)};
  box-shadow: ${(props) =>
    props.$visualSize || props.$isDragging
      ? "0px 10px 30px rgba(0,0,0,0.5), 0px 0px 15px #3cff00"
      : "none"};

  &:hover {
    border-color: #3cff0066;
    transform: translateY(-5px);
  }
`;

export const ResizeHandle = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 15px;
  height: 15px;
  cursor: se-resize;
  z-index: 20;

  &::after {
    content: "";
    position: absolute;
    bottom: 4px;
    right: 4px;
    border-style: solid;
    border-width: 0 0 8px 8px;
    border-color: transparent transparent #3cff00 transparent;
    opacity: 0.5;
  }

  &:hover::after {
    opacity: 1;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  //   margin-bottom: 15px;
  color: #888;
  cursor: grab;
  padding: 10px 0;

  &:active {
    cursor: grabbing;
  }
`;

export const CardTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  & > svg:hover {
    color: #3cff00;
  }
`;

export const CardBody = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  colors: #fff;
`;

export const GlowEffect = styled.div`
  position: absolute;
  bottom: 0;
  left: 10%;
  width: 80%;
  height: 2px;
  background: #3cff00;
  box-shadow: 0px 0px 15px 2px rgba(60, 255, 0, 0.7);
  opacity: 0.5;
`;
