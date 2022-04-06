import ExploreEvent from "./ExploreEvent";
import Image from "../Event/Image";
import Info from "../Event/Info";
import Title from "../Event/Title";

const EventCard = (props) => {
  const { title, date, address, path, imgSrc } = props;

  return (
    <div className="bg-slate-200 mb-[15px] flex w-[98%] rounded-[10px] sm:w-[580px] min-h-[260px] transition duration-300 shadow-md hover:shadow-lg mx-auto">
      <Image path={imgSrc} classes="w-[40%] rounded-l-[10px]" />
      <div className="flex-grow p-[5px] flex flex-col">
        <div className="flex-grow">
          <Title text={title} fontSize={20} />
          <Info
            color="black"
            text={date}
            fontSize={16}
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
            color="black"
            text={address}
            fontSize={16}
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
        </div>
        <div className="flex justify-end items-center">
          <ExploreEvent path={path} />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
