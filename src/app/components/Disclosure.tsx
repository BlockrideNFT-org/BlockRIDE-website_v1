import { Disclosure as Disclose } from "@headlessui/react";
import { ReactComponent as AddIcon } from "app/assets/icons/add.svg";
import { styled } from "twin.macro";

export default function Disclosure() {
  return (
    <div>
      <h4 tw="font-[500] text-[36px] text-[#fff] text-center my-[60px]">
        Frequently Asked Questions
      </h4>
      <Disclose>
        {({ open }) => (
          <>
            <Disclose.Button as={Button}>
              What does fractional ownership mean?
              <AddIcon />
            </Disclose.Button>

            <Disclose.Panel as={Panel}>
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
        {({ open }) => (
          /* Use the `open` state to conditionally change the direction of an icon. */
          <>
            <Disclose.Button as={Button}>
              Who can I contact for support?
              <AddIcon />
            </Disclose.Button>
            <Disclose.Panel as={Panel}>
              If you need assistance, you can reach us in the Blockride Discord
              by opening a ticket!
            </Disclose.Panel>
          </>
        )}
      </Disclose>
      <Disclose>
        {({ open }) => (
          /* Use the `open` state to conditionally change the direction of an icon. */
          <>
            <Disclose.Button as={Button}>
              What currency can I invest in?
              <AddIcon />
            </Disclose.Button>
            <Disclose.Panel as={Panel}>
              Our bus fleet transactions are conducted using $USDC (U.S. Dollar
              Coin), an SPL stablecoin issued by Circle
            </Disclose.Panel>
          </>
        )}
      </Disclose>
      <Disclose>
        {({ open }) => (
          /* Use the `open` state to conditionally change the direction of an icon. */
          <>
            <Disclose.Button as={Button}>
              What is the minimum investment?
              <AddIcon />
            </Disclose.Button>
            <Disclose.Panel as={Panel}>
              The minimum investment for any offering on Blockride is $50. Some
              offerings may require a higher minimum based on requirements.
            </Disclose.Panel>
          </>
        )}
      </Disclose>
      <Disclose>
        {({ open }) => (
          /* Use the `open` state to conditionally change the direction of an icon. */
          <>
            <Disclose.Button as={Button}>
              Why should fleet ownership be fractionalized on the blockchain?
              <AddIcon />
            </Disclose.Button>
            <Disclose.Panel as={Panel}>
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
    </div>
  );
}

const Button = styled.button`
  color: #fff;
  font-weight: 500;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 0.3px solid #ffffff;
  padding: 22px 0;
  @media screen and (max-width: 485px) {
    font-size: 18px;
  }

  svg {
    width: 32px;
    height: 32px;
    fill: #fff;
  }
`;

const Panel = styled.div`
  color: #fff;
  font-weight: 500;
  font-size: 20px;
  @media screen and (max-width: 485px) {
    font-size: 18px;
  }
`;
