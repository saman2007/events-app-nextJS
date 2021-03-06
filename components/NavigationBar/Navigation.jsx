import Link from "next/link";

//navigation bar component
const Navigation = () => {
  return (
    <div className="w-full bg-zinc-900 flex justify-center very-small:justify-between min-h-[70px] very-small:flex-row flex-col items-center px-[20px]">
      <h1 className="text-[26px] font-extrabold text-sky-400">
        <Link href="/">Next Events App</Link>
      </h1>
      <Link href="/events?month=All&year=All">
        <a className="text-sky-500 hover:text-sky-600 text-[20px]">
          Brows All Events
        </a>
      </Link>
    </div>
  );
};

export default Navigation;
