import { useRouter } from "next/router";
import Title from "../../components/Event/Title";
import EventInfosCard from "../../components/EventPage/EventInfosCard";
import BlueCover from "../../components/EventPage/BlueCover";
import events from "../../data/events.json";

function EventPage() {
  const router = useRouter();
  //find the event that its path is equal to users entered url
  const index = events.findIndex((value) => value.path === router.asPath);

  return (
    <>
      <BlueCover />
      <div className="mt-[50px]">
        {/* if router is rady, display the event infos */}
        {router.isReady ? (
          //if index is equal to -1, it means event not found
          index === -1 ? (
            <p className="text-[23px] font-semibold m-auto w-fit text-red-700">
              event not found!
            </p>
            //else, display the events infos
          ) : (
            <>
              <Title text={events[index].title} fontSize="30" />
              <EventInfosCard
                image={events[index].image}
                date={events[index].date}
                address={events[index].address}
                description={events[index].description}
              />
            </>
          )
        ) : (
          //if router is getting ready, display loading text
          <p className="text-[23px] font-semibold m-auto w-fit">loading event...</p>
        )}
      </div>
    </>
  );
}

export default EventPage;