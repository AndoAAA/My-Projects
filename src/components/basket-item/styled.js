import styled from "styled-components";

export const BasketItemContainer = styled.div`
  width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid black;
  height: auto;
  border-radius: 8px;
`;

export const basketItemImage = styled.img`
  widows: 150px;
  height: 150px;
`;

export const ProductName = styled.p``;

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

export const OrderButtons = styled.div`
  display: flex;
  gap: 30px;
`;

export const RemoveIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const ProductPrice = styled.p``;
