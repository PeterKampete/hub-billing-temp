import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container, Step, Steps, Title,
} from './StepsContainer.styles';
import { StepContext } from '../../App';

const StepsContainer = ({
  title, color, fontSize, ...props
}) => {
  const stepContext = useContext(StepContext);
  const { steps, stepState } = stepContext;
  const [stepIndex, setStepIndex] = useState(false);
  useEffect(() => {
    if (stepState.step === 1) {
      setStepIndex(true);
    }
  }, [stepState.step, steps]);

  return (
    <Container {...props}>
      <div>
        <Title fontSize={fontSize} color={color}>
          {title}
        </Title>
      </div>
      <div>
        <Steps>
          Step
          {' '}
          {stepIndex ? steps[1] : steps[0]}
          {' '}
          of
          {' '}
          {stepIndex ? steps[1] : steps[0]}
          <div style={{ display: 'flex', marginLeft: '6px' }}>
            <Step active={steps[0] === stepState.step + 1} />
            <Step active={steps[1] === stepState.step + 1} />
          </div>
        </Steps>
      </div>
    </Container>
  );
};

StepsContainer.defaultProps = {
  title: '',
  steps: [],
  color: 'var(--color-secondary)',
  fontSize: 80,
};
StepsContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  steps: PropTypes.array,
  title: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default StepsContainer;
