import { useDispatch, useSelector } from "react-redux";
import * as S from "./styled.js";
import { productSelector } from "../../libs/redux/product-slice/product-selector.js";
import { useState } from "react";
import { IMAGES } from "../../assets/index.js";
import { productActions } from "../../libs/redux/product-slice/product-slice.js";

const BasketItem = ({ product }) => {
  const { products } = useSelector(productSelector);
  const [count, setCount] = useState(product.count);
  const dispatch = useDispatch();

  const minusItem = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const plusItem = () => {
    setCount(count + 1);
  };

  const removeItem = () => {
    dispatch(productActions.removeItem(product));
  };

  return (
    <S.BasketItemContainer>
      <S.ProductName>{product.name}</S.ProductName>
      <S.basketItemImage src={product.img} alt="image" />
      <S.ProductPrice>{product.price * count} amd</S.ProductPrice>
      <S.OrderButtons>
        <S.MinusButton onClick={minusItem}>-</S.MinusButton>
        <S.ProductQuantity>{count}</S.ProductQuantity>
        <S.PlusButton onClick={plusItem}>+</S.PlusButton>
      </S.OrderButtons>
      <S.RemoveIcon src={IMAGES.removeIcon} alt="icon" onClick={removeItem} />
    </S.BasketItemContainer>
  );
};

export default BasketItem;
