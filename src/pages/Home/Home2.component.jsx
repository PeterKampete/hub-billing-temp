import React from "react";
import { Dropdown, Note } from "../../components";
import { Wrapper } from "../../containers";
import { Title, Caption } from "./Home.styles";
import HomeWrapper from "./HomeWrapper";

const Home2 = () => {
  const options = [
    "USD - United States Dollars",
    "EUR - European Euro",
    "JPY - Japanese Yen",
    "GBP - British Pound",
    "XAF - Francs",
  ];

  return (
    <Wrapper>
      <HomeWrapper>
        <Title>Choose Billing Currency</Title>
        <Caption>
          Select the currency you want to use to bill your clients.
        </Caption>
        <Note
          title="Note: Billing currency cannot be changed in the future.
         Please make sure you select the correct currency."
          width="62"
        />
        <Dropdown options={options} />
      </HomeWrapper>
    </Wrapper>
  );
};

export default Home2;
