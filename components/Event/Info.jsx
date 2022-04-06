const Info = (props) => {
  const { text, icon, fontSize, color } = props;

  return (
    <div className={`text-[${fontSize}px] text-${color} flex mb-[10px] last:mb-0`}>
      {icon}
      <p className="ml-[5px] break-all">{text}</p>
    </div>
  );
};

export default Info;