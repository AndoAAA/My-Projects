import { IMAGES } from "../../assets/index.js";
import { footerMenu } from "./data.js";
import * as S from "./styled";

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterDivOne>
        <S.FooterIconsContainer>
          <S.FooterIconOne src={IMAGES.headerLogoOne} />
          <S.FooterIconTwo src={IMAGES.footerIcon} />
        </S.FooterIconsContainer>
        <S.FooterText>
          Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
          dui, eget bibendum magna congue nec.
        </S.FooterText>
        <S.FooterContacts>(219) 555-0114 or Proxy@gmail.com</S.FooterContacts>
      </S.FooterDivOne>
      <S.FooterDivTwo>
        <S.FooterMenuContainer>
          {footerMenu().map(({ id, title, items }) => (
            <S.FooterMenu key={id}>
              <S.FooterMenuTitle>{title}</S.FooterMenuTitle>
              {items.map(({ name }) => (
                <S.FooterMenuList key={name}>{name}</S.FooterMenuList>
              ))}
            </S.FooterMenu>
          ))}
        </S.FooterMenuContainer>
      </S.FooterDivTwo>
    </S.FooterContainer>
  );
};

export default Footer;
