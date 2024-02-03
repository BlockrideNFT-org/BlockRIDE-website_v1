import { ReactComponent as Line } from "app/assets/images/line-investment.svg";
import Carousel from "app/components/Carousel";
import IncomeAnalysis from "app/assets/images/income-statement.png";
import MobileCarousel from "app/components/MobileCarousel";
import Token from "app/assets/images/token.png";
import Claim from "app/assets/images/claim-usd.png";
import { styled } from "twin.macro";

const samples = [
  {
    imgURL: IncomeAnalysis,
    header: "Fleet Management Console",
    subHeader:
      "Our platform offers a user-friendly dashboard where bus ownership holders can easily access important data and insights like mileage, maintenance records, vehicle health, revenue, and income reports",
    miniHeaderOne: "Transparency",
    miniSubHeaderOne:
      "We prioritize transparency by leveraging blockchain technology for fare collection. Every transaction is transparent, providing a clear view of fare collection and ensuring accountability.",
    miniHeaderTwo: "Analytics",
    miniSubHeaderTwo:
      "Gain valuable insights into revenue trends, passenger traffic, and other key metrics. With this information, you can make data-driven decisions to optimize operations and maximize your returns.",
  },
  {
    imgURL: IncomeAnalysis,
    header: "Invest in bus fleets securely and remotely",
    subHeader:
      "Blockride offers a secure and accessible investment opportunity by tokenizing bus fleets through Security Token Offerings (STOs). Investors can enjoy increased liquidity in the decentralized finance (DeFi) space while earning returns based on the traditional financial performance of the underlying bus assets.",
    miniHeaderOne: "STO (Security Token Offering)",
    miniSubHeaderOne:
      "Bus fleets are tokenized, allowing investors to participate in STOs. This innovative approach brings together the benefits of blockchain technology and traditional finance, providing a regulated and transparent investment avenue.",
    miniHeaderTwo: "Liquidity",
    miniSubHeaderTwo:
      "Investors can benefit from increased liquidity in the decentralized finance (DeFi) space. Integration with compatible DeFi platforms, unlocking flexibility and enhancing use case.",
  },
  {
    imgURL: Token,
    header: "Own a piece for as little as $50",
    subHeader:
      "Invest in tangible assets with real growth potential and become a fleet owner with a minimum of $50",
    miniHeaderOne: "Fractional Ownership",
    miniSubHeaderOne:
      "Fractionalized fleet ownership opens up accessible investment opportunities in the transportation industry to a wide range of stakeholders and investors by eliminating the high barrier to entry.",
  },
  {
    imgURL: Claim,
    header: "Daily Pay-out in $USDC",
    subHeader:
      "Conveniently receive your pay-outs directly to your wallets in $USDC, a stablecoin pegged to the value of the US dollar and widely accepted in the digital asset market. By utilizing $USDC, you can enjoy the benefits of consistent earnings while minimizing the volatility typically associated with other cryptocurrencies. Rest assured that your hard-earned profits are protected and accessible whenever you need them, providing you with peace of mind and financial stability in your investment journey.",
    // miniHeaderOne: "Transparency",
    // miniSubHeaderOne:
    //   "We prioritize transparency by leveraging blockchain technology for fare collection. Every transaction is transparent, providing a clear view of fare collection and ensuring accountability.",
    // miniHeaderTwo: "Analytics",
    // miniSubHeaderTwo:
    //   "Gain valuable insights into revenue trends, passenger traffic, and other key metrics. With this information, you can make data-driven decisions to optimize operations and maximize your returns.",
  },
];

export default function ManagementProcess() {
  return (
    <div tw="mx-[114px] [@media(max-width:1024px)]:(ml-[10px] mr-[3px])">
      <div tw="py-[120px] [@media(max-width:640px)]:(pb-[70px])">
        <div tw="flex flex-col justify-center items-center">
          <H1 tw="text-[48px] font-semibold leading-[120%] text-center">
            Management Processes
          </H1>
          <Line tw="w-[500px] [@media(max-width:530px)]:(w-full)" />
        </div>
      </div>
      <div tw="hidden [@media(max-width:640px)]:(block max-w-[61rem] overflow-hidden)">
        <MobileCarousel samples={samples}>
          {samples.map((sample, i) => {
            return (
              <div tw="mb-[50px] px-[10px]" key={i}>
                <div>
                  <h1 tw="text-[22px] font-semibold mb-[16px] ">
                    {sample.header}
                  </h1>
                  <p tw="text-[18px] mb-[35px] text-[#959595]">
                    {sample.subHeader}
                  </p>

                  {sample.miniHeaderOne || sample.miniHeaderTwo ? (
                    <div tw="flex flex-col gap-[57px] mb-[50px]">
                      {sample.miniHeaderOne && (
                        <div>
                          <p tw="text-[18px] font-medium mb-[9px] text-[#FE991E]">
                            {sample.miniHeaderOne}
                          </p>
                          <p tw="text-[16px] text-[#959595] ">
                            {sample.miniSubHeaderOne}
                          </p>
                        </div>
                      )}

                      {sample.miniHeaderTwo && (
                        <div>
                          <p tw="text-[18px] font-medium mb-[9px] text-[#FE991E] ">
                            {sample.miniHeaderTwo}
                          </p>
                          <p tw="text-[16px] text-[#959595]">
                            {sample.miniSubHeaderTwo}
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div tw="p-[20px] bg-[#FFEBD2] rounded-[16px] w-full">
                  <img src={sample.imgURL} alt={sample.header} tw="w-full" />
                </div>
              </div>
            );
          })}
        </MobileCarousel>
      </div>
      <div tw="max-h-[40rem] overflow-hidden [@media(max-width:640px)]:(hidden)">
        <Carousel samples={samples}>
          {/* {samples.map((sample) => {
            return <div>{sample}</div>;
          })} */}

          {samples.map((sample, i) => {
            return (
              <div
                tw="flex items-center justify-center gap-[40px] mb-[90px]"
                key={i}
              >
                <div tw=" p-[32px] bg-[#FFEBD2] rounded-[16px] [@media(max-width:814px)]:(p-0 ml-5)">
                  <img
                    src={sample.imgURL}
                    alt={sample.header}
                    tw="w-[230px] h-[241px]"
                  />
                </div>

                <div tw="basis-[67%] ">
                  <h1 tw="text-[24px] font-semibold mb-[16px] [@media(max-width:814px)]:(text-[18px])">
                    {sample.header}
                  </h1>
                  <p tw="text-[18px] mb-[35px] text-[#959595]">
                    {sample.subHeader}
                  </p>

                  <div tw="flex gap-[57px]">
                    <div>
                      <p tw="text-[18px] font-medium mb-[9px] text-[#FE991E]">
                        {sample.miniHeaderOne}
                      </p>
                      <p tw="text-[16px] [@media(max-width:814px)]:(text-[13px]) text-[#959595]">
                        {sample.miniSubHeaderOne}
                      </p>
                    </div>

                    <div>
                      <p tw="text-[18px] font-medium mb-[9px] text-[#FE991E] ">
                        {sample.miniHeaderTwo}
                      </p>
                      <p tw="text-[16px] [@media(max-width:814px)]:(text-[13px]) text-[#959595]">
                        {sample.miniSubHeaderTwo}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

const H1 = styled.h1`
  @media screen and (max-width: 508px) {
    font-size: 40px;
  }

  @media screen and (max-width: 426px) {
    font-size: 35px;
  }

  @media screen and (max-width: 375px) {
    font-size: 30px;
  }
`;
