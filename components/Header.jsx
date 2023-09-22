"use client";
import { Bars3Icon } from "@heroicons/react/24/outline";
export default function Header() {
  return (
    <header className="fixed bg-opacity-70 backdrop-blur-md z-10 w-screen bg-white top-0 left-0">
      <div className="flex justify-between items-center mx-12 my-4 font-serif">
        <div>My-Cafe</div>
        <nav className="md:block hidden">
          <ul className="flex space-x-6">
            <li className="hover:shadow-2xl hover:border-b-2 border-current p-1">
              <a href="#assortment" className="scroll-link">
                Vårt Sortiment
              </a>
            </li>
            <li className="hover:shadow-2xl hover:border-b-2 border-current p-1">
              <a href="#about" className="scroll-link">
                Om Oss
              </a>
            </li>
            <li className="hover:shadow-2xl hover:border-b-2 border-current p-1">
              <a href="#contact" className="scroll-link">
                Kontakta Oss
              </a>
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
