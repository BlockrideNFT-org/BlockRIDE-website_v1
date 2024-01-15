import Faqs from "./components/Faqs";
import IntroSection from "./components/IntroSection";
import InvestmentProcess from "./components/InvestmentProcess";
import ManagementProcess from "./components/ManagementProcess";
import Waitlist from "./components/Waitlist";

export default function Home() {
  return (
    <>
      <IntroSection />
      <InvestmentProcess />
      <ManagementProcess />
      <Faqs />
      <Waitlist />
    </>
  );
}
