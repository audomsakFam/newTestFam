import styled from 'styled-components';
import { theme } from '@/app/styles/theme'; 

export const Card = styled.div`
  background: white;
  width: 250px; /* Fix ความกว้างการ์ด */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  flex-shrink: 0; /* ห้ามหดเวลาอยู่ในแถบเลื่อน */
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ImageArea = styled.div`
  height: 250px;
  background-color: #F9F9F9; /* สีพื้นแทนรูป */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ccc;
`;

/* ป้าย Badge มุมซ้ายบน/ขวาบน */
export const BadgeLeft = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #333;
  color: white;
  font-size: 0.65rem;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const BadgeRight = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${theme.colors.primary};
  color: white;
  font-size: 0.75rem;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: bold;
`;

export const Content = styled.div`
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  h4 {
    margin: 0;
    font-size: 0.95rem;
    color: ${theme.colors.textMain};
    font-weight: 600;
    line-height: 1.4;
    max-width: 80%;
  }

  /* ปุ่ม + ใส่กรอบสี่เหลี่ยม */
  button {
    border: 1px solid #ccc;
    background: white;
    width: 24px;
    height: 24px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #666;
    &:hover { border-color: ${theme.colors.primary}; color: ${theme.colors.primary}; }
  }
`;

export const MetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  color: ${theme.colors.textLight};
  
  .code { letter-spacing: 0.5px; }
  .views { display: flex; align-items: center; gap: 4px; }
`;

export const Specs = styled.div`
  font-size: 0.75rem;
  color: #666;
  margin: 4px 0;
  
  p { margin: 2px 0; }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 8px;
`;

export const PriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  
  .old-price {
    font-size: 0.75rem;
    text-decoration: line-through;
    color: #aaa;
  }
  
  .new-price {
    font-size: 1.1rem;
    color: ${theme.colors.primary};
    font-weight: bold;
    
    small { font-size: 0.75rem; font-weight: normal; color: #666; }
  }
`;

export const StockStatus = styled.span`
  color: ${theme.colors.success};
  font-size: 0.75rem;
  font-weight: 500;
`;