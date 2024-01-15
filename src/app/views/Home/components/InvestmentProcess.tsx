import { ReactComponent as Line } from "../../../assets/images/line-investment.svg";
import Analytics from "../../../assets/images/analytics.png";
import Notification from "../../../assets/images/notification.png";
import Gift from "../../../assets/images/gift.png";
import BlockRideApp from "../../../assets/images/blockrideApp.png";

export default function InvestmentProcess() {
  return (
    <div tw="mt-[132px]">
      <div tw="flex flex-col justify-center items-center">
        <h1 tw="text-[48px] font-semibold leading-[120%] text-center [@media(max-width:675px)]:(text-[7vw])">
          Simplified Investment Processes
        </h1>
        <Line tw="[@media(max-width:675px)]:(w-[100%])" />
      </div>

      <p tw="text-[18px] font-normal text-center mt-[16px]">
        Blockride help simplify your bus fleet investment process, restoring
        your trust in bus hire purchase investment.
      </p>

      <div tw="flex justify-around mt-[82px] flex-wrap gap-y-[50px] mx-[13px]">
        <div tw="bg-[#fff] pt-[12px] px-[12px] rounded-[24px]">
          <div tw="bg-[#EEE] rounded-t-[12px]">
            <img
              src={Analytics}
              alt="blockride-analytics"
              tw="py-[60px] px-[80px] w-[300px] h-[250px]"
            />
          </div>

          <div tw="px-[18px] pt-[28px] pb-[48px]">
            <h1 tw="text-[22px] font-bold leading-[48px]">
              Real-time Analytics
            </h1>
            <p tw="text-[14px] leading-[30px] font-normal text-[#5C5C5C]">
              Manage all your investment concerns from <br /> one dashboard.
            </p>
          </div>
        </div>

        <div tw="bg-[#fff] pt-[12px] px-[12px]">
          <div tw="bg-[#EEE] rounded-t-[12px] ">
            <img
              src={Notification}
              alt="blockride-notifications"
              tw="py-[60px] px-[80px] w-[300px] h-[250px]"
            />
          </div>

          <div tw="px-[18px] pt-[28px] pb-[48px]">
            <h1 tw="text-[22px] font-bold leading-[48px]">
              Prompt Notifications
            </h1>
            <p tw="text-[14px] leading-[30px] font-normal text-[#5C5C5C]">
              Stay ahead with real-time notifications <br /> on our new
              offerings.
            </p>
          </div>
        </div>

        <div tw="bg-[#fff] pt-[12px] px-[12px]">
          <div tw="bg-[#EEE] rounded-t-[12px]">
            <img
              src={Gift}
              alt="blockride-gifts"
              tw="py-[60px] px-[80px] w-[300px] h-[250px]"
            />
          </div>

          <div tw="px-[18px] pt-[28px] pb-[48px]">
            <h1 tw="text-[22px] font-bold leading-[48px]">
              Claim Daily Returns
            </h1>
            <p tw="text-[14px] leading-[30px] font-normal text-[#5C5C5C]">
              Claim your returns where and whenever <br /> without interruption.
            </p>
          </div>
        </div>
      </div>

      <div tw="mx-[77px] [@media(max-width:1024px)]:(mx-[17px]) mt-[24px]">
        <div tw="bg-[#fff] flex justify-between items-center rounded-[24px] pl-[56px] pt-[57px] [@media(max-width:771px)]:(pl-[20px]) [@media(max-width:640px)]:(block pl-0) gap-[10px]">
          <div tw="[@media(max-width:640px)]:(mb-[10px])">
            <h1 tw="text-[32px] [@media(max-width:771px)]:(text-[25px]) font-semibold ">
              An all-in-one Dashboard
            </h1>
            <p tw="text-[20px]  [@media(max-width:771px)]:(text-[16px]) text-[#5C5C5C]">
              Manage your investment and procurement from one dashboard.{" "}
            </p>
          </div>
          <img
            src={BlockRideApp}
            alt="BlockRide"
            tw="rounded-br-[24px] w-[50%] [@media(max-width:640px)]:(block pl-0 w-auto)"
          />
        </div>
      </div>
    </div>
  );
}
