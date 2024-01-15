import { Link } from "react-router-dom";
import BlockRideBus from "../../../assets/images/blockride-bus.png";
import { ReactComponent as Line } from "../../../assets/images/line.svg";
import { ReactComponent as Solana } from "../../../assets/images/solana.svg";

export default function IntroSection() {
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),url(${BlockRideBus})`,
        }}
        tw="h-[702px] bg-no-repeat bg-top"
      >
        <div tw="text-[#fff]">
          <h1 tw="text-[64px] font-bold text-center pt-[137px] leading-[120%] tracking-[-1.2px] m-auto [@media(max-width:668px)]:(text-[9vw]) ">
            The Modern Approach to
          </h1>
          <div tw="flex flex-col justify-center items-center">
            <h1 tw="text-[64px] font-bold leading-[120%] tracking-[-1.2px] text-[#FE991E] [@media(max-width:668px)]:(text-[9vw])">
              Vehicle Financing
            </h1>
            <Line tw="mt-[-20px] w-full [@media(max-width:550px)]:(w-[62%])" />
          </div>
          <p tw="text-[18px] font-normal text-center w-[57%] mx-auto leading-[24px] mt-[32px] [@media(max-width:675px)]:(w-[90%])">
            Blockride offers a hassle-free approach to accessing smarter
            investment opportunities in the transportation sector, allowing you
            to earn real returns. We prioritize simplicity, accessibility, and
            affordability, making investing in this industry easier than ever
            before.
          </p>
          <div tw="text-center mt-[48px]">
            <Link
              to=""
              tw="px-[32px] pt-[14px] pb-[10px] border border-[#FE991E] rounded-[100px] text-[#111] bg-[#FE991E] text-[16px] font-medium "
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div tw="flex justify-between items-center bg-[#0D0D0D] py-[35px] px-[93px] [@media(max-width:1024px)]:(px-[30px]) [@media(max-width:531px)]:(flex-col)">
        <p tw="text-[#FE991E] text-[24px] font-medium">
          In collaboration with the Industry players:
        </p>
        <Solana />
      </div>
    </>
  );
}
