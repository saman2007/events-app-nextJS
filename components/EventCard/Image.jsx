const Image = (props) => {
  const { path } = props;

  return <img src={path} alt="event-image" className="w-[40%] rounded-l-[10px] h-full" />;
};

export default Image;
