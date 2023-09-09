import styles from "./icon.module.css";

const Dots = ({ onClick }) => (
  <svg
    width="30px"
    height="30px"
    viewBox="0 0 24 24"
    id="three-dots"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    className={styles.icon}
  >
    <g
      id="_20x20_three-dots--grey"
      data-name="20x20/three-dots--grey"
      transform="translate(24) rotate(90)"
    >
      <rect id="Rectangle" width="24" height="24" fill="none" />
      <circle
        id="Oval"
        cx="1"
        cy="1"
        r="1"
        transform="translate(5 11)"
        stroke="#000000"
        stroke-miterlimit="10"
        stroke-width="0.5"
      />
      <circle
        id="Oval-2"
        data-name="Oval"
        cx="1"
        cy="1"
        r="1"
        transform="translate(11 11)"
        stroke="#000000"
        stroke-miterlimit="10"
        stroke-width="0.5"
      />
      <circle
        id="Oval-3"
        data-name="Oval"
        cx="1"
        cy="1"
        r="1"
        transform="translate(17 11)"
        stroke="#000000"
        stroke-miterlimit="10"
        stroke-width="0.5"
      />
    </g>
  </svg>
);

export default Dots;
