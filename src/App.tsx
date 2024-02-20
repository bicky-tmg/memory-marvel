import { useEffect, useMemo, useRef, useState } from "react";
import { Board, Marvel } from "./components";
import { getBoardsData } from "./constant/board";
import { MARVELS } from "./constant/marvel";
import { shuffle } from "./utils/shuffle";

function App() {
  const [timer, setTimer] = useState(60);
  const [flips, setFlips] = useState(0);
  const [score, setScore] = useState(0);
  const flippedMarvelsRef = useRef(new Map());
  const [enableTimer, setEnableTimer] = useState(false);

  useEffect(() => {
    if (enableTimer) {
      const interval = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [enableTimer]);

  const BOARDS = getBoardsData(score, flips, timer);
  const randomMarvels = useMemo(() => shuffle(MARVELS), []);

  return (
    <main className="container mx-auto min-h-screen flex justify-center items-center">
      <section className="p-4">
        <h1 className="text-center tracking-wide text-5xl font-bold text-white mt-5 lg:mt-0 mb-[50px]">
          Memory Marvel
        </h1>
        <div className="flex gap-6 mb-8 flex-wrap">
          {BOARDS.map(({ imgSrc, imgAlt, label, value }) => (
            <Board
              key={label}
              imgSrc={imgSrc}
              imgAlt={imgAlt}
              label={label}
              value={value}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[20px] md:gap-[25px]">
          {randomMarvels.map(({ id, marvelImg, value }) => (
            <Marvel
              key={id}
              imgSrc={marvelImg}
              flip={flippedMarvelsRef.current.has(id)}
              onClick={() => {
                if (!enableTimer) {
                  setEnableTimer(true);
                }

                if (flippedMarvelsRef.current.has(id)) return;

                flippedMarvelsRef.current.set(id, value);
              }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
