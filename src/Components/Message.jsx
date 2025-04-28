import { useError } from "../Context/ErrorContext";
import { useInputValue } from "../Context/InputValueContext";
import Error from "./Error";
import styles from "./Message.module.css";

function Message() {
  const errorId = "message-error";

  const { errorMessage: error } = useError();
  const { message, setMessage } = useInputValue();

  return (
    <div className="input-control">
      <label htmlFor={errorId}>
        Message
        <span>*</span>
      </label>

      <textarea
        name="message"
        aria-describedby={error ? `${styles["message"]}` : null}
        aria-invalid={!!error}
        id={errorId}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={`${styles["message"]} ${error && "error"}`}
      ></textarea>
      {error && <Error id={errorId} error="This field is required" />}
    </div>
  );
}

export default Message;
