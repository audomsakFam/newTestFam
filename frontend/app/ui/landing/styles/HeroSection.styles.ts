import styled from "styled-components";
import { theme } from "@/app/styles/theme";

export const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 60px;
`;

export const Banner = styled.div`
  width: 100%;
  height: 480px; 
  background-color: #d9d9d9; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;

  h1 {
    font-size: 4rem;
    margin: 0;
    font-weight: 500;
  }
  p {
    font-size: 2rem;
    color: ${theme.colors.primary};
  }
`;

export const Indicators = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  gap: 10px;

  div {
    width: 40px;
    height: 4px;
    background: white;
    border-radius: 2px;
    opacity: 0.6;
    &.active {
      opacity: 1;
      background: #555;
    }
  }
`;

export const Container = styled.div`
  max-width: 1200px; 
  margin: 0 auto;
  padding: 40px 0;
`;

export const CatGrid = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
  gap: 10px;
`;

export const CatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  .box {
    width: 100px;
    height: 100px;
    background: #f5f5f5;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  span {
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

export const RecentSection = styled.div`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: ${theme.colors.textMain};
  }
`;

export const SliderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const RecentList = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 10px 0;
  scroll-behavior: smooth; 

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;


export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  
  background-color: transparent; 
  border: none; 
  box-shadow: none; 

  width: 40px; 
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  
  font-size: 2rem; 
  color: #aaa; 
  transition: all 0.2s;

  &:hover {
    color: #333; 
    transform: translateY(-50%) scale(1.1); 
  }

  &.left {
    left: -100px; 
    color: red; 
    &:hover {
       color: #d00000; 
    }
  }

  &.right {
    right: -100px;
    color: red; 
    &:hover {
       color: #d00000; 
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SimpleCard = styled.div`
  min-width: 160px;

  .img-box {
    width: 100%;
    aspect-ratio: 1;
    border: 1px solid #eee;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
    color: #aaa;
  }

  .name {
    font-size: 0.85rem;
    margin-bottom: 4px;
  }
  .price {
    font-weight: bold;
    font-size: 1rem;
    display: flex;
    align-items: baseline;
    gap: 4px;

    small {
      font-size: 0.7rem;
      font-weight: normal;
      color: #888;
    }
  }
`;
