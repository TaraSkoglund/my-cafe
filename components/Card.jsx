export default function Card({ title, price, img }) {
  return (
    <section className="flex flex-col justify-items-center border rounded-sm border-black hover:shadow-2xl">
      <div className="flex justify-center">{img}</div>
      <div className="flex justify-between space-x-6 p-3">
        <p>{title}</p>
        <p>{price} kr</p>
      </div>
    </section>
  );
}
