import Error from "./Error";
import styles from "./Message.module.css";

function Message({ error, element }) {
  const errorId = "message-error";

  return (
    <div className="input-control">
      <label htmlFor={`${styles["message"]}`}>
        Message
        <span>*</span>
      </label>

      <textarea
        ref={element}
        name="message"
        aria-describedby={error ? `${styles["message"]}` : null}
        aria-invalid={!!error}
        id={errorId}
        className={`${styles["message"]} ${error && "error"}`}
      ></textarea>
      {error && <Error id={errorId} error="This field is required" />}
    </div>
  );
}

export default Message;
