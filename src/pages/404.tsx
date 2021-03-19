import React from 'react';
import { HeaderXl } from 'src/components';
import { Layout, SEO } from 'src/containers';

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="404: Not Found" />
      <HeaderXl>Not Found</HeaderXl>
      <p>You just hit a route that doesn&apos;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;
