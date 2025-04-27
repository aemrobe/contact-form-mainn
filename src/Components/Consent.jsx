import { useError } from "../Context/ErrorContext";
import { useInputValue } from "../Context/InputValueContext";
import styles from "./Consent.module.css";
import Error from "./Error";

function Consent() {
  const errorId = "consent-error";

  const { errorConsent: error } = useError();
  const { consent, setConsent } = useInputValue();

  const handleConsent = function (e) {
    setConsent(e.target.checked);
  };

  return (
    <div className={`${styles.consent}`}>
      <input
        aria-describedby={error ? errorId : null}
        aria-invalid={!!error}
        checked={consent}
        onChange={handleConsent}
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
