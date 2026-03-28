import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center mt-5">
      <h1>Bharat Clock</h1>

      <h2>{time.toLocaleTimeString()}</h2>

      <p>{time.toDateString()}</p>
    </div>
  );
}

export default Clock;
