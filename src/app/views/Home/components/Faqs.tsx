import Disclosure from "app/components/Disclosure";
import DisclosureV2 from "app/components/Disclosure_v2";

export default function Faqs() {
  return (
    <div tw="bg-[#140D04] mt-[199px] text-[#fff]">
      <div tw="py-[96px] flex gap-[64px] px-[77px] [@media(max-width:1024px)]:(px-[25px]) [@media(max-width:640px)]:(block px-[30px] w-full)">
        <div tw="flex flex-col w-[50%] [@media(max-width:640px)]:(w-full mb-[20px])">
          <p tw="text-[16px] mb-[12px] w-[80%]">Support</p>{" "}
          <h1 tw="text-[36px] mb-[20px]">FAQs</h1>{" "}
          <p tw="text-[18px] [@media(max-width:900px)]:(text-[14px])">
            You get to find answers on everything you need to know about
            BlockRide and its processes. Please chat to our team if you need
            immediate assistance.
          </p>
        </div>

        {/* <Disclosure /> */}
        <DisclosureV2 />
      </div>
    </div>
  );
}
