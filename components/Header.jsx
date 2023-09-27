"use client";
import SideBare from "@/components/SideBare";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";
export default function Header() {
  const [activeLink, setActiveLink] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handelIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
    console.log(isCartOpen);
  };

  return (
    <header className="fixed bg-opacity-70 backdrop-blur-md z-20 w-screen bg-white top-0 left-0">
      <div className="flex justify-between items-center mx-12 my-4 font-serif">
        <button
          className={`hover:shadow-2xl hover:border-b-2 border-current p-1 ${
            activeLink === "start" ? "border-b-2" : ""
          }`}
        >
          <a href="/">My-Cafe</a>
        </button>
        <nav className="md:block hidden">
          <ul className="flex space-x-6">
            <li
              className={`hover:shadow-2xl hover:border-b-2 border-current p-1 ${
                activeLink === "assortment" ? "border-b-2" : ""
              }`}
            >
              <a href="#assortment" onClick={() => setActiveLink("assortment")}>
                Vårt Sortiment
              </a>
            </li>
            <li
              className={`hover:shadow-2xl hover:border-b-2 border-current p-1 ${
                activeLink === "about" ? "border-b-2" : ""
              }`}
            >
              <a href="#about" onClick={() => setActiveLink("about")}>
                Om Oss
              </a>
            </li>
            <li
              className={`hover:shadow-2xl hover:border-b-2 border-current p-1 ${
                activeLink === "contact" ? "border-b-2" : ""
              }`}
            >
              <a href="#contact" onClick={() => setActiveLink("contact")}>
                Kontakta Oss
              </a>
            </li>
            <li
              className={`hover:shadow-2xl hover:border-b-2 border-current p-1 ${
                activeLink === "cart" ? "border-b-2" : ""
              }`}
            >
              <button onClick={handelIsCartOpen}>
                <ShoppingBag />
              </button>
              <SideBare className="hidden" />
              {/* <SideBare className={isCartOpen ? "block" : "hidden"} /> */}
              {/* // <div className={isCartOpen ? <SideBare /> : ""}></div> */}
            </li>
          </ul>
        </nav>
        <button className="hover:bg-slate-200 p-1 md:hidden">
          <Bars3Icon className="h-8 w-8 " />
        </button>
      </div>
    </header>
  );
}
