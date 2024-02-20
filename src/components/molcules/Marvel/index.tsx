import { MarvelFront, MarvelBack } from "../../atoms";

interface MarvelProps {
  imgSrc: string;
  onClick: () => void;
  flip: boolean;
}

export default function Marvel({ imgSrc, onClick, flip }: MarvelProps) {
  return (
    <div
      className="w-[140px] md:w-[150px] h-[140px] md:h-[150px] rounded-[20px] cursor-pointer relative"
      onClick={onClick}
    >
      <div className="[perspective:150rem] relative w-full h-full group">
        <MarvelFront flip={flip} />
        <MarvelBack flip={flip} imgSrc={imgSrc} />
      </div>
    </div>
  );
}
