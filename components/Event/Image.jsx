const Image = (props) => {
  const { path, classes } = props;

  return <img src={path} alt="event-image" className={classes} />;
};

export default Image;
