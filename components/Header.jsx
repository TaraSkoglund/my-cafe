"use client";
import { useCart } from "@/app/Context/CartContext";
import SideBare from "@/components/SideBare";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
export default function Header() {
  const [activeLink, setActiveLink] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const { totalItemCount } = useCart();

  const handleIsCartOpen = () => {
    if (nav) {
      setNav(false);
    }
    setIsCartOpen(!isCartOpen);
  };

  const handleNav = () => {
    if (isCartOpen) {
      setIsCartOpen(false);
    }
    setNav(!nav);
  };

  return (
    <header className="fixed bg-opacity-70 backdrop-blur-md z-20 w-screen h-14 bg-white top-0 left-0">
      <div className="flex justify-between items-center mx-12 my-3 font-serif">
        <button
          className={`hover:shadow-2xl hover:border-b-2 border-current p-1 z-30 ${
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
              <button className="relative" onClick={handleIsCartOpen}>
                <ShoppingBag />
                {totalItemCount > 0 && (
                  <span className="absolute top-[-10px] right-[-10px] bg-black text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    {totalItemCount}
                  </span>
                )}
              </button>
              <div className={isCartOpen ? "block" : "hidden"}>
                <SideBare isOpen={isCartOpen} />
              </div>
            </li>
          </ul>
        </nav>
        <nav className="z-30 md:hidden">
          <ul className="flex gap-3">
            <li
              className={`hover:shadow-2xl hover:border-b-2 border-current p-1 ${
                activeLink === "menue" ? "border-b-2" : ""
              }`}
            >
              <button onClick={handleNav}>
                {nav ? (
                  <X className="h-6 w-6 hover:shadow-2xl hover:border-b-black-2" />
                ) : (
                  <Menu className="h-6 w-6 hover:shadow-2xl hover:border-b-black-2" />
                )}
              </button>
            </li>
            <li
              className={`hover:shadow-2xl hover:border-b-2 border-current p-1 ${
                activeLink === "cart" ? "border-b-2" : ""
              }`}
            >
              <button className="relative" onClick={handleIsCartOpen}>
                <ShoppingBag className="h-6 w-6" />
                {totalItemCount > 0 && (
                  <span className="absolute top-[-10px] right-[-10px] bg-black text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    {totalItemCount}
                  </span>
                )}
              </button>
              <div className={isCartOpen ? "block" : "hidden"}>
                <SideBare isOpen={isCartOpen} />
              </div>
            </li>
          </ul>
        </nav>
        <nav
          className={
            nav
              ? "md:hidden absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-opacity-70 backdrop-blur-md bg-white ease-in duration-300"
              : "md:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-opacity-70 backdrop-blur-md bg-white ease-in duration-300"
          }
        >
          <ul
            className="flex flex-col justify-center items-center"
            onClick={handleNav}
          >
            <li
              className={`hover:shadow-2xl hover:border-b-2 border-current p-1 m-4 text-2xl${
                activeLink === "assortment" ? "border-b-2" : ""
              }`}
            >
              <a
                href="#assortment"
                onClick={() => setActiveLink("assortment")}
                className="text-2xl"
              >
                Vårt Sortiment
              </a>
            </li>
            <li
              className={`hover:shadow-2xl hover:border-b-2 border-current p-1 m-4 text-2xl${
                activeLink === "about" ? "border-b-2" : ""
              }`}
            >
              <a
                href="#about"
                onClick={() => setActiveLink("about")}
                className="text-2xl"
              >
                Om Oss
              </a>
            </li>
            <li
              className={`hover:shadow-2xl hover:border-b-2 border-current p-1 m-4 text-2xl${
                activeLink === "contact" ? "border-b-2" : ""
              }`}
            >
              <a
                href="#contact"
                onClick={() => setActiveLink("contact")}
                className="text-2xl"
              >
                Kontakta Oss
              </a>
            </li>
            <li
              className={`hover:shadow-2xl hover:border-b-2 border-current p-1 m-4 text-2xl${
                activeLink === "cart" ? "border-b-2" : ""
              }`}
            ></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
