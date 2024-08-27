import { IMAGES } from "../../assets/index.js";
import * as S from "./styled.js";


const ContactUs = () => {

    return (
        <S.ContactUsContainer>
            <S.ContactUsHeader>
                <S.ContactUsImage src={IMAGES.contactUsHeader} alt="contactUs" />
            </S.ContactUsHeader>
            <S.ContactUsNav>
                <S.ContactUsImage src={IMAGES.contactInfo} alt="info" />
                <S.ContactUsImage src={IMAGES.contactMessage} alt="message" />
            </S.ContactUsNav>
            <S.ContactUsMap>
                <S.ContactUsImage src={IMAGES.map} alt="map" />
            </S.ContactUsMap>
        </S.ContactUsContainer>
    )
};

export default ContactUs;