export const InputItem = ({
  itemInputClass,
  itemLabelClass,
  itemInputLabelClass,
  lableFor,
  lableName,
  moreInfoName,
  inputType,
  inputId,
  inputPlaceholder,
  inputValue,
  onChange,
}) => {
  return (
    <div className={itemInputClass}>
      <div className={itemLabelClass}>
        <label className={itemInputLabelClass} htmlFor={lableFor}>
          <p>{lableName}</p>
        </label>
        <div className={moreInfoName}>
          <i class="fas fa-question-circle"></i>
        </div>
      </div>
      <input
        type={inputType}
        id={inputId}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={onChange}
      />
    </div>
  );
};
