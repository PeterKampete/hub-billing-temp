import React from 'react';
import PropTypes from 'prop-types';

import LinkDocs from '../LinkDocs/LinkDocs.component';
import {
  Container, Title, Caption, Line,
} from './PageHeader.styles';

const PageHeader = ({
  title, caption, color, capColor, capFontSize, fontSize, ...props
}) => (
  <div>
    <Container {...props}>
      <div>
        <Title color={color} fontSize={fontSize}>{title}</Title>
        <Caption capColor={capColor} capFontSize={capFontSize}>{caption}</Caption>
      </div>
      <div>
        <LinkDocs title="Docs" />
      </div>
    </Container>
    <Line />
  </div>
);

PageHeader.defaultProps = {
  title: '',
  caption: '',
  color: 'var(--color-secondary)',
  capColor: '#888888',
  fontSize: 100,
  capFontSize: 80,
};

PageHeader.propTypes = {
  title: PropTypes.string,
  caption: PropTypes.string,
  color: PropTypes.string,
  capColor: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  capFontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default PageHeader;
