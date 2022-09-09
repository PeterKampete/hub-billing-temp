import React from 'react';
import PropTypes from 'prop-types';

import LinkDocs from '../LinkDocs/LinkDocs.component';
import {
  Container, Title, Caption, Line,
} from './PageHeader.styles';

const PageHeader = ({ title, caption }) => (
  <div>
    <Container>
      <div>
        <Title>{title}</Title>
        <Caption>{caption}</Caption>
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
};

PageHeader.propTypes = {
  title: PropTypes.string,
  caption: PropTypes.string,
};

export default PageHeader;
