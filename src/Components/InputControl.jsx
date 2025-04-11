function InputControl({ type }) {
  return (
    <div className="input-control">
      <label htmlFor={`${type}`}>
        {type
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}{" "}
        <span>*</span>
      </label>
      <input type="text" id={`${type}`} />
    </div>
  );
}

export default InputControl;
