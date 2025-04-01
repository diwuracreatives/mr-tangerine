let idx = 1;

export default function Header() {
  return (
    <nav className="max-w-8xl  px-8 sm:px-32 flex justify-between items-center">
      <img src="/logo.svg" alt="logo"></img>
      <p className="text-2xl">
        <span className="text-3xl font-semibold">{idx}</span>/3
      </p>
    </nav>
  );
}
