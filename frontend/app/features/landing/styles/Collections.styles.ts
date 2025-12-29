import { theme } from '@/app/styles/theme';
import styled from 'styled-components';

/* --- ส่วนที่ 1: Collections --- */
export const Section = styled.section`
  background-color: ${theme.colors.bgCream};
  padding: 60px 0;
  position: relative;
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;

  div {
    h2 {
      font-size: 2rem;
      margin: 0 0 10px 0;
      color: ${theme.colors.textMain};
    }
    p {
      color: #666;
      font-size: 0.9rem;
      max-width: 400px;
      line-height: 1.5;
      margin: 0;
    }
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    font-weight: 500;
    &:hover { text-decoration: underline; }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 30px;
  height: 450px; /* Fix ความสูงเพื่อให้รูปซ้ายกับขวาเท่ากัน */
`;

export const LargeImage = styled.div`
  flex: 1.5; /* กว้างกว่าฝั่งสินค้า */
  background-color: #ddd; /* รูปห้องตัวอย่าง */
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductList = styled.div`
  flex: 1;
  display: flex;
  gap: 15px;
  overflow-x: auto;
  align-items: center;
  
  /* ซ่อน Scrollbar */
  &::-webkit-scrollbar { display: none; }
`;

/* --- ส่วนที่ 2: Wallplast Banner --- */
export const WallplastSection = styled.div`
  margin-top: 80px;
  position: relative;
  height: 400px;
  border-radius: 24px;
  overflow: hidden;
  background-color: #888; /* พื้นหลังรูปผนังไม้ */
  display: flex;
  align-items: center;
  padding: 0 60px;
  
  /* Overlay เงาดำจางๆ เพื่อให้อ่าน text ออก */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, rgba(0,0,0,0.6) 0%, transparent 60%);
  }
`;

export const WallplastContent = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  max-width: 500px;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-family: serif; /* ให้ดูหรูๆ หน่อย */
    font-style: italic;
  }

  p {
    line-height: 1.6;
    margin-bottom: 30px;
    font-size: 0.95rem;
    opacity: 0.9;
  }

  button {
    background: transparent;
    border: 1px solid white;
    color: white;
    padding: 10px 24px;
    border-radius: 30px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
      background: white;
      color: black;
    }
  }
`;

/* --- ส่วนที่ 3: Partners --- */
export const PartnerSection = styled.div`
  padding: 60px 0;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    color: ${theme.colors.textMain};
    margin-bottom: 40px;
  }
`;

export const PartnerGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

export const PartnerItem = styled.div`
  width: 100px;
  height: 100px;
  background-color: #f0f0f0;
  border-radius: 12px;
`;