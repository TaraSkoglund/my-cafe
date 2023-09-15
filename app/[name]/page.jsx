// import Image from "next/image";
export default function Page({ params }) {
  // const router = useRouter();
  // return <p>Post: {router.query.slug}</p>;
  return (
    <section>
      <div>
        <div className="m-12 font-serif">
          <h1 className="text-2xl">{params.name}</h1>
        </div>
        <div className="m-12 font-serif text-xl">
          <h2>Inehåll</h2>
          <ul>
            <li>{params.ingredients}</li>
          </ul>
        </div>
        <div className="m-12 font-serif text-xl">
          <h2>Beskrivning</h2>
          <p>{params.description}</p>
          <p>{params.price}</p>
        </div>
      </div>
      <div>
        {/* <Image
          src={img}
          width={500}
          height={500}
          alt={title}
          className="h-96 object-cover "
        /> */}
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
