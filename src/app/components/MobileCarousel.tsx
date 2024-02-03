import React, { useEffect, useState } from "react";

type sample = {
  imgURL: string;
  header: string;
  subHeader: string;
  miniHeaderOne?: string;
  miniSubHeaderOne?: string;
  miniHeaderTwo?: string;
  miniSubHeaderTwo?: string;
};

type Props = {
  samples: sample[];
};

export default function Carousel(props: React.PropsWithChildren<Props>) {
  const [curr, setCurr] = useState(0);

  useEffect(() => {
    const next = () =>
      setCurr((curr) => (curr === props.samples.length - 1 ? 0 : curr + 1));
    const slideInterval = setInterval(next, 7000);

    return () => clearInterval(slideInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div tw="">
      <div tw="flex justify-center gap-[40px] mb-[50px] px-[10px]">
        {props.samples.map((s, i: number) => {
          return (
            <p
              tw={"w-[100px] h-[8px] rounded-[4px] transition-all "}
              style={{ background: curr === i ? "#FE991E" : "#D9D9D9" }}
              key={i}
              role="button"
              onClick={() => setCurr(i)}
            ></p>
          );
        })}
      </div>
      <div
        tw="transition-transform ease-out duration-500 grid grid-rows-[min(1054px)] grid-cols-[min(100%),min(100%),min(100%),min(100%)]"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {props.children}
      </div>
    </div>
  );
}
