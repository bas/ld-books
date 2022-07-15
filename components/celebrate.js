import { useState, useEffect } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

function Celebrate({ confetti }) {
  const [celebrate, setCelebrate] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    setCelebrate(confetti);
  }, [confetti]);

  setTimeout(() => setCelebrate(false), 10000);

  return celebrate ? <Confetti width={width} height={height} /> : null;
}

export default Celebrate;
