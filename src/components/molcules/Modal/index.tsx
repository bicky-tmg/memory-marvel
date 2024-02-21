import { useMemo } from "react";
import { getModalBoardsData } from "../../../constant/board";
import Board from "../Board";

interface ModalProps {
  won: boolean;
  score: number;
  flips: number;
}

export default function Modal({ won, score, flips }: ModalProps) {
  const BOARDS = useMemo(
    () => getModalBoardsData(score, flips),
    [flips, score]
  );
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden bg-[#0006] p-5 flex justify-center items-center z-20">
      <div className="rounded-[20px] shadow-[0_1.70667px_10.24px_#b8b7b7a6] bg-white my-[10%] mx-auto p-5 max-w-[650px] w-full min-h-[200px] relative flex flex-col justify-center items-center">
        <img
          src="/modal-icon.png"
          alt="Modal Icon"
          className="absolute top-[-14px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px]"
        />
        <h2 className="text-[#91181d] text-center text-[32px] font-bold mt-[65px]">
          {won ? "You’re a Champ!" : "Next time, champ! Keep going!"}
        </h2>

        <img
          src={won ? "/stars-filled.svg" : "/stars-empty.svg"}
          alt="Stars"
          className="flex mt-5 mx-auto mb-10"
        />

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
        <img
          src="/refresh.svg"
          alt="Refresh"
          className="absolute left-1/2 bottom-[-58px] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        />
      </div>
    </div>
  );
}
