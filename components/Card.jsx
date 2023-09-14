import Image from "next/image";

export default function Card({ title, price, img }) {
  return (
    <section className="flex w-72 flex-col border rounded-sm border-black hover:shadow-2xl">
      <div className="">
        <Image
          src={img}
          width={500}
          height={500}
          alt={title}
          className="h-96 object-cover "
        />
      </div>
      <div className="flex justify-between p-3">
        <p>{title}</p>
        <p>{price} kr</p>
      </div>
    </section>
  );
}
