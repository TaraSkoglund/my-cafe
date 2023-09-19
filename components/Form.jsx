export default function Form() {
  return (
    <section className="m-12 font-serif">
      <h1 className="text-2xl py-6">Kontakta oss</h1>
      <form action="#" className="px-4">
        <div>
          <input
            type="text"
            placeholder="Förnamn"
            className="form-input border-black rounded mb-6 mr-6 sm:w-full md:w-5/12"
          />
          <input
            type="text"
            placeholder="Efternamn"
            className="form-input border-black rounded mb-6 sm:w-full md:w-5/12 "
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="form-input border-black rounded mb-6 mr-6 sm:w-full md:w-5/12"
          />
          <input
            type="tel"
            placeholder="Nummer"
            className="form-input border-black rounded mb-6 sm:w-full md:w-5/12 "
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Medelande"
            className="form-input border-black rounded mb-6 w-full"
          />
          <button className="py-1 px-6 border rounded-sm border-black hover:shadow-2xl">
            Skicka
          </button>
        </div>
      </form>
    </section>
  );
}
