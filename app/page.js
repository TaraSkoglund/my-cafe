import Card from "@/components/Card";

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
        <section className=" flex m-6 font-serif justify-evenly">
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
        <footer className="m-12 font-serif divide-y divide-black">
          <div></div>
          <div className="space-y-3 pt-12">
            <h3>infomycafe@gmail.com</h3>
            <h3>031 55 876</h3>
          </div>
        </footer>
      </div>
    </main>
  );
}
