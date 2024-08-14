export default function Feedback({ values: { bad, good, neutral } }) {
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round((good / totalFeedback) * 100);
    return (
      <div>
        <p>Goog {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>Total {totalFeedback}</p>
        <p>Positive {positiveFeedback} %</p>
      </div>
    );
}
