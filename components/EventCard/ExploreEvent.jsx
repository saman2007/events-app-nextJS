import Link from "next/link";

const ExploreEvent = (props) => {
  const {path} = props;

  return (
    <Link href={path}>
      <a className="px-[10px] text-white bg-sky-500 hover:bg-sky-600 rounded-[5px] transition duration-300 py-[5px]">Explore event<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline ml-[10px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></a>
    </Link>
  );
};

export default ExploreEvent;