import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 200px;
  height: auto;
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const ProductTitle = styled.p``;

export const ProductImage = styled.img`
  width: 150px;
  height: 150px;
`;

export const OrderButtons = styled.div`
  display: flex;
  gap: 20px;
`;

export const MinusButton = styled.button`
  font-size: 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const PlusButton = styled.button`
  font-size: 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const ProductQuantity = styled.p``;

export const AddBasketButton = styled.button`
  border: none;
  background-color: green;
  color: white;
  cursor: pointer;
  height: 30px;
  width: 200px;
  border-radius: 0 0 8px 8px;
`;

export const ProductPrice = styled.p``;
