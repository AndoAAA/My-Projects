import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { COLORS } from "../../assets/colors";

export const HeaderContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const Link = styled(NavLink)`
  color: ${COLORS.white};
  text-decoration: none;
`;

export const HeaderTop = styled.div`
  width: 100%;
  height: 42px;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${COLORS.white};
`;

export const HeaderSearch = styled.div`
  width: 100%;
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const HeaderLogoOne = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
export const HeaderLogoTwo = styled.img`
  width: 144px;
  height: 32px;
  cursor: pointer;
`;

export const HeaderMenu = styled.div`
  width: 100%;
  height: 60px;
  background-color: #333333;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderTopDivOne = styled.div``;

export const HeaderTopDivTwo = styled.div`
  display: flex;
  gap: 10px;
`;

export const HeaderTopText = styled.p``;

export const HeaderSearchDivOne = styled.div`
  display: flex;
  gap: 10px;
`;
export const HeaderSearchDivTwo = styled.div``;
export const HeaderSearchDivThree = styled.div`
  display: flex;
  position: relative;
  gap: 20px;
`;

export const HeaderIcon = styled.img`
  widows: 30px;
  height: 30px;
  cursor: pointer;
`;

export const HeaderMenuDivOne = styled.div``;

export const HeaderMenuDivTwo = styled.div``;

export const HeaderMenuList = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
`;
export const HeaderMenuListItem = styled.li``;

export const HeaderMenuAddress = styled.p`
  color: ${COLORS.white};
`;

export const TranslateContainer = styled.select`
  border: none;
  cursor: pointer;
`;

export const SetLanguage = styled.option`
  cursor: pointer;
`;

export const ProductQuantity = styled.span`
  color: ${COLORS.red};
  position: absolute;
  font-size: 16px;
  right: 13px;
  top: 9px;
`;
