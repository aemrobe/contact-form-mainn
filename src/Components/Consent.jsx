import styles from "./Consent.module.css";
import Error from "./Error";

function Consent({ error, element }) {
  const errorId = "consent-error";

  return (
    <div className={`${styles.consent}`}>
      <input
        aria-describedby={error ? errorId : null}
        aria-invalid={!!error}
        ref={element}
        type="checkbox"
        name="consent"
        id="accept"
      />
      <label htmlFor="accept">
        I consent to being contacted by the team <span>*</span>
      </label>
      {error && <Error id={errorId} error={error} />}
    </div>
  );
}

export default Consent;
