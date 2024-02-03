import BlockRideApp from "app/assets/images/blockrideApp-offerings.png";
import LoaderBox from "app/components/LoaderBox";
import Modal from "app/components/Modal";
import Axios from "axios";
import { useState } from "react";
import { styled } from "twin.macro";
import Success from "app/assets/images/success.png";
import Error from "app/assets/images/error.png";
import useModalState from "hooks/useModalState";

export default function Waitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [err, setErr] = useState<boolean | null>(null);

  const { isOpen, openModal, closeModal } = useModalState();

  const [isLoading, setIsLoading] = useState(false);

  const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.trim() === "" || isNaN(Number(value))) {
      setName(value.trim());
    }
  };

  const joinWaitlist = async () => {
    setIsLoading(true);
    return Axios.post(
      "https://waitlist-backend-production.up.railway.app/joinwaitlist",
      {
        name,
        email,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
      .then(() => {
        setIsLoading(false);
        setErr(false);
        setName("");
        setEmail("");
        openModal();
      })
      .catch((e) => {
        setIsLoading(false);
        if (e.request.status === 409) {
          setErr(true);
          openModal();
        }
      });
  };

  return (
    <div id="waitlist">
      <div tw="flex justify-between items-center px-[77px] my-[96px] [@media(max-width:1024px)]:(pl-[26px] pr-[13px]) [@media(max-width:640px)]:(block)">
        <div tw="w-[50%] [@media(max-width:640px)]:(w-full)">
          <h1 tw="text-[48px] font-semibold mb-[16px] [@media(max-width:1024px)]:(text-[36px])">
            Become an early Fractional Fleet Owner
          </h1>
          <p tw="text-[20px] mb-[40px]">
            Help build the future of transportation.
          </p>{" "}
          <form
            tw="flex flex-col gap-[20px] [@media(max-width:640px)]:(mb-[20px])"
            onSubmit={(e) => {
              e.preventDefault();
              joinWaitlist();
            }}
          >
            <input
              type="email"
              tw="text-[18px] bg-[#F2F2F2] focus:outline-[0] pl-[22px] py-[9px] rounded-[60px]"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              tw="text-[18px] bg-[#F2F2F2] focus:outline-[0] pl-[22px] py-[9px] rounded-[60px]"
              placeholder="Your name"
              required
              value={name}
              onChange={handleNameChange}
            />

            <button
              disabled={Boolean(
                name.length < 3 || !email.match(pattern) || isLoading
              )}
              tw="px-[32px] pt-[14px] pb-[10px] flex justify-center gap-[10px] border border-[#FE991E] disabled:opacity-75 rounded-[100px] text-[#111] bg-[#FE991E] text-[16px] font-medium [@media(max-width:832px)]:(px-[15px] py-[15px] text-[14px])"
            >
              {isLoading ? <LoaderBox size="25" /> : "Join the waitlist"}
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
      <Modal
        open={isOpen}
        showClose={false}
        onClose={closeModal}
        tw="max-h-full"
      >
        <ModalContent>
          {err === true && (
            <div tw="flex flex-col justify-center items-center">
              <img src={Error} alt="" tw="mb-[20px]" loading="lazy" />

              <h2 tw="text-[32px] [@media(max-width:511px)]:(text-[24px])">
                User Exist!
              </h2>
              <p tw="text-[#959595] text-[24px] [@media(max-width:511px)]:(text-[18px])">
                Please try again in few minutes
              </p>
            </div>
          )}

          {err === false && (
            <div tw="flex flex-col justify-center items-center">
              <img src={Success} alt="" loading="lazy" />

              <h2 tw="text-[32px] [@media(max-width:511px)]:(text-[24px])">
                Successfully Joined!
              </h2>
              <p tw="text-[#959595] text-[24px] [@media(max-width:511px)]:(text-[18px])">
                You'll recieve a notification shortly.
              </p>
            </div>
          )}

          <button
            onClick={closeModal}
            tw="px-[32px] pt-[14px] pb-[10px] w-full mt-[20px] border border-[#FE991E] disabled:opacity-75 rounded-[100px] text-[#111] bg-[#FE991E] text-[16px] font-medium [@media(max-width:832px)]:()"
          >
            Go back to site
          </button>
        </ModalContent>
      </Modal>
    </div>
  );
}

const ModalContent = styled.div`
  padding: 20px 20px 20px 30px;

  p {
    @media screen and (max-width: 419px) {
      font-size: 16px;
    }
  }
`;
