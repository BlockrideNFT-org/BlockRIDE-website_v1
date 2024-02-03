import React, { useState } from "react";
import { styled } from "twin.macro";
import { ReactComponent as PlusCircle } from "app/assets/icons/plus-circle.svg";
import { ReactComponent as MinusCircle } from "app/assets/icons/minus-circle.svg";

const data = [
  {
    question: "What does fractional ownership mean?",
    answer:
      "Fractional ownership involves shared ownership of an asset among multiple individuals, granting each a percentage of ownership rights, thereby collectively owning the entire operation of the asset. With our company, you can become a fractional owner of a bus fleet and enjoy the advantages of future appreciation and cash flow without the burden of managing the day-to-day operations.",
  },
  {
    question: "Who can I contact for support?",
    answer:
      "If you need assistance, you can reach us in the Blockride Discord by opening a ticket!",
  },
  {
    question: "What currency can I invest in?",
    answer:
      "Our bus fleet transactions are conducted using $USDC (U.S. Dollar Coin), an SPL stablecoin issued by Circle",
  },
  {
    question: "What is the minimum investment?",
    answer:
      "The minimum investment for any offering on Blockride is $50. Some offerings may require a higher minimum based on requirements.",
  },
  {
    question: "Why should fleet ownership be fractionalized on the blockchain?",
    answer:
      "With the utilization of blockchain technology, Blockride users and investors gain access to a range of information on the platform's tokenized bus fleets. This includes detailed records of each vehicle's mileage, maintenance history, and overall health, as well as revenue and income reports. By providing this information, Blockride promotes transparency and enables stakeholders to make informed decisions about their investments",
  },
];

export default function Disclosure_v2() {
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <Container>
      <div className="disclosure">
        {data.map((d, i) => {
          return (
            <div className={selected === i ? "item show" : "item"} key={i}>
              <div className={selected === i ? "title show" : "title"}>
                <h2>{d.question}</h2>
                {selected === i ? (
                  <MinusCircle role="button" onClick={() => toggle(i)} />
                ) : (
                  <PlusCircle role="button" onClick={() => toggle(i)} />
                )}
              </div>
              <div className={selected === i ? "content show" : "content"}>
                {/* <p>{d.answer}</p> */}
                {d.answer}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  .disclosure {
    width: 100%;

    svg {
      flex-shrink: 0;
    }

    .item {
      padding: 32px;

      &.show {
        background: #fe991e;
        border-radius: 16px;
      }

      .title {
        font-weight: 500;
        font-size: 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        &.show {
          color: #000;
        }
      }

      .content {
        font-weight: 400;
        font-size: 16px;

        max-height: 0;
        overflow: hidden;
        margin-top: 20px;
        color: #000;

        p {
          color: #000;
        }

        &.show {
          height: auto;
          max-height: 9999px;
          transition: all 0.5s cubic-bezier(1, 0, 1, 0);
        }
      }
    }
  }
`;
