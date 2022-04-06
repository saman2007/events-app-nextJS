import { useRouter } from "next/router";

const years = [];

//the filter should display the years from 1930 to 2030 
for (let index = 2030; index >= 1930; index--) {
  years.push(index);
}

//year filter coomponent
const YearFilter = () => {
  const router = useRouter();

  //a function to change the query of year filter
  const changeYearFilterHandler = (e) => {
    router.replace(
      {
        query: {
          ...router.query,
          year: e.target.value,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div className="flex-grow flex justify-center items-center flex-col">
      <h3 className="text-[20px] font-medium text-sky-600 mb-[5px]">Year</h3>
      <select
        value={router.query.year}
        onChange={changeYearFilterHandler}
        className=" w-6/12 sm:w-2/5 border-solid border-2 text-sky-800 border-sky-600 rounded-[5px] outline-none"
      >
        <option value="All">All</option>
        {years.map((data) => (
          <option key={data} value={data}>
            {data}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearFilter;
