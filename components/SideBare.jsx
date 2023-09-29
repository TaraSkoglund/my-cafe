"use client";
import { MinusCircle, PlusCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
export default function SideBare() {
  const [activeLink, setActiveLink] = useState("");
  return (
    <section className="fixed mt-14 inset-y-0 right-0 bg-opacity-70 backdrop-blur-md w-80 h-screen bg-white font-serif flex flex-col z-50">
      <h1 className="m-3 gap-3 text-xl">Varukorgen</h1>
      <div className="flex justify-start gap-2 m-3">
        <div>
          <Image
            src="/assets/tårta3.jpeg"
            width={500}
            height={500}
            alt="Hero Imge"
            className="object-cover bg-cover bg-center w-32 h-40 object-cover"
          />
        </div>
        <div className="text-md">
          <p className="pb-2">Hallongrottor</p>
          <div className="flex flex-col justify-between">
            <p className="pb-2">136 kr</p>
            <div className="flex items-center gap-2">
              <button>
                <PlusCircle />
              </button>
              <p>1</p>
              <button>
                <MinusCircle />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="m-3 flex justify-center flex-col">
        <div>
          <p>Totalt: 136 kr</p>
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
