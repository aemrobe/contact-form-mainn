import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={`${styles["attribution"]}`}>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
      Coded by{" "}
      <a href="https://www.frontendmentor.io/profile/aemrobe">Aemro Bekalu</a>.
    </footer>
  );
}

export default Footer;
