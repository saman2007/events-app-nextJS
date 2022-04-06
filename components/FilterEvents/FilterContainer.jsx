import MonthFilter from "./MonthFilter";
import YearFilter from "./YearFilter";

//filter container component
const FilterContainer = (props) => {
  const { updateMonthFilter, updateYearFilter, year, month } = props;

  return (
    <div className="bg-zinc-900 w-[98%] sm:w-[580px] flex mx-auto mb-[35px] p-[5px] rounded-[5px]">
      <MonthFilter updateMonthFilter={updateMonthFilter} month={month} />
      <YearFilter updateYearFilter={updateYearFilter} year={year} />
    </div>
  );
};

export default FilterContainer;
