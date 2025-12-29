import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  padding: 2.5rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
`;

export const Title = styled.h2`
  mergin-bottom: 2rem;
  color: #1a1a1a;
  font-size: 1.8rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  margin-bottom: 1.2rem;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #0070f3;
    box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.1);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.2s;

  &:hover {
    background-color: #0060df;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.div`
  color: #d93025;
  background-color: #ffe6e6;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
`;

export const RegisterLink = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #666;

  a {
    color: #0070f3;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;
