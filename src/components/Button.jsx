import PropTypes from "prop-types";
import "../styles/Button.css";

const Button = ({
  label,
  onClick,
  variant = "primary", // 'primary' | 'secondary'
  type = "button", // button type: 'button', 'submit', etc.
}) => {
  const classes = [
    "button",
    variant,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

export default Button;