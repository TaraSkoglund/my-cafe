export default function Home() {
  return (
    <main>
      <div>
        <section className="m-12 font-serif">
          <h1 className="text-2xl">Sortiment</h1>
          <div className="flex space-x-6 my-12">
            <button className="py-3 px-9 border rounded-sm border-black">
              Bullar
            </button>
            <button className="py-3 px-9 border rounded-sm border-black">
              Tårtor
            </button>
            <button className="py-3 px-9 border rounded-sm border-black">
              Kakor
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
