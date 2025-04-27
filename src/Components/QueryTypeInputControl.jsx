import { useError } from "../Context/ErrorContext";
import { useInputValue } from "../Context/InputValueContext";
import Error from "./Error";
import styles from "./QueryTypeInputControl.module.css";

function QueryTypeInputControl() {
  const { errorQueryType: error } = useError();
  const { queryType, setQueryType } = useInputValue();

  const errorId = "query-type-error";

  const handleQueryType = function (e) {
    setQueryType(e.target.value);
  };

  return (
    <div className="input-control">
      <label>
        Query Type <span>*</span>
      </label>

      <div
        aria-describedby={error ? errorId : null}
        aria-invalid={error ? true : false}
        className={`${styles["input-control__input-container"]}`}
      >
        <input
          type="radio"
          name="Query Type"
          id="general"
          value="General Enquiry"
          checked={queryType === "General Enquiry"}
          onChange={handleQueryType}
        />

        <label htmlFor="general">General Enquiry</label>

        <input
          type="radio"
          name="Query Type"
          value="Support Request"
          id="support"
          checked={queryType === "Support Request"}
          onChange={handleQueryType}
        />
        <label htmlFor="support">Support Request</label>

        {error && <Error id={errorId} error={error} />}
      </div>
    </div>
  );
}

export default QueryTypeInputControl;
