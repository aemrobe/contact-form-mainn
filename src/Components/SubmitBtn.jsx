import styles from "./SubmitBtn.module.css";

function SubmitBtn() {
  return (
    <button className={`${styles["submit-btn"]} karla-regular`} type="submit">
      Submit
    </button>
  );
}

export default SubmitBtn;
