import styled from "styled-components";

import StripeMenu from "Challenges/StripeMenu";
import MixBlendHover from "Challenges/MixBlendHover";
import WavesCanvas from "Challenges/WavesCanvas";
import CreditCardForm from "Challenges/CreditCardForm";
import StackedMenu from "Challenges/StackedMenu";
import TranslateItems from "Challenges/TranslateItems";

const Home = () => (
  <HomeWrapper>
    <StripeMenu />
    <MixBlendHover />
    <WavesCanvas />
    <TranslateItems />
    <CreditCardForm />
    <StackedMenu />
  </HomeWrapper>
);

export default Home;

const HomeWrapper = styled.div`
  align-items: center;
  display: flex;
  min-height: 100vh;
  position: relative;
  flex-direction: column;
  width: 100%;
`;
