import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Contact, Featured } from '@components';
//Projects
const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <noscript>
      <iframe
        title="gtag"
        src="https://www.googletagmanager.com/ns.html?id=GTM-TRHVH5B"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      />
    </noscript>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Jobs />
      <Featured />
      {/*<Projects />*/}
      <Contact />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
