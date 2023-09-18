import { MOCK_PRODUCTS } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import Card from "./Card";

export default function Assortment() {
  const [filteredProducts, setFilteredProducts] = useState(MOCK_PRODUCTS);

  const handleFilter = (productType) => {
    if (productType === "Alla") {
      setFilteredProducts(MOCK_PRODUCTS);
    } else {
      const newArr = MOCK_PRODUCTS.filter(
        (product) => product.typ === productType
      );
      setFilteredProducts(newArr);
    }
  };

  return (
    <section className="font-serif">
      <h1 className="text-2xl">Sortiment</h1>
      <div className="flex space-x-3 my-12 md:space-x-6">
        <button
          className="py-1 px-6 border rounded-sm border-black hover:shadow-2xl"
          onClick={() => handleFilter("Bulle")}
        >
          Bullar
        </button>
        <button
          className="py-1 px-6 border rounded-sm border-black hover:shadow-2xl"
          onClick={() => handleFilter("Tårta")}
        >
          Tårtor
        </button>
        <button
          className="py-1 px-6 border rounded-sm border-black hover:shadow-2xl"
          onClick={() => handleFilter("Kaka")}
        >
          Kakor
        </button>
        <button
          className="py-1 px-6 border rounded-sm border-black hover:shadow-2xl"
          onClick={() => handleFilter("Alla")}
        >
          Visa allt
        </button>
      </div>
      <ul className="grid gap-4 justify-center md:grid-cols-2 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Link href={product.href}>
              <Card
                id={product.id}
                typ={product.typ}
                title={product.title}
                img={product.img}
                ingredients={product.ingredients}
                price={product.price}
                description={product.description}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

// const typ = [];

// const result = typ.filter(product.typ);
// {
//   MOCK_PRODUCTS.filter((product) => product.typ === filter);
// }
