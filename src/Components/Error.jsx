import styles from "./Error.module.css";

function Error({ error, id }) {
  return (
    <p id={id} role="alert" className={`${styles["error-message"]}`}>
      {error}
    </p>
  );
}

export default Error;
