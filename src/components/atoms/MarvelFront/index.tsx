export default function MarvelFront() {
  return (
    <div
      className={`transition-all duration-[0.8s] [transition-timing-function:ease] absolute top-0 left-0 w-full h-full [backface-visibility:hidden] overflow-hidden group-hover:[transform:rotateY(-180deg)]`}
    >
      <img src="/card-front.svg" alt="Card front" />
    </div>
  );
}
