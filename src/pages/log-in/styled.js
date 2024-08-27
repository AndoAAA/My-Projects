import styled from "styled-components";
import { COLORS } from "../../assets/colors";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
`;

export const PageTitle = styled.h1``;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const LoginButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 8px;
  border: none;
  background-color: ${COLORS.green};
  color: ${COLORS.white};
  cursor: pointer;
`;
