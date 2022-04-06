import { useRouter } from "next/router";
import EventCard from "../../components/EventCard/EventCard";
import FilterContainer from "../../components/FilterEvents/FilterContainer";
import events from "../../data/events.json";

export default function () {
  const router = useRouter();

  return (
    <div className="mt-[50px] w-full flex flex-col justify-center items-center">
      <FilterContainer />
      {events
        .filter((data) => {
          const splitedDate = data.date.split("-");
          if (router.query.month === "All" && router.query.year === "All")
            return true;
          else if (
            router.query.month === "All" &&
            splitedDate[2] === router.query.year
          )
            return true;
          else if (
            splitedDate[1] === router.query.month &&
            router.query.year === "All"
          )
            return true;
          else if (
            splitedDate[1] === router.query.month &&
            splitedDate[2] === router.query.year
          )
            return true;
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
