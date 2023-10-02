"use client";
import { useCart } from "@/components/CartContext";
import { MinusCircle, PlusCircle, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
export default function SideBare() {
  const [activeLink, setActiveLink] = useState("");
  const { cartItems, removeFromCart } = useCart();

  return (
    <section className="fixed mt-14 inset-y-0 right-0 bg-opacity-70 backdrop-blur-md w-80 h-screen bg-white font-serif flex flex-col z-50">
      <h1 className="m-3 gap-3 text-xl">Varukorgen</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-start gap-2 m-3">
          <div>
            <Image
              src={item.img}
              width={500}
              height={500}
              alt={item.title}
              className="object-cover bg-cover bg-center w-32 h-40 object-cover"
            />
          </div>
          <div className="text-md">
            <p>{item.title}</p>
            <div className="flex flex-col justify-between gap-2">
              <p className="pb-2">{item.price} kr</p>
              <div className="flex items-center gap-2 pb-1">
                <button>
                  <PlusCircle />
                </button>
                <p>1</p>
                <button>
                  <MinusCircle />
                </button>
              </div>
              <button onClick={() => removeFromCart(item.id)}>
                <Trash2 />
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="m-3 flex justify-center flex-col">
        <div>
          <p>Totalt: {/*calculateTotalPrice(cartItems)*/} kr</p>
        </div>
        <button
          className={`py-1 px-6 border rounded-sm border-black hover:shadow-2xl hover:border-b-2 ${
            activeLink === "Beställ" ? "border-b-2" : ""
          }`}
          onClick={() => setActiveLink("Beställ")}
        >
          Till Kassan
        </button>
      </div>
    </section>
  );
}
