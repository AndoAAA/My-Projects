import { useSelector } from "react-redux";
import { productSelector } from "../../libs/redux/product-slice/product-selector";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { products } = useSelector(productSelector);
  const { "product-id": ProductId } = useParams();
  console.log(ProductId);

  const product = products?.find((item) => item.id == ProductId);

  return (
    <div>
      <h1>product name</h1>
      <p>{product?.name}</p>
      <img src={product?.img} alt="image" />
      <p>Nutritions</p>
      <ul>
        {Object.keys(product?.nutritions)?.map((key) => {
          return (
            <li key={key}>
              <b>{key}</b>:{product?.nutritions[key]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SingleProduct;
