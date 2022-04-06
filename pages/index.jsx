import EventCard from "../components/EventCard/EventCard";
import events from "../data/events.json";

//main page that displays three events
export default function () {
  return (
    <div className="mt-[50px] w-full flex flex-col justify-center items-center">
      {/* display event from index 1, 3, 5 */}
      {[1, 3, 5].map((value, index) => (
        <EventCard
          key={index}
          title={events[value].title}
          date={events[value].date}
          address={events[value].address}
          path={events[value].path}
          imgSrc={events[value].image}
        />
      ))}
    </div>
  );
}
