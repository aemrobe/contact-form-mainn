import Error from "./Error";
import styles from "./QueryTypeInputControl.module.css";

function QueryTypeInputControl({ general, support, error }) {
  const errorId = "query-type-error";

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
          ref={general}
        />

        <label htmlFor="general">General Enquiry</label>

        <input
          type="radio"
          name="Query Type"
          value="Support Request"
          id="support"
          ref={support}
        />
        <label htmlFor="support">Support Request</label>

        {error && <Error id={errorId} error={error} />}
      </div>
    </div>
  );
}

export default QueryTypeInputControl;
