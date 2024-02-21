import { useEffect, useRef, useState } from "react";
import { Board, Marvel, Modal } from "./components";
import { getBoardsData } from "./constant/board";
import { MARVELS } from "./constant/marvel";
import { shuffle } from "./utils/shuffle";
import { ADD_SCORE, SUB_SCORE, TIMER } from "./constant/common";

function App() {
  const [timer, setTimer] = useState(TIMER);
  const [flips, setFlips] = useState(0);
  const [score, setScore] = useState(0);
  const [enableTimer, setEnableTimer] = useState(false);
  const flippedMarvelsRef = useRef(new Map());
  const matchedMarvelsRef = useRef(new Map());
  const [hasWon, sethasWon] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [marvels, setMarvels] = useState<typeof MARVELS>([]);

  useEffect(() => {
    const randomMarvels = shuffle(MARVELS);
    setMarvels(randomMarvels);
  }, []);

  useEffect(() => {
    if (enableTimer) {
      const interval = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [enableTimer]);

  const BOARDS = getBoardsData(score, flips, timer);

  useEffect(() => {
    if (flippedMarvelsRef.current.size === 2) {
      const [first, second] = flippedMarvelsRef.current.values();
      if (first === second) {
        setScore((prev) => prev + ADD_SCORE);
        for (const [id, value] of flippedMarvelsRef.current) {
          matchedMarvelsRef.current.set(id, value);
        }
        flippedMarvelsRef.current.clear();
      } else {
        setTimeout(() => {
          flippedMarvelsRef.current.clear();
          setScore((prev) => prev - SUB_SCORE);
        }, 500);
      }
    }
  }, [flippedMarvelsRef.current.size, matchedMarvelsRef.current.size]);

  useEffect(() => {
    if (marvels.length === 0) return; // Prevents the first render where the marvels are empty
    // Win condition
    if (matchedMarvelsRef.current.size === marvels.length) {
      sethasWon(true);
      setEnableTimer(false);
      setOpenModal(true);
    }

    // Lose condition
    if (timer === 0) {
      sethasWon(false);
      setEnableTimer(false);
      setOpenModal(true);
    }
  }, [marvels.length, matchedMarvelsRef.current.size, timer]);

  function handleReset() {
    const randomMarvels = shuffle(MARVELS);
    setMarvels(randomMarvels);
    setTimer(TIMER);
    setFlips(0);
    setScore(0);
    setEnableTimer(false);
    flippedMarvelsRef.current.clear();
    matchedMarvelsRef.current.clear();
    sethasWon(false);
    setOpenModal(false);
  }

  return (
    <>
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
            {marvels.map(({ id, marvelImg, value }) => (
              <Marvel
                key={id}
                imgSrc={marvelImg}
                flip={
                  flippedMarvelsRef.current.has(id) ||
                  matchedMarvelsRef.current.has(id)
                }
                onClick={() => {
                  if (!enableTimer) {
                    setEnableTimer(true);
                  }

                  if (flippedMarvelsRef.current.has(id)) return;

                  flippedMarvelsRef.current.set(id, value);

                  setFlips((prev) => prev + 1);
                }}
              />
            ))}
          </div>
        </section>
      </main>
      {openModal && (
        <Modal
          handleReset={handleReset}
          won={hasWon}
          score={score}
          flips={flips}
        />
      )}
    </>
  );
}

export default App;
