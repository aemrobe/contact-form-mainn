import Error from "./Error";
import styles from "./InputControl.module.css";

function InputControl({ type, error, element, inputValue, setInputValue }) {
  return (
    <div className={`input-control ${styles["input-control"]}`}>
      <label htmlFor={`${type}`}>
        {type
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}{" "}
        <span>*</span>
      </label>
      <input
        type="text"
        ref={element}
        className={error && "error"}
        aria-invalid={error ? true : false}
        id={`${type}`}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        aria-describedby={error ? type : null}
      />
      {error ? <Error id={type} error={error} /> : ""}
    </div>
  );
}

export default InputControl;
