import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BackIcon } from '../../assets/svg/SvgIcons';
import { CheckboxText, Dropdown, Note } from '../../components';
import { Wrapper } from '../../containers';
import {
  StyledTitle, Caption, StyledBtn, StyledBtnChk, BackBtn,
} from './Home.styles';
import HomeWrapper from './HomeWrapper';

const Home1 = ({ steps }) => {
  const options = [
    'USD - United States Dollars',
    'EUR - European Euro',
    'JPY - Japanese Yen',
    'GBP - British Pound',
    'XAF - Francs',
  ];

  const [check, setCheck] = useState(false);

  return (
    <Wrapper>
      <div>
        <HomeWrapper style={{ paddingBottom: '20px', paddingTop: '0px' }}>
          <BackBtn
            title="Back"
            padding="5"
            margin="0"
            width="10"
            renderIcon={() => <BackIcon />}
            onClickFunc={() => steps - 1}
          />
          <StyledTitle>Choose Billing Currency</StyledTitle>
          <Caption>Select the currency you want to use to bill your clients.</Caption>
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
            <StyledBtnChk title="Finish Setup" width="16" onClickFunc={() => steps - 1} />
          ) : (
            <StyledBtn title="Finish Setup" width="16" />
          )}
        </HomeWrapper>
      </div>
    </Wrapper>
  );
};

Home1.defaultProps = {
  steps: '',
};
Home1.propTypes = {
  steps: PropTypes.number,
};

export default Home1;
