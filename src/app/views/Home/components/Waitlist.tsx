import BlockRideApp from "app/assets/images/blockrideApp-offerings.png";

export default function Waitlist() {
  return (
    <div>
      <div tw="flex justify-between items-center px-[77px] my-[96px] [@media(max-width:1024px)]:(pl-[26px] pr-[13px]) [@media(max-width:640px)]:(block)">
        <div tw="w-[50%] [@media(max-width:640px)]:(w-full)">
          <h1 tw="text-[48px] mb-[16px] [@media(max-width:1024px)]:(text-[36px])">
            Become an early Fractional Fleet Owner
          </h1>
          <p tw="text-[20px] mb-[40px]">
            Help build the future of transportation.
          </p>{" "}
          <form tw="flex justify-between items-center pl-[22px] py-[9px] pr-[9px] bg-[#F2F2F2] w-[100%] rounded-[60px] [@media(max-width:640px)]:(mb-[20px])">
            <input
              type="email"
              tw="text-[18px] bg-transparent focus:outline-[0] w-[50%]"
              placeholder="Your email address"
            />
            <button tw="px-[32px] pt-[14px] pb-[10px] border border-[#FE991E] rounded-[100px] text-[#111] bg-[#FE991E] text-[16px] font-medium [@media(max-width:832px)]:(px-[15px] py-[15px] text-[14px])">
              Join the waitlist
            </button>
          </form>
        </div>

        <div tw="flex justify-around bg-[rgba(254, 153, 30, 0.20)] pl-[50px] pt-[50px] rounded-[24px] [@media(max-width:1024px)]:(w-[50%]) [@media(max-width:640px)]:(w-full)">
          <img
            src={BlockRideApp}
            alt="Blockride"
            tw="justify-self-end text-center inline-block"
          />
        </div>
      </div>
    </div>
  );
}
