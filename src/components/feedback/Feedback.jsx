import css from "./Feedback.module.css";
import PropTypes from "prop-types";

const Feedback = ({ good, neutral, bad, totalFeedback }) => {
  return totalFeedback === 0 ? (
    "No feedback yet"
  ) : (
    <div className={css.feedback_div}>
      <p className={css.feedback}>good: {good}</p>
      <p className={css.feedback}>neutral: {neutral}</p>
      <p className={css.feedback}>bad: {bad}</p>
      {totalFeedback >= 1 && (
        <p className={css.feedback}>total: {totalFeedback}</p>
      )}
      {totalFeedback >= 1 && (
        <p className={css.feedback}>
          positive: {Math.round(((good + neutral) / totalFeedback) * 100)}%
        </p>
      )}
    </div>
  );
};

Feedback.propTypes = {
  totalFeedback: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default Feedback;
