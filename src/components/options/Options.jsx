import css from "./Options.module.css";

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

export default Options;
