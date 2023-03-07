type Props = {
  date: Date;
};

const CardDate = (props: Props) => {
  const date = new Date(props.date).toString().split(" ");

  return (
    <span className="text-primaryGrey font-semibold text-xs">
      {`${date[2]} ${date[1]}. ${date[3]}`}
    </span>
  );
};

export default CardDate;
