import styles from "./Display.module.css";

export default function Display({calval}) {
  return (
    <>
      <input className={styles.display} type="text" value={calval} readOnly />
    </>
  );
}
