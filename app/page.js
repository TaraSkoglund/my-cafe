export default function Home() {
  return (
    <main>
      <div>
        <section className="m-12 font-serif">
          <h1 className="text-2xl">Sortiment</h1>
          <div className="flex space-x-3 my-12 md:space-x-6">
            <button className="py-1 px-6 border rounded-sm border-black md: py-3 px-9 ">
              Bullar
            </button>
            <button className="py-1 px-6 border rounded-sm border-black md: py-3 px-9 ">
              Tårtor
            </button>
            <button className="py-1 px-6 border rounded-sm border-black md: py-3 px-9 ">
              Kakor
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
