import css from "./Options.module.css";
import PropTypes from "prop-types";

const Options = ({ updateFeedback, totalFeedback, buttonReset }) => {
  return (
    <div className={css.button_div}>
      <button
        onClick={() => {
          updateFeedback("good");
        }}
        className={css.button}
      >
        good
      </button>
      <button
        onClick={() => {
          updateFeedback("neutral");
        }}
        className={css.button}
      >
        neutral
      </button>
      <button
        onClick={() => {
          updateFeedback("bad");
        }}
        className={css.button}
      >
        bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={buttonReset} className={css.button}>
          reset
        </button>
      )}
    </div>
  );
};

Options.propTypes = {
  totalFeedback: PropTypes.number,
  buttonReset: PropTypes.func,
  updateFeedback: PropTypes.func,
};

export default Options;
