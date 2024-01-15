import { Disclosure as Disclose } from "@headlessui/react";
import { ReactComponent as PlusCircle } from "app/assets/icons/plus-circle.svg";
import { ReactComponent as MinusCircle } from "app/assets/icons/minus-circle.svg";
import tw, { styled } from "twin.macro";

export default function Disclosure() {
  return (
    <div tw="w-[100%]">
      {/* <h4 tw="font-[500] text-[36px] text-[#fff] text-center my-[60px]">
        Frequently Asked Questions
      </h4> */}
      <Disclose>
        {({ open, close }) => (
          <>
            {!open ? (
              <Disclose.Button as={Button}>
                What does fractional ownership mean?
                <PlusCircle />
              </Disclose.Button>
            ) : (
              <></>
            )}

            <Disclose.Panel as={Panel}>
              <div>
                <p>What does fractional ownership mean?</p>
                <MinusCircle role="button" onClick={() => close()} />
              </div>
              Fractional ownership refers to a form of shared ownership in a bus
              fleet, where multiple individuals own a portion of the fleet and
              collectively own the entire operation. By becoming a fractional
              owner of a bus fleet with our company, you can benefit from the
              fleet's future appreciation and cash flow without having to worry
              about the day-to-day management of the operation.
            </Disclose.Panel>
          </>
        )}
      </Disclose>
      <Disclose>
        {({ open, close }) => (
          /* Use the `open` state to conditionally change the direction of an icon. */
          <>
            {!open ? (
              <Disclose.Button as={Button}>
                Who can I contact for support?
                <PlusCircle />
              </Disclose.Button>
            ) : (
              <></>
            )}

            <Disclose.Panel as={Panel}>
              <div>
                <p>Who can I contact for support?</p>
                <MinusCircle role="button" onClick={() => close()} />
              </div>
              If you need assistance, you can reach us at contact@blockride.xyz!
            </Disclose.Panel>
          </>
        )}
      </Disclose>
      <Disclose>
        {({ open, close }) => (
          /* Use the `open` state to conditionally change the direction of an icon. */
          <>
            {!open ? (
              <Disclose.Button as={Button}>
                What currency can I invest in?
                <PlusCircle />
              </Disclose.Button>
            ) : (
              <></>
            )}

            <Disclose.Panel as={Panel}>
              <div>
                <p>What currency can I invest in?</p>
                <MinusCircle role="button" onClick={() => close()} />
              </div>
              Our bus fleet transactions are conducted using $USDC (U.S. Dollar
              Coin), an SPL stablecoin issued by Circle.
            </Disclose.Panel>
          </>
        )}
      </Disclose>
      <Disclose>
        {({ open, close }) => (
          /* Use the `open` state to conditionally change the direction of an icon. */
          <>
            {!open ? (
              <Disclose.Button as={Button}>
                Why should fleet ownership be fractionalized on the blockchain?
                <PlusCircle />
              </Disclose.Button>
            ) : (
              <></>
            )}

            <Disclose.Panel as={Panel}>
              <div>
                <p>
                  Why should fleet ownership be fractionalized on the
                  blockchain?
                </p>
                <MinusCircle role="button" onClick={() => close()} />
              </div>
              With the utilization of blockchain technology, Blockride users and
              investors gain access to a range of information on the platform's
              tokenized bus fleets. This includes detailed records of each
              vehicle's mileage, maintenance history, and overall health, as
              well as revenue and income reports. By providing this information,
              Blockride promotes transparency and enables stakeholders to make
              informed decisions about their investments
            </Disclose.Panel>
          </>
        )}
      </Disclose>
      <Disclose>
        {({ open, close }) => (
          /* Use the `open` state to conditionally change the direction of an icon. */
          <>
            {!open ? (
              <Disclose.Button as={Button}>
                What is the minimum investment?
                <PlusCircle />
              </Disclose.Button>
            ) : (
              <></>
            )}

            <Disclose.Panel as={Panel}>
              <div>
                <p>What is the minimum investment?</p>
                <MinusCircle role="button" onClick={() => close()} />
              </div>
              The minimum investment for any offering on Blockride is $50. Some
              offerings may require a higher minimum based on requirements.
            </Disclose.Panel>
          </>
        )}
      </Disclose>
    </div>
  );
}

const Button = styled.button`
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 22px 0;

  ${tw`[@media(max-width:900px)]:(text-[12px])`}

  svg {
    width: 32px;
    height: 32px;
  }
`;

const Panel = styled.div`
  color: #393939;
  font-weight: 400;
  font-size: 16px;
  background: #fe991e;
  padding: 32px;
  border-radius: 16px;

  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    p {
      font-size: 18px;
      font-weight: 500;
      color: #0d0d0d;
    }
  }
  @media screen and (max-width: 485px) {
    font-size: 18px;
  }
`;
