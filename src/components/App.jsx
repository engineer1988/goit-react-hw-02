import { useState, useEffect } from "react";
import "./App.css";
import Description from "./description/Description";
import Options from "./options/Options";
import Feedback from "./feedback/Feedback";

export default function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateGood = () => {
    setValues({
      ...values,
      good: values.good + 1,
    });
  };

  const updateNeutral = () => {
    setValues({
      ...values,
      neutral: values.neutral + 1,
    });
  };
  const updateBad = () => {
    setValues({
      ...values,
      bad: values.bad + 1,
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

  useEffect(() => {
    window.localStorage.setItem("saved-values", JSON.stringify({ values }));
  }, [values]);

  return (
    <>
      <Description />
      <Options
        updateGood={updateGood}
        updateNeutral={updateNeutral}
        updateBad={updateBad}
        totalFeedback={totalFeedback}
        buttonReset={buttonReset}
      />
      <Feedback
        good={values.good}
        neutral={values.neutral}
        bad={values.bad}
        totalFeedback={totalFeedback}
      />
    </>
  );
}
