function App() {
  return (
    <main className="container mx-auto min-h-screen flex justify-center items-center">
      <section className="p-4">
        <h1 className="text-center tracking-wide text-5xl font-bold text-white mt-5 lg:mt-0 mb-[50px]">
          Memory Marvel
        </h1>
        <div className="flex gap-6 mb-8 flex-wrap">
          <div className="relative w-[180px]">
            <div className="relative z-10 w-[60px] h-[60px] bg-white border border-solid border-[rgba(16,49,89,.15)] rounded-[50%] flex justify-center items-center">
              <img src="/medal.svg" alt="Score icon" />
            </div>
            <div className="absolute top-[10px] left-[10px] w-[170px] h-10 border border-solid border-[rgba(16,49,89,.15)] pl-[50px] pr-[10px] py-[10px] flex justify-center items-center gap-[10px] rounded-e-full bg-white">
              <span className="text-black text-lg font-medium">Score: 0</span>
            </div>
          </div>
          <div className="relative w-[180px]">
            <div className="relative z-10 w-[60px] h-[60px] bg-white border border-solid border-[rgba(16,49,89,.15)] rounded-[50%] flex justify-center items-center">
              <img src="/flip.svg" alt="Score icon" />
            </div>
            <div className="absolute top-[10px] left-[10px] w-[170px] h-10 border border-solid border-[rgba(16,49,89,.15)] pl-[50px] pr-[10px] py-[10px] flex justify-center items-center gap-[10px] rounded-e-full bg-white">
              <span className="text-black text-lg font-medium">Flips: 0</span>
            </div>
          </div>
          <div className="relative w-[180px]">
            <div className="relative z-10 w-[60px] h-[60px] bg-white border border-solid border-[rgba(16,49,89,.15)] rounded-[50%] flex justify-center items-center">
              <img src="/stopwatch.svg" alt="Score icon" />
            </div>
            <div className="absolute top-[10px] left-[10px] w-[170px] h-10 border border-solid border-[rgba(16,49,89,.15)] pl-[50px] pr-[10px] py-[10px] flex justify-center items-center gap-[10px] rounded-e-full bg-white">
              <span className="text-black text-lg font-medium">Timer: 60</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[20px] md:gap-[25px]">
          <div className="w-[140px] md:w-[150px] h-[140px] md:h-[150px] rounded-[20px] cursor-pointer relative">
            <div className="[perspective:150rem] relative w-full h-full group">
              <div className="transition-all duration-[0.8s] [transition-timing-function:ease] absolute top-0 left-0 w-full h-full [backface-visibility:hidden] overflow-hidden group-hover:[transform:rotateY(-180deg)]">
                <img src="/card-front.svg" alt="Card front" />
              </div>
              <div className="bg-white flex justify-center items-center rounded-[20px] [transform:rotateY(180deg)] group-hover:[transform:rotateY(0deg)] transition-all duration-[0.8s] [transition-timing-function:ease] absolute top-0 left-0 w-full h-full [backface-visibility:hidden] overflow-hidden">
                <img src="/surf.svg" alt="Card back" />
              </div>
            </div>
          </div>
          <div className="w-[140px] md:w-[150px] h-[140px] md:h-[150px] rounded-[20px] cursor-pointer relative">
            <div className="[perspective:150rem] relative w-full h-full group">
              <div className="transition-all duration-[0.8s] [transition-timing-function:ease] absolute top-0 left-0 w-full h-full [backface-visibility:hidden] overflow-hidden group-hover:[transform:rotateY(-180deg)]">
                <img src="/card-front.svg" alt="Card front" />
              </div>
              <div className="bg-white flex justify-center items-center rounded-[20px] [transform:rotateY(180deg)] group-hover:[transform:rotateY(0deg)] transition-all duration-[0.8s] [transition-timing-function:ease] absolute top-0 left-0 w-full h-full [backface-visibility:hidden] overflow-hidden">
                <img src="/airplane.svg" alt="Card back" />
              </div>
            </div>
          </div>
          <div className="w-[140px] md:w-[150px] h-[140px] md:h-[150px] rounded-[20px] cursor-pointer relative">
            <div className="[perspective:150rem] relative w-full h-full group">
              <div className="transition-all duration-[0.8s] [transition-timing-function:ease] absolute top-0 left-0 w-full h-full [backface-visibility:hidden] overflow-hidden group-hover:[transform:rotateY(-180deg)]">
                <img src="/card-front.svg" alt="Card front" />
              </div>
              <div className="bg-white flex justify-center items-center rounded-[20px] [transform:rotateY(180deg)] group-hover:[transform:rotateY(0deg)] transition-all duration-[0.8s] [transition-timing-function:ease] absolute top-0 left-0 w-full h-full [backface-visibility:hidden] overflow-hidden">
                <img src="/bath-tub.svg" alt="Card back" />
              </div>
            </div>
          </div>
          <div className="w-[140px] md:w-[150px] h-[140px] md:h-[150px] rounded-[20px] cursor-pointer relative">
            <div className="[perspective:150rem] relative w-full h-full group">
              <div className="transition-all duration-[0.8s] [transition-timing-function:ease] absolute top-0 left-0 w-full h-full [backface-visibility:hidden] overflow-hidden group-hover:[transform:rotateY(-180deg)]">
                <img src="/card-front.svg" alt="Card front" />
              </div>
              <div className="bg-white flex justify-center items-center rounded-[20px] [transform:rotateY(180deg)] group-hover:[transform:rotateY(0deg)] transition-all duration-[0.8s] [transition-timing-function:ease] absolute top-0 left-0 w-full h-full [backface-visibility:hidden] overflow-hidden">
                <img src="/hotel.svg" alt="Card back" />
              </div>
            </div>
          </div>
          <div className="w-[140px] md:w-[150px] h-[140px] md:h-[150px] rounded-[20px] cursor-pointer relative">
            <div className="[perspective:150rem] relative w-full h-full group">
              <div className="transition-all duration-[0.8s] [transition-timing-function:ease] absolute top-0 left-0 w-full h-full [backface-visibility:hidden] overflow-hidden group-hover:[transform:rotateY(-180deg)]">
                <img src="/card-front.svg" alt="Card front" />
              </div>
              <div className="bg-white flex justify-center items-center rounded-[20px] [transform:rotateY(180deg)] group-hover:[transform:rotateY(0deg)] transition-all duration-[0.8s] [transition-timing-function:ease] absolute top-0 left-0 w-full h-full [backface-visibility:hidden] overflow-hidden">
                <img src="/cocktail.svg" alt="Card back" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
