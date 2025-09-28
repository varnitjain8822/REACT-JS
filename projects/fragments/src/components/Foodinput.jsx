import styles from "./Foodinput.module.css";

export default function Foodinput(props) {
  return (
    <input
      type="text"
      className={styles.inputbutton}
      onKeyDown={props.handleOnChange} // ✅ corrected casing
    />
  );
}
