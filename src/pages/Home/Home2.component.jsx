import React, { useState } from "react";
import { CheckboxText, Dropdown, Note } from "../../components";
import { PrimaryBtn } from "../../components/Button/Button.component";
import { Wrapper } from "../../containers";
import { Title, Caption, StyledBtn, StyledBtnChk } from "./Home.styles";
import HomeWrapper from "./HomeWrapper";

const Home2 = () => {
  const options = [
    "USD - United States Dollars",
    "EUR - European Euro",
    "JPY - Japanese Yen",
    "GBP - British Pound",
    "XAF - Francs",
  ];

  const [check, setCheck] = useState(false);

  return (
    <Wrapper>
      <div style={{ marginBottom: "0px" }}>
        <HomeWrapper style={{ paddingBottom: "20px" }}>
          <Title>Choose Billing Currency</Title>
          <Caption>
            Select the currency you want to use to bill your clients.
          </Caption>
          <Note
            title="Note: Billing currency cannot be changed in the future.
         Please make sure you select the correct currency."
            width="60"
          />
          <Dropdown options={options} />
          <CheckboxText
            onClick={() => setCheck(!check)}
            text="I am aware that I cannot change currency later"
            checked={check}
          />
          {check ? (
            <StyledBtnChk title="Finish Setup" width="20" />
          ) : (
            <StyledBtn title="Finish Setup" width="20" />
          )}
        </HomeWrapper>
      </div>
    </Wrapper>
  );
};

export default Home2;
