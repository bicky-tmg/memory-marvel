import { MarvelFront, MarvelBack } from "../../atoms";

interface MarvelProps {
  imgSrc: string;
  onClick: () => void;
}

export default function Marvel({ imgSrc, onClick }: MarvelProps) {
  return (
    <div
      className="w-[140px] md:w-[150px] h-[140px] md:h-[150px] rounded-[20px] cursor-pointer relative"
      onClick={onClick}
    >
      <div className="[perspective:150rem] relative w-full h-full group">
        <MarvelFront />
        <MarvelBack imgSrc={imgSrc} />
      </div>
    </div>
  );
}
