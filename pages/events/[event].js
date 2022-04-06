import { useRouter } from "next/router";
import Title from "../../components/Event/Title";
import EventInfosCard from "../../components/EventPage/EventInfosCard";
import BlueCover from "../../components/EventPage/BlueCover";
import events from "../../data/events.json";

export default function () {
  const router = useRouter();
  const index = events.findIndex((value) => value.path === router.asPath);

  //image, date, address, description

  return (
    <>
      <BlueCover />
      <div className="mt-[50px]">
        {router.isReady ? (
          index === -1 ? (
            <p className="text-[23px] font-semibold m-auto w-fit text-red-700">
              event not found!
            </p>
          ) : (
            <>
              <Title text={events[index].title} fontSize={30} />
              <EventInfosCard
                image={events[index].image}
                date={events[index].date}
                address={events[index].address}
                description={events[index].description}
              />
            </>
          )
        ) : (
          <p className="text-[23px] font-semibold m-auto w-fit">loading...</p>
        )}
      </div>
    </>
  );
}
