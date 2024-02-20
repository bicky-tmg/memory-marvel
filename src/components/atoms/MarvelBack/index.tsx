export default function MarvelBack({ imgSrc }: { imgSrc: string }) {
  return (
    <div
      className={`bg-white flex justify-center items-center rounded-[20px] transition-all duration-[0.8s] [transition-timing-function:ease] absolute top-0 left-0 w-full h-full [backface-visibility:hidden] overflow-hidden [transform:rotateY(180deg)] group-hover:[transform:rotateY(0deg)]`}
    >
      <img src={imgSrc} alt="Card back" />
    </div>
  );
}
