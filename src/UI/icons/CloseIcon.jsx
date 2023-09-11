import styles from "./icon.module.css";

const CloseIcon = ({ onClose, className }) => {
  const classes = className ? `${styles.icon} ${className}` : styles.icon;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
      onClick={onClose}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.92961 17.6568C4.53909 18.0473 4.53909 18.6805 4.92961 19.071C5.32014 19.4615 5.9533 19.4615 6.34383 19.071L12.0008 13.414L17.658 19.0711C18.0485 19.4616 18.6817 19.4616 19.0722 19.0711C19.4627 18.6806 19.4627 18.0474 19.0722 17.6569L13.4151 11.9998L19.0717 6.34309C19.4623 5.95257 19.4623 5.3194 19.0717 4.92888C18.6812 4.53836 18.0481 4.53836 17.6575 4.92888L12.0008 10.5856L6.34427 4.92899C5.95374 4.53846 5.32058 4.53846 4.93005 4.92899C4.53953 5.31951 4.53953 5.95267 4.93005 6.3432L10.5866 11.9998L4.92961 17.6568Z"
      />
    </svg>
  )
};

export default CloseIcon;
