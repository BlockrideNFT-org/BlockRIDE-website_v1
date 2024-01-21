import BlockRideBus from "../../../assets/images/blockride-bus.png";
import { ReactComponent as Line } from "../../../assets/images/line.svg";
import Solana from "../../../assets/images/solana.png";
import StockPile from "app/assets/images/stock-pile.png";

export default function IntroSection() {
  const handleClickScroll = () => {
    const element = document.getElementById("waitlist");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(20, 20, 20, 0.78),rgba(20, 20, 20, 0.78)),url(${BlockRideBus})`,
          backgroundSize: "cover",
        }}
        tw="h-[100vh] bg-no-repeat bg-top"
      >
        <div tw="text-[#fff] px-[10px] flex flex-col justify-center h-full">
          <h1 tw="text-[64px] font-bold text-center leading-[120%] tracking-[-1.2px] [@media(max-width:668px)]:(text-[9vw]) ">
            The Modern Approach to
          </h1>
          <div tw="flex flex-col justify-center items-center gap-[10px]">
            <h1 tw="text-[64px] font-bold leading-[120%] tracking-[-1.2px] text-[#FE991E] [@media(max-width:668px)]:(text-[9vw])">
              Vehicle Financing
            </h1>
            <Line tw="mt-[-20px] w-full [@media(max-width:550px)]:(w-[62%])" />
          </div>
          <p tw="text-[18px] text-[#FCFCFC] font-normal text-center w-[57%] mx-auto leading-[24px] mt-[32px] [@media(max-width:675px)]:(w-[90%])">
            Powering the next generation of fleet owners through fractionalized
            fleet ownership
          </p>
          <div tw="text-center mt-[48px]">
            <button
              onClick={handleClickScroll}
              tw="px-[32px] pt-[14px] pb-[10px] border border-[#FE991E] rounded-[100px] text-[#111] bg-[#FE991E] text-[16px] font-medium "
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
      <div tw="flex justify-between items-center bg-[#0D0D0D] py-[35px] px-[20px] [@media(max-width:804px)]:(flex-col)">
        <p tw="text-[#FE991E] text-[24px] font-medium [@media(max-width:430px)]:(text-[18px] mb-[10px])">
          In collaboration with the Industry players:
        </p>
        <div tw="flex gap-[40px] justify-center">
          <img
            src={StockPile}
            alt="stock-pile"
            tw="[@media(max-width:430px)]:(w-[28%])"
            role="button"
            onClick={() => window.open("https://www.stockpile.so/")}
          />
          <img
            src={Solana}
            alt="solana"
            tw="[@media(max-width:430px)]:(w-[28%])"
            role="button"
            onClick={() => window.open("https://solana.com/")}
          />
        </div>
      </div>
    </>
  );
}
