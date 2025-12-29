import { theme } from '@/app/styles/theme';
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: #333333; /* สีพื้นหลังเทาเข้มเกือบดำ */
  color: #B0B0B0; /* สีตัวอักษรเทาอ่อน อ่านสบายตา */
  padding: 60px 0 30px 0;
  font-size: 0.9rem;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
`;

export const TopHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    
    span { color: ${theme.colors.primary}; } /* ตัว X สีแดง */
  }

  p {
    font-size: 0.9rem;
    font-weight: 300;
  }
`;

/* --- ส่วนกลาง: 3 Columns --- */
export const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* เผื่อมือถือ */
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #444; /* เส้นคั่นบางๆ ก่อนถึง copyright */
`;

export const Column = styled.div`
  flex: 1;
  min-width: 200px;

  h3 {
    color: white;
    font-size: 1rem;
    margin-bottom: 20px;
    font-weight: 500;
  }
`;

export const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s;
    &:hover { color: white; }
  }
`;

export const ContactInfo = styled.div`
  line-height: 1.6;
  p { margin-bottom: 10px; }
  
  .label { color: white; margin-right: 5px; }
`;

export const CtaButton = styled.button`
  background-color: ${theme.colors.primary};
  color: white;
  border: none;
  border-radius: 30px;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  max-width: 280px;
  margin-top: 10px;
  transition: background 0.2s;

  &:hover {
    background-color: #b72018;
  }
`;

/* --- ส่วนล่าง: Social & Copy --- */
export const BottomBar = styled.div`
  padding-top: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  .icon-circle {
    width: 40px;
    height: 40px;
    background-color: ${theme.colors.primary}; /* พื้นหลังแดง */
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover { transform: scale(1.1); }
  }
`;

export const CopyText = styled.div`
  font-size: 0.8rem;
  color: #777;
  
  span { color: white; font-weight: 500; }
`;

export const PolicyLinks = styled.div`
  display: flex;
  gap: 20px;
  font-size: 0.75rem;
  color: #666;
  a { text-decoration: none; color: inherit; }
`;