import { theme } from "@/app/styles/theme";
import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center; /* กึ่งกลางแนวนอน */
  align-items: center;     /* กึ่งกลางแนวตั้ง */
  min-height: 100vh;       /* ความสูงเต็มหน้าจอ */
  background-color: ${theme.colors.bgGray}; /* หรือสีพื้นหลังที่ต้องการ */
  padding: 20px;
`;

export const Container = styled.div`
  max-width: 400px;
  width: 100%;
  /* เอา margin: 0 auto; ออก เพราะเราใช้ Flex จากตัวแม่จัดการแล้ว */
  padding: 2.5rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  text-align: center;
  border: 1px solid ${theme.colors.border};
`;

export const Title = styled.h2`
  margin-bottom: 2rem; /* แก้คำผิดจาก mergin เป็น margin */
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
    /* เปลี่ยนจากน้ำเงินเป็นสีแดงตามธีม */
    border-color: ${theme.colors.primary};
    background-color: #fff;
    box-shadow: 0 0 0 3px rgba(217, 48, 37, 0.1);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  /* ใช้สีแดง Primary */
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
    background-color: #b5261d; /* สีแดงเข้มขึ้นเล็กน้อย */
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(217, 48, 37, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background-color: ${theme.colors.textLight};
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.div`
  /* ใช้สีแดงตัวเดียวกันเพื่อให้คุมโทน */
  color: ${theme.colors.primary};
  background-color: #fff5f5;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  border: 1px solid rgba(217, 48, 37, 0.1);
`;

export const RegisterLink = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${theme.colors.textLight};

  a {
    /* ใช้สีทอง Gold เพื่อให้ดูพรีเมียมเหมือนหัวข้อใน Landing */
    color: ${theme.colors.textGold};
    text-decoration: none;
    font-weight: 600;

    &:hover {
      color: ${theme.colors.primary};
      text-decoration: underline;
    }
  }
`;