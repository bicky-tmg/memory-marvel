export default function MarvelBack({
  imgSrc,
  flip,
}: {
  imgSrc: string;
  flip: boolean;
}) {
  return (
    <div
      className={`bg-white flex justify-center items-center rounded-[20px] transition-all duration-[0.8s] [transition-timing-function:ease] absolute top-0 left-0 w-full h-full [backface-visibility:hidden] overflow-hidden ${
        flip ? "[transform:rotateY(0deg)]" : "[transform:rotateY(180deg)]"
      }`}
    >
      <img src={imgSrc} alt="Card back" />
    </div>
  );
}
