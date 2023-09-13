export default function Header() {
  return (
    <header className="flex justify-between items-center mx-12 my-6 bg-white font-serif">
      <div>My-Cafe</div>
      <nav>
        <ul className="flex space-x-6">
          <li className="hover:bg-slate-200 p-1">Vårt Sortiment</li>
          <li className="hover:bg-slate-200 p-1">Om Oss</li>
          <li className="hover:bg-slate-200 p-1">Kontakta Oss</li>
        </ul>
      </nav>
    </header>
  );
}
