import IMGURL from "../Config/config.js";
import styles from "./SuccessMessage.module.css";

function SuccessMessage() {
  return (
    <div
      className={`${styles["success-message"]}`}
      role="status"
      aria-live="assertive"
    >
      <div className={`${styles["success-message__title"]}`}>
        <img src={`${IMGURL}/images/icon-success-check.svg`} alt="" />
        <h2>Message Sent!</h2>
      </div>

      <p>Thanks for completing the form. We'll be in touch soon!</p>
    </div>
  );
}

export default SuccessMessage;
