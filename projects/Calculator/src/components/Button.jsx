import styles from './Button.module.css';

export default function Button({ buttonarray }) {
  return (
    <>
      {buttonarray.map((button, index) => (
        <button key={index} className={styles.button}>
          {button}
        </button>
      ))}
    </>
  );
}
