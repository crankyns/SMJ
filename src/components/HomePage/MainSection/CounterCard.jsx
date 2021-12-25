export const CounterCard = ({ numberCount, cardText }) => {
  return (
    <div className={"list-item"}>
      <p className={"item-number"}>{numberCount}</p>
      <p className={"`item-text"}>{cardText}</p>
    </div>
  );
};
