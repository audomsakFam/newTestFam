import styled from 'styled-components';
import { theme } from '@/app/styles/theme'; 


interface SectionProps {
  $bgColor?: string;
  $isDark?: boolean;
}

export const Section = styled.section<SectionProps>`
  background-color: ${props => props.$bgColor || 'white'};
  padding: 60px 0;
  color: ${props => props.$isDark ? 'white' : theme.colors.textMain};
  position: relative;
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
`;

export const Header = styled.div<{ $isDark?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 30px;

  h2 {
    font-size: 1.8rem;
    margin: 0;
    
    /* ทำให้ตัว X เป็นสีแดงเฉพาะคำว่า Xclusive */
    span.red-x { color: ${theme.colors.primary}; }
  }

  a {
    color: ${props => props.$isDark ? 'white' : theme.colors.primary};
    text-decoration: none;
    font-size: 0.9rem;
    &:hover { text-decoration: underline; }
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

/* Container สำหรับวางการ์ดเรียงกันแบบ scroll ได้ */
export const CardList = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 10px 5px; /* เผื่อเงา card */
  scroll-behavior: smooth;
  width: 100%;

  /* ซ่อน Scrollbar */
  &::-webkit-scrollbar { display: none; }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const NavButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: red;
  z-index: 2;
  
  /* วางตำแหน่ง Absolute เทียบกับ SliderWrapper */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  
  &.prev { left: -70px; }
  &.next { right: -70px; }
  
  &:hover { background: #f5f5f5; }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 30px;
  
  div {
    width: 40px;
    height: 4px;
    background: #ccc;
    border-radius: 2px;
    &.active { background: ${theme.colors.primary}; }
  }
`;