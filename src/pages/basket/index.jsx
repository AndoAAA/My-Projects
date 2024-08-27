import { useSelector } from "react-redux";
import BasketItem from "../../components/basket-item";
import { productSelector } from "../../libs/redux/product-slice/product-selector";
import * as S from "./styled.js";

const Basket = () => {
  const { basketItems } = useSelector(productSelector);

  return (
    <S.BasketContainer>
      <S.BasketPageTitle>
        {!basketItems?.length ? "Basket is empty" : "Basket"}
      </S.BasketPageTitle>
      {basketItems?.map((product) => (
        <BasketItem key={product.id} product={product} />
      ))}
    </S.BasketContainer>
  );
};

export default Basket;
