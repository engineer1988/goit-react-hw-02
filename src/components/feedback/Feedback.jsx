import css from "./Feedback.module.css";
import PropTypes from "prop-types";

const Feedback = ({ good, neutral, bad, totalFeedback, positivePercent }) => {
  return (
    <div className={css.feedback_div}>
      <p className={css.feedback}>good: {good}</p>
      <p className={css.feedback}>neutral: {neutral}</p>
      <p className={css.feedback}>bad: {bad}</p>
      <p className={css.feedback}>total: {totalFeedback}</p>
      <p className={css.feedback}>positive: {positivePercent}%</p>
    </div>
  );
};

Feedback.propTypes = {
  totalFeedback: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  positivePercent: PropTypes.number,
};

export default Feedback;
