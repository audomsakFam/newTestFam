import { theme } from "@/app/styles/theme";
import styled from "styled-components";

export const RegisterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${theme.colors.bgGray};
  padding: 20px;
`;

export const Container = styled.div`
  max-width: 450px; /* เพิ่มความกว้างนิดหน่อยเผื่อฟิลด์เยอะ */
  width: 100%;
  padding: 2.5rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  text-align: center;
  border: 1px solid ${theme.colors.border};
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  color: ${theme.colors.textMain};
  font-size: 1.8rem;
  font-weight: 700;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  margin-bottom: 1.2rem;
  border: 1px solid ${theme.colors.border};
  border-radius: 8px;
  font-size: 1rem;
  background-color: #fafafa;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    background-color: #fff;
    box-shadow: 0 0 0 3px rgba(217, 48, 37, 0.1);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  background-color: ${theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.2s;

  &:hover {
    background-color: #b5261d;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(217, 48, 37, 0.2);
  }

  &:disabled {
    background-color: ${theme.colors.textLight};
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.p`
  color: ${theme.colors.primary};
  background-color: #fff5f5;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  border: 1px solid rgba(217, 48, 37, 0.1);
`;

export const LoginLink = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${theme.colors.textLight};

  a {
    color: ${theme.colors.textGold};
    text-decoration: none;
    font-weight: 600;

    &:hover {
      color: ${theme.colors.primary};
      text-decoration: underline;
    }
  }
`;