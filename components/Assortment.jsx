"use client";
import { MOCK_PRODUCTS } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import Card from "./Card";

export default function Assortment() {
  const [filteredProducts, setFilteredProducts] = useState(MOCK_PRODUCTS);
  const [activeFilter, setActiveFilter] = useState("Alla");

  const handleFilter = (productType) => {
    if (productType === "Alla") {
      setFilteredProducts(MOCK_PRODUCTS);
    } else {
      const newArr = MOCK_PRODUCTS.filter(
        (product) => product.typ === productType
      );
      setFilteredProducts(newArr);
    }
    setActiveFilter(productType);
  };

  return (
    <section className="font-serif mt-12">
      <h1 className="text-2xl">Sortiment</h1>
      <div className="flex flex-col md:flex-row my-12 gap-2">
        <button
          className={`py-1 px-6 border rounded-sm border-black hover:shadow-2xl hover:border-b-2 ${
            activeFilter === "Bulle" ? "border-b-2" : ""
          }`}
          onClick={() => handleFilter("Bulle")}
        >
          Bullar
        </button>
        <button
          className={`py-1 px-6 border rounded-sm border-black hover:shadow-2xl hover:border-b-2 ${
            activeFilter === "Tårta" ? "border-b-2" : ""
          }`}
          onClick={() => handleFilter("Tårta")}
        >
          Tårtor
        </button>
        <button
          className={`py-1 px-6 border rounded-sm border-black hover:shadow-2xl hover:border-b-2 ${
            activeFilter === "Kaka" ? "border-b-2" : ""
          }`}
          onClick={() => handleFilter("Kaka")}
        >
          Kakor
        </button>
        <button
          className={`py-1 px-6 border rounded-sm border-black hover:shadow-2xl hover:border-b-2 ${
            activeFilter === "Alla" ? "border-b-2" : ""
          }`}
          onClick={() => handleFilter("Alla")}
        >
          Alla
        </button>
      </div>
      <ul className="grid gap-4 justify-center md:grid-cols-2 xl:grid-cols-4 hover:border-b-2">
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
