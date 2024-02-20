interface BoardProps {
  imgSrc: string;
  imgAlt: string;
  label: string;
  value: number;
}

export default function Board({ imgSrc, imgAlt, label, value }: BoardProps) {
  return (
    <div className="relative w-[180px]">
      <div className="relative z-10 w-[60px] h-[60px] bg-white border border-solid border-[rgba(16,49,89,.15)] rounded-[50%] flex justify-center items-center">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className="absolute top-[10px] left-[10px] w-[170px] h-10 border border-solid border-[rgba(16,49,89,.15)] pl-[50px] pr-[10px] py-[10px] flex justify-center items-center gap-[10px] rounded-e-full bg-white">
        <span className="text-black text-lg font-medium">
          {label}: {value}
        </span>
      </div>
    </div>
  );
}
