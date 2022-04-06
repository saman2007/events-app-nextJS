//events title component
const Title = (props) => {
  const { text, fontSize } = props;

  return (
    <h2
      className={`text-center mb-[20px] text-zinc-900 text-[${fontSize}px] font-semibold`}
    >
      {text}
    </h2>
  );
};

export default Title;
