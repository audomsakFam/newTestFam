import { theme } from "@/app/styles/theme";
import styled from "styled-components";

export const Section = styled.section`
  background-color: white;
  padding: 60px 0;
  position: relative; /* จำเป็นสำหรับการทำพื้นหลังเลเยอร์ล่าง */
  overflow: hidden;

  /* สร้างเลเยอร์สีครีมกว้างเต็มจอ */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    /* คำนวณความสูง: Padding บนของ Section (60px) + ความสูง Header + 30% ของ ContentWrapper */
    /* ในที่นี้กะระยะให้ครอบคลุม Header และกินเนื้อที่ ContentWrapper ลงมา */
    height: 350px;
    background-color: ${theme.colors.bgCream};
    z-index: 0; /* อยู่ชั้นล่างสุด */
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative; /* เพื่อให้เนื้อหาใน Container อยู่เหนือ ::before */
  z-index: 1;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;
  /* เอา background-color ออกจากตรงนี้ */
  width: 100%;

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
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 30px;
  height: 450px;
  position: relative;
  z-index: 2; /* มั่นใจว่าอยู่เหนือพื้นหลังสีครีม */
`;

export const LargeImage = styled.div`
  flex: 1.5;
  background-color: #ddd;
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

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const WallplastSection = styled.div`
  margin-top: 80px;
  position: relative;
  height: 400px;
  border-radius: 24px;
  overflow: hidden;
  background-color: #888;
  display: flex;
  align-items: center;
  padding: 0 60px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, transparent 60%);
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
    font-family: serif;
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
  gap: 40px;
  max-width: 600px;
  margin: 0 auto;
`;

export const PartnerItem = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${theme.colors.bgGray};
  border-radius: 12px;
`;
