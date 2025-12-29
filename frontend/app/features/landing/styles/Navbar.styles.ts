import styled from 'styled-components';
import { theme } from '@/app/styles/theme'; 

export const Header = styled.header`
  background: white;
  height: 72px;
  border-bottom: 1px solid ${theme.colors.border};
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 0 24px;
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  font-size: 1.2rem;
  color: ${theme.colors.textMain};
  
  span { color: ${theme.colors.primary}; } /* ตัว X สีแดง */
`;

export const SearchWrapper = styled.div`
  flex: 1;
  max-width: 500px;
  margin: 0 40px;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 45px 10px 45px; /* เว้นที่ให้ icon ซ้ายขวา */
  border-radius: 50px;
  border: 1px solid ${theme.colors.border};
  outline: none;
  font-size: 0.9rem;

  &:focus {
    border-color: ${theme.colors.primary};
  }
`;

export const SearchIconLeft = styled.span`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
`;

export const ImageSearchBtn = styled.button`
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  background: #FFF0F0;
  color: ${theme.colors.primary};
  border: none;
  border-radius: 20px;
  padding: 4px 12px;
  font-size: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const MenuGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.75rem;
  color: ${theme.colors.textMain};
  cursor: pointer;
  gap: 4px;
  
  /* Icon จำลองด้วย Emoji หรือใส่ SVG ทีหลัง */
  span.icon { font-size: 1.2rem; } 
`;

export const LoginButton = styled.button`
  background-color: ${theme.colors.primary};
  color: white;
  border: none;
  padding: 8px 24px;
  border-radius: 24px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover { background-color: #b72018; }
`;