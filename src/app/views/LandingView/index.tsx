import tw, { styled } from "twin.macro";

import Logo from "../../assets/images/Blockride.png";

export default function LandingView() {
  return (
    <Container>
      <img src={Logo} alt="blockride" />
      <p>Coming Soon....</p>
    </Container>
  );
}

const Container = styled.div`
  ${tw`w-full h-[100vh] flex justify-center items-center bg-[#1E1E1E] flex-col`}

  p {
    ${tw`text-[2rem] mt-[8px] text-[#ddd]`}
  }
`;
