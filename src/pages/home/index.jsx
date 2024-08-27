import { IMAGES } from "../../assets/index.js";
import * as S from "./styled.js";


const Home = () => {

    return (
        <S.HomeContainer>
            <S.MainBannerOne src={IMAGES.homeBannerOne} />
            <S.MainBannerTwo src={IMAGES.homeBannerTwo} />
            <S.MainBannerThree src={IMAGES.homeBannerThree} />
            <S.MainBannerFour src={IMAGES.homeBannerFour} />
        </S.HomeContainer>
    )
};

export default Home;