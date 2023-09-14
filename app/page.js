import About from "@/components/About";
import Assortment from "@/components/Assortment";

export default function Home() {
  return (
    <main>
      <div>
        <section>
          {/* <image></image> */}
          <div className="m-12 font-serif space-y-6">
            <h1 className="text-7xl">My Cafe</h1>
            <h1> Alltide en kaffe redo</h1>
          </div>
        </section>

        <section className=" flex font-serif justify-evenly">
          <Assortment />
        </section>
        <section>
          <About />
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
