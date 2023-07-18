import { styled } from "twin.macro";
import Carousel from "./components/Carousel";
import Mission from "./components/Mission";
import WaitList from "./components/Waitlist";

export default function Nft() {
  return (
    <NFT>
      <WaitList />
      <Carousel />
      <Mission />
    </NFT>
  );
}

const NFT = styled.div`
  padding: 0 100px;

  @media screen and (max-width: 823px) {
    padding: 0 20px;
  }
`;
