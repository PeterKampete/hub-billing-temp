/* eslint-disable react/no-unstable-nested-components */

import React, { useContext, useState } from 'react';
import { BackIcon } from '../../assets/svg/SvgIcons';
import {
  CheckboxText, Dropdown, Note, StepsContainer,
} from '../../components';
import { Wrapper } from '../../containers';
import {
  StyledTitle, StyledCaption, StyledBtn, StyledBtnChk, BackBtn,
} from './Home.styles';
import HomeWrapper from './HomeWrapper';
import { CountContext } from '../../App';

const Home1 = () => {
  const options = [
    'USD - United States Dollars',
    'EUR - European Euro',
    'JPY - Japanese Yen',
    'XAF - Francs',
  ];

  const [check, setCheck] = useState(false);

  const countContext = useContext(CountContext);

  const handleNext = () => {
    countContext.countDispatch('increment');
  };
  const handleBack = () => {
    countContext.countDispatch('decrement');
  };

  return (
    <Wrapper>
      <div>
        <HomeWrapper style={{ paddingBottom: '20px' }} heading={() => <StepsContainer title="Getting Started" steps="Step 2 of 2" />}>
          <BackBtn
            title="Back"
            margin="0"
            width="11"
            renderIcon={() => <div style={{ marginRight: '4px' }}><BackIcon /></div>}
            onClickFunc={handleBack}
          />
          <StyledTitle>Choose Billing Currency</StyledTitle>
          <StyledCaption>Select the currency you want to use to bill your clients.</StyledCaption>
          <Note
            title="Note: Billing currency cannot be changed in the future.
         Please make sure you select the correct currency."
            width="60"
          />
          <Dropdown options={options} />
          <CheckboxText
            onClickFunc={() => setCheck(!check)}
            text="I am aware that I cannot change currency later"
            checked={check}
          />
          {check ? (
            <StyledBtnChk title="Finish Setup" width="16" onClickFunc={handleNext} />
          ) : (
            <StyledBtn title="Finish Setup" width="16" />
          )}
        </HomeWrapper>
      </div>
    </Wrapper>
  );
};

export default Home1;
