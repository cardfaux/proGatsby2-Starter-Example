import React from 'react';
import { graphql } from 'gatsby';

import Layout from './layout';

const postLayout = props => {
  const { markdownRemark } = props.data;
  return (
    <Layout location={props.location}>
      <h1> {markdownRemark.frontmatter.title} </h1>
      <div
        dangerouslySetInnerHTML={{
          __html: markdownRemark.html,
        }}
      />
    </Layout>
  );
};

export default postLayout;

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`;
