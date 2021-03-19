import React from 'react';

import { Container, Navbar2 } from 'src/components';

export const Layout: React.FC = ({ children }) => {
  return (
    <Container bgColor="white">
      <Navbar2
        title={'HiddenForest'}
        links={[
          ['About', '/about'],
          ['Pricing', '/pricing'],
          ['Dashboard', '/dashboard'],
        ]}
      />
      <div style={{ padding: '2em' }} />
      {children}
    </Container>
  );
};
