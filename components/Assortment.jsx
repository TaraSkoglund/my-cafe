import { MOCK_PRODUCTS } from "@/constants";
import Card from "./Card";
export default function Assortment() {
  return (
    <ul className=" flex flex-row space-x-12">
      {MOCK_PRODUCTS.map((product) => {
        return (
          <li key={product.id}>
            <Card
              id={product.id}
              typ={product.typ}
              title={product.title}
              img={product.img}
              ingredients={product.ingredients}
              price={product.price}
              description={product.description}
            />
          </li>
        );
      })}
    </ul>
  );
}
