import "./Advice.scss";
import dice from "../../assets/images/icon-dice.svg";
import { useEffect, useState } from "react";

function Advice({
  advice = { id: "", advice: "" },
  onFetchAdvice = () => {},
  nextAdviceInterval = 0,
}) {
  const [diceEnabled, setDiceEnabled] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDiceEnabled(true);
    }, nextAdviceInterval);
  }, [nextAdviceInterval]);

  function handleOnFetchAdvice() {
    setDiceEnabled(false);
    onFetchAdvice();
    setTimeout(() => {
      setDiceEnabled(true);
    }, nextAdviceInterval);
  }

  return (
    <div className="advice-container">
      <span className="advice--number">ADVICE #{advice.id}</span>
      <q className="advice--message">{advice.advice}</q>
      <div className="advice--divider" />
      <button
        className="advice--dice"
        disabled={!diceEnabled}
        onClick={handleOnFetchAdvice}
      >
        <img src={dice} alt="Dice" />
      </button>
    </div>
  );
}

export default Advice;
