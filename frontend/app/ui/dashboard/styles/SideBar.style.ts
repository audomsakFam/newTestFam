import styled from "styled-components";

interface ActiveOptionProps {
  $isActive?: boolean;
}

export const Containar = styled.div`
  height: 100vh;
  max-width: 300px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Header = styled.h1`
  width: 300px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  padding: 5px;
  gap: 4px;

  cursor: pointer;
`;

export const Options = styled.p<ActiveOptionProps>`
  width: 270px;
  color: #fff;
  font-size: 18px;
  padding: 16px;
  transition: all 0.3s ease; /* เพิ่มความลื่นไหลตอนเปลี่ยนสถานะ */
  cursor: pointer;

  &:hover {
    background-color: #ffffff23;
  }

  /* 10px(บนซ้าย) 0(บนขวา) 0(ล่างขวา) 10px(ล่างซ้าย) */
  border-radius: 10px 0 0 10px;
  //   border-right: 5px solid #3cff00ff;

  position: relative;
  background-color: ${(props) =>
    props.$isActive ? "#ffffff23" : "transparent"};

  &::after {
    content: "";
    position: absolute;
    right: -0.1px;
    top: 0;
    height: 100%;
    width: 4px;
    background: #3cff00;

    /* สั่งเรืองแสงที่ตัวเส้นสมมตินี้แทน */
    /* ค่า: x y blur spread color */
    box-shadow: 0px 0px 12px 2px rgba(60, 255, 0, 0.8);
    /* ป้องกันไม่ให้เส้นนี้ไปบังตัวหนังสือ */
    z-index: 1;

    opacity: ${(props) => (props.$isActive ? 1 : 0)};
    box-shadow: 0px 0px 12px 2px rgba(60, 255, 0, 0.8);
    transition: opacity 0.3s ease;
  }
`;
