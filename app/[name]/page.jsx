import { MOCK_PRODUCTS } from "@/constants";
import Image from "next/image";
export default function Page({ params }) {
  console.log(MOCK_PRODUCTS);
  const product = MOCK_PRODUCTS.filter(
    (product) => product.title === params.name
  )[0];
  console.log("numer 1", product);

  return (
    <section>
      <div>
        <div className="m-12 font-serif">
          <h1 className="text-2xl">{product.title}</h1>
        </div>
        <div className="m-12 font-serif text-xl">
          <h2>Inehåll</h2>
          <ul>
            <li>{product.ingredients}</li>
          </ul>
        </div>
        <div className="m-12 font-serif text-xl">
          <h2>Beskrivning</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      </div>
      <div>
        <Image
          src={product.img}
          width={500}
          height={500}
          alt={product.title}
          className="h-96 object-cover "
        />
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
