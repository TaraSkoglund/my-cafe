"use client";
import { useCart } from "@/app/Context/CartContext";
import { MOCK_PRODUCTS } from "@/constants";
import Image from "next/image";
export default function Page({ params }) {
  const { addToCart, cartItems, products } = useCart();
  const product = MOCK_PRODUCTS.filter(
    (product) => product.href.slice(1) === params.name
  )[0];

  const handleAddToCart = () => {
    addToCart(product);
    console.log("product1", product);
  };

  return (
    <section className="pt-16">
      <div className="grid md:grid-cols-1 xl:grid-cols-2">
        <div>
          <div className="mx-12 my-6 font-serif">
            <h1 className="text-2xl">{product.title}</h1>
          </div>
          <div className="mx-12 my-6 font-serif">
            <h2 className="text-xl">Inehåll</h2>
            <ul className="list-disc list-inside p-6 pb-0">
              {product.ingredients.map((ingredient, index) => (
                <li key={index} className="p-2">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-12 mb-6  font-serif">
            <h2 className="py-6 text-xl">Beskrivning</h2>
            <p>{product.description}</p>
          </div>
          <div className="flex mx-12 font-serif justify-between">
            <button
              className="py-1 px-6 border rounded-sm border-black hover:shadow-2xl hover:border-b-2"
              onClick={handleAddToCart}
            >
              Beställ
            </button>
            <p>{product.price} kr</p>
          </div>
        </div>
        <div className="flex justify-center m-12 pt-6 sm:pt-0">
          <Image
            src={product.img}
            width={500}
            height={500}
            alt={product.title}
            className="object-cover"
          />
        </div>
      </div>
      <footer className="m-12 font-serif divide-y divide-black">
        <div></div>
        <div className="space-y-3 pt-12">
          <h3>infomycafe@gmail.com</h3>
          <h3>031 55 876</h3>
        </div>
      </footer>
    </section>
  );
}
