import React, { useEffect, useState } from "react";
import Input from "../InputComponent/Input";

const Counter = () => {
  const [timer, setTimer] = useState(0);
  const [count, setCount] = useState(0);
  const [timerDuration, setTimerDuration] = useState(0);

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  useEffect(() => {
    let timer_copy = timer;
    if (timer_copy > 60) {
      timer_copy = 1;
      setTimer(timer_copy);
      setTimerDuration(timerDuration + 1);
    } else {
      setTimeout(() => {
        setTimer(timer_copy + 1);
      }, 1000);
    }
  }, [timer]);

  return (
    <div className="container ">
      <div className="row bg-dark ">
        <div className="col-md-12 p-3">
          <p>Header</p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <div>
            <h4>Timer</h4>
            <h4 className="text-center">{timer}</h4>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <div>
            <h4>Minutes Passed</h4>
            <h4 className="text-center">
              {timerDuration} {timerDuration < 2 ? "minute" : "minutes"}
            </h4>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <div>
            <h4>Click Counter</h4>
            <h4 className="text-center">{count}</h4>
          </div>
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <button
            className="btn btn-primary"
            onClick={() => setCount(count + 1)}
          >
            count
          </button>
        </div>
      </div>
      <div className="row justify-content-end p-3">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <Input ID="inp" name={"something"} type={"text"} classes="form-control" handleChange={handleChange}/>
        </div>
      </div>
    </div>
  );
};

export default Counter;
