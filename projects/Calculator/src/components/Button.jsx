import styles from './Button.module.css';

export default function Button({ buttonarray ,onbuttonclick}) {
  return ( 
    <>
      {buttonarray.map((button, index) => (
        <button key={index} className={styles.button} onClick={()=>onbuttonclick(button)}>
          {button}
        </button>
      ))}
    </>
  );
}
