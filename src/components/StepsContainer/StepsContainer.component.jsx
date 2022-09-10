import React from 'react';
import PropTypes from 'prop-types';

import { Container, Steps, Title } from './StepsContainer.styles';

const StepsContainer = ({
  steps, title, color, fontSize, ...props
}) => (
  <Container {...props}>
    <div>
      <Title fontSize={fontSize} color={color}>
        {title}
      </Title>
    </div>
    <div>
      <Steps>{steps}</Steps>
    </div>
  </Container>
);

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
