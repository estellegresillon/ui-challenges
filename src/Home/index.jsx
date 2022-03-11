import styled from "styled-components";

import WavesCanvas from "Challenges/WavesCanvas";
import StripeMenu from "Challenges/StripeMenu";
import CreditCardForm from "Challenges/CreditCardForm";
import StackedMenu from "Challenges/StackedMenu";

const Home = () => (
  <HomeWrapper>
    <StripeMenu />
    <WavesCanvas />
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
