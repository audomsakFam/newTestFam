import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #0070f3;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #005bb5;
  }

  &:disabled {
    background-color: #ccc;
  }
`;

export const ErrorText = styled.p`
 color: red;
 font-size: 0.9rem:
 margin-bottom: 1rem;
`;
