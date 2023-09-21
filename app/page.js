import About from "@/components/About";
import Assortment from "@/components/Assortment";
import Form from "@/components/Form";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <section className="relative">
          <Image
            src="/assets/tårta1-bred.jpeg"
            width={500}
            height={500}
            alt="Hero Imge"
            className="object-cover w-screen max-h-xl "
          />
          <div className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-serif w-full">
            <Link href="/">
              <h1 className=" text-4xl md:text-7xl mx-3 mb-2 md:mb-6 md:mx-12 ">
                My Cafe
              </h1>
            </Link>
            <h1 className="mx-3 md:mx-12 "> Alltid en kaffe redo</h1>
          </div>
        </section>

        <section id="assortment" className=" flex font-serif justify-evenly">
          <Assortment />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Form />
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
