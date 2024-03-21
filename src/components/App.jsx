import { useState, useEffect } from "react";
import "./App.css";
import Description from "./description/Description";
import Options from "./options/Options";
import Feedback from "./feedback/Feedback";
import Notification from "./notification/Notification";

export default function App() {
  const [values, setValues] = useState(() => {
    const savedValues = window.localStorage.getItem("saved-values");
    if (savedValues !== 0) {
      return JSON.parse(savedValues);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  const buttonReset = () => {
    setValues({
      bad: 0,
      neutral: 0,
      good: 0,
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;
  const positivePercent = Math.round(
    ((values.good + values.neutral) / totalFeedback) * 100
  );

  useEffect(() => {
    window.localStorage.setItem("saved-values", JSON.stringify(values));
  }, [values]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        buttonReset={buttonReset}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={values.good}
          neutral={values.neutral}
          bad={values.bad}
          totalFeedback={totalFeedback}
          positivePercent={positivePercent}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
