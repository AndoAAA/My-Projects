import { useDispatch, useSelector } from "react-redux";
import * as S from "./styled.js";
import { productSelector } from "../../libs/redux/product-slice/product-selector.js";
import { useEffect } from "react";
import { productActions } from "../../libs/redux/product-slice/product-slice.js";
import ProductItem from "../../components/product-item";

const Shop = () => {
  const { products, getProductsStatus } = useSelector(productSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.getProducts());
  }, []);


  

  return (
    <S.Container>
      {products?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </S.Container>
  );
};

export default Shop;
