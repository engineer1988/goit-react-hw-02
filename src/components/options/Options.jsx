import css from "./Options.module.css";
import PropTypes from "prop-types";

const Options = ({
  updateGood,
  updateNeutral,
  updateBad,
  totalFeedback,
  buttonReset,
}) => {
  return (
    <div className={css.button_div}>
      <button onClick={updateGood} className={css.button}>
        good
      </button>
      <button onClick={updateNeutral} className={css.button}>
        neutral
      </button>
      <button onClick={updateBad} className={css.button}>
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
  updateGood: PropTypes.func,
  updateNeutral: PropTypes.func,
  updateBad: PropTypes.func,
  buttonReset: PropTypes.func,
};

export default Options;
