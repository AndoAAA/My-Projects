import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 368px;
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const FooterDivOne = styled.div`
  width: 336px;
  height: 166px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FooterIconOne = styled.img`
  width: 32px;
  height: 32px;
  background-color: transparent;
`;

export const FooterIconTwo = styled.img`
  width: 144px;
  height: 32px;
`;

export const FooterIconsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const FooterText = styled.p`
  width: 336px;
  height: 63px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  color: #808080;
`;

export const FooterContacts = styled.p`
  color: white;
  border-bottom: green;
`;

export const FooterDivTwo = styled.div`
  display: flex;
`;
export const FooterMenuContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const FooterMenuTitle = styled.p`
  color: white;
`;

export const FooterMenuList = styled.p`
  color: #999999;
`;
