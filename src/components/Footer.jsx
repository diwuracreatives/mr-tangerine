export default function Footer() {
  return (
    <footer className="self-center flex gap-16 sm:gap-32 mt-8 [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:justify-center [&>*]:cursor-pointer [&>*]:gap-2">
      <div>
        <img src="/happy.svg" />
        <p>Good to go!</p>
      </div>
      <div>
        <img src="/sad.svg" />
        <p>There's an issue!</p>
      </div>
    </footer>
  );
}
