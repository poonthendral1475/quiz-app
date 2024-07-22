import { useRef } from "react";

export default function Answer({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const suffledAnswer = useRef();

  if (!suffledAnswer.current) {
    suffledAnswer.current = [...answers];
    suffledAnswer.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {suffledAnswer.current.map((ans) => {
        const isSelected = selectedAnswer === ans;
        let cssClass = "";
        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }
        return (
          <li key={ans} className="answer">
            <button onClick={() => onSelect(ans)} className={cssClass}
            disabled={answerState!==''}
            >
              {ans}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
