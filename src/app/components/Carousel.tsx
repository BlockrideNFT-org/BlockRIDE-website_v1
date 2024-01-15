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
    const slideInterval = setInterval(next, 3000);

    return () => clearInterval(slideInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div tw="overflow-hidden relative">
      <div
        tw="transition-transform ease-out duration-500"
        style={{ transform: `translateY(-${curr * 26.5}%)` }}
      >
        {props.children}
      </div>
      <div tw="flex flex-col gap-[20px] absolute inset-0 ">
        {props.samples.map((s, i: number) => {
          return (
            <p
              tw={"w-[8px] h-[63px] rounded-[4px] transition-all "}
              style={{ background: curr === i ? "#FE991E" : "#D9D9D9" }}
              key={i}
              role="button"
              onClick={() => setCurr(i)}
            ></p>
          );
        })}
      </div>
    </div>
  );
}
