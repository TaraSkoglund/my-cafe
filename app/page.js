import About from "@/components/About";
import Assortment from "@/components/Assortment";
import Form from "@/components/Form";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <section className="relative z-10">
          <Image
            src="/assets/tårta1-bred.jpeg"
            width={500}
            height={500}
            alt="Hero Imge"
            className="object-cover bg-cover bg-center w-screen h-screen"
          />
          <div className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-serif w-full">
            <h1 className=" text-4xl md:text-7xl mx-3 mb-2 md:mb-6 md:mx-12 ">
              My Cafe
            </h1>
            <h1 className="mx-3 md:mx-12 "> Alltid en kaffe redo</h1>
          </div>
        </section>
        <div className=" flex flex-col gap-y-6 font-serif justify-center mx-12 md:mx-24 lg:mx-32">
          <section id="assortment" className="flex justify-evenly gap-4">
            <Assortment />
          </section>
          <section id="about" className="flex justify-center">
            <About />
          </section>
          <section id="contact" className="flex justify-center">
            <Form />
          </section>
        </div>
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
