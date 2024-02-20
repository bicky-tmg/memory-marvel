export function getBoardsData(score: number, flips: number, timer: number) {
  return [
    {
      imgSrc: "/medal.svg",
      imgAlt: "Score icon",
      label: "Score",
      value: score,
    },
    {
      imgSrc: "/flip.svg",
      imgAlt: "Flip icon",
      label: "Flips",
      value: flips,
    },
    {
      imgSrc: "/stopwatch.svg",
      imgAlt: "Stopwatch icon",
      label: "Timer",
      value: timer,
    },
  ];
}
