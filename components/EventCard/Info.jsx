const Info = (props) => {
  const { text, icon } = props;

  return (
    <div className="text-[16px] flex mb-[10px] last:mb-0">
      {icon}
      <p className="ml-[5px]">{text}</p>
    </div>
  );
};

export default Info;