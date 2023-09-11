import styles from "./SubmitButton.module.css";

const SubmitButton = ({ short, text }) => {
  const className = short ? `${styles.SubmitButton} ${styles.short}` : styles.SubmitButton;
  
  return (
    <button className={className} type="submit">
      {text}
    </button>
  );
};

export default SubmitButton;
