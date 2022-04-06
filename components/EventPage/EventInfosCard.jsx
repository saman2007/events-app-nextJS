import Image from "../Event/Image";
import Info from "../Event/Info";

//event infos card that should be displayed in event page
const EventInfosCard = (props) => {
  const { image, date, address, description } = props;
  return (
    <div className="bg-zinc-900 mb-[15px] flex w-[98%] rounded-[10px] p-[10px] sm:w-[620px] min-h-[260px] mx-auto">
      <div className="flex min-w-[150px] w-[150px] sm:min-w-[200px] sm:w-[200px] justify-center items-center">
        <Image
          path={image}
          classes="rounded-full h-[150px] sm:h-[200px] w-full border-white border-[2px] border-solid"
        />
      </div>
      <div className="flex-grow p-[10px] flex justify-center flex-col">
        <Info
          text={date}
          color="white"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-sky-600 min-h-[24px] max-h-[24px] min-w-[24px] max-w-[24px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          }
        />
        <Info
          text={address}
          color="white"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-sky-600 min-h-[24px] max-h-[24px] min-w-[24px] max-w-[24px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          }
        />
        <Info
          text={description}
          color="white"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-sky-600 min-h-[24px] max-h-[24px] min-w-[24px] max-w-[24px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default EventInfosCard;
