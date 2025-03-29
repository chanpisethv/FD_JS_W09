
import React,{useState} from "react";

export default function App() {
  //this use to score the score that user input
  const [score, setScore]= useState(0);

  //this use to handle input 
  const handleScoreChange = (e)=>{
    let value = parseInt(e.target.value, 10);
    if (isNaN(value) || value<0) value=0;
    if(value > 10) value = 10;
    setScore(value);
  };
  // get style on barstyle
  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${(score/10)* 100}%`; // convert score to %width

    // 2- Compute color for the range of score
    let scoreColor = `#f3bc47`;
    if(score >= 7) scoreColor = "#8bc34a";
    else if (score <=3) scoreColor = "#ff7043";

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
      transition: "width 0.3s ease, background-color o.3s ease",
    };
  };
 
  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" value={score} onChange={handleScoreChange}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
