import { useRouter } from "next/router";

//an array with months name and short name
const months = [
  { name: "January", value: "Jan" },
  { name: "February", value: "Feb" },
  { name: "March", value: "Mar" },
  { name: "April", value: "Apr" },
  { name: "May", value: "May" },
  { name: "June", value: "Jun" },
  { name: "July", value: "Jul" },
  { name: "August", value: "Aug" },
  { name: "September", value: "Sep" },
  { name: "October", value: "Oct" },
  { name: "November", value: "Nov" },
  { name: "December", value: "Dec" },
];

//month filter component
const MonthFilter = () => {
  const router = useRouter();

  //a function to change the query of month filter to users entered month
  const changeMonthFilterHandler = (e) => {
    router.replace(
      {
        query: {
          ...router.query,
          month: e.target.value,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div className="w-3/6 flex justify-center items-center flex-col">
      <h3 className="font-medium text-sky-600 mb-[5px] text-[20px]">Month</h3>
      <select
      value={router.query.month}
        onChange={changeMonthFilterHandler}
        className=" w-6/12 sm:w-2/5 border-solid border-2 text-sky-800 border-sky-600 rounded-[5px] outline-none"
      >
        <option value="All">All</option>
        {months.map((data) => (
          <option key={data.value} value={data.value}>
            {data.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MonthFilter;
