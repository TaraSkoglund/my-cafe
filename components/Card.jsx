"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../app/Context/CartContext";

export default function Card({ title, price, img, product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };
  return (
    <section className="flex w-72 flex-col border rounded-sm border-black hover:shadow-2xl">
      <Link href={product.href}>
        <div className="">
          <Image
            src={img}
            width={500}
            height={500}
            alt={title}
            className="h-96 object-cover "
            priority={false}
          />
        </div>
      </Link>
      <div className="flex justify-between p-2">
        <p>{title}</p>
        <p>{price} kr</p>
      </div>
      <div className="flex m-2">
        <button
          className="py-1 border w-full rounded-sm border-black hover:shadow-2xl hover:border-b-2"
          onClick={handleAddToCart}
        >
          Beställ
        </button>
      </div>
    </section>
  );
}
