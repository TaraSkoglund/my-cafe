import { MOCK_PRODUCTS } from "@/constants";
import Link from "next/link";
import Card from "./Card";
export default function Assortment() {
  return (
    <section className=" font-serif">
      <h1 className="text-2xl">Sortiment</h1>
      <div className="flex space-x-3 my-12  md:space-x-6">
        <button className="py-1 px-6 border rounded-sm border-black hover:shadow-2xl">
          Bullar
        </button>
        <button className="py-1 px-6 border rounded-sm border-black hover:shadow-2xl">
          Tårtor
        </button>
        <button className="py-1 px-6 border rounded-sm border-black hover:shadow-2xl">
          Kakor
        </button>
      </div>
      <ul className=" grid gap-4 justify-center md:grid-cols-2 xl:grid-cols-4">
        {MOCK_PRODUCTS.map((product) => {
          return (
            <li key={product.id}>
              <Link href={"/" + product.title}>
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
          );
        })}
      </ul>
    </section>
  );
}
