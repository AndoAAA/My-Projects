import { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Result from "./components/Result";

const questions = [
  {
    title: " React - it is ... ?",
    variants: ["bibliotec", "framework", "application"],
    correct: 0,
  },
  {
    title: " Component - it is ...",
    variants: ["application", "part of application or of page", "I don`t know"],
    correct: 1,
  },
  {
    title: " What is JSX?",
    variants: [
      "It is HTML",
      "It is function",
      "JSX allows us to write HTML in React.",
    ],
    correct: 2,
  },
];
function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];
  
  

  const onClickVariant = (index) =>{
    setStep(step + 1);

    if(index === question.correct){
      setCorrect(correct + 1);
    }
  }

  return (
    <div className="general">
      {
        step !== questions.length ? (<Game step={step} question={question} onClickVariant={onClickVariant} />) :
        (<Result correct={correct} questions={questions}/>)
      }
    </div>
  );
}

export default App;
