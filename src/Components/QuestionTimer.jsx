import { useEffect, useState } from "react";
export default function QuestionTimer({ timeout, onTimeout,mode }){
  const [remaingTime, setRemainingTime] = useState(timeout);
  useEffect(()=>{
    console.log('set_time');
  const timer =   setTimeout(onTimeout,timeout);
  return ()=>{
    clearTimeout(timer)
  }
  },[timeout,onTimeout])
  useEffect(()=>{
    console.log('set_inte');
   const interval = setInterval(()=>{
        setRemainingTime(prevRemainingTime =>prevRemainingTime-100)
  },100);
  return ()=>{
    clearTimeout(interval)
  }
},[]);

  return <progress id="question-time" max={timeout} value={remaingTime} className={mode} />  ;
}
