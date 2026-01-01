import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  padding: 24px;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: flex-start;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;
  justify-content: space-between;
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  padding: 10px;
  background: #3cff0022;
  border: 1px solid #3cff00;
  border-radius: 4px;
  color: #3cff00;

  &:hover {
    background: #3cff0044;
  }
`;

export const ContextProduct = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
  width: 100%;
`;
