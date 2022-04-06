import { useRouter } from "next/router";
import EventCard from "../../components/EventCard/EventCard";
import FilterContainer from "../../components/FilterEvents/FilterContainer";
import events from "../../data/events.json";

//events page that displays all of the events
export default function () {
  const router = useRouter();

  return (
    <div className="mt-[50px] w-full flex flex-col justify-center items-center">
      <FilterContainer />
      {/* filter the events base on users selected filter */}
      {events
        .filter((data) => {
          //split the date string
          //in this array index 2 is for year, index one is for month and index 0 is for day
          const splitedDate = data.date.split("-");
          //if month filter and year filter is All, it means display all the events
          if (router.query.month === "All" && router.query.year === "All")
            return true;
            //if month filter is All it means display the events base on year filter
          else if (
            router.query.month === "All" &&
            splitedDate[2] === router.query.year
          )
            return true;
            //if year filter is All, display the events base on month filter
          else if (
            splitedDate[1] === router.query.month &&
            router.query.year === "All"
          )
            return true;
            //display the events base on both year and month
          else if (
            splitedDate[1] === router.query.month &&
            splitedDate[2] === router.query.year
          )
            return true;
            //if the event is not match with the users filter, dont display that event
          else return false;
        })
        .map((value, index) => (
          <EventCard
            key={index}
            title={value.title}
            date={value.date}
            address={value.address}
            path={value.path}
            imgSrc={value.image}
          />
        ))}
    </div>
  );
}
