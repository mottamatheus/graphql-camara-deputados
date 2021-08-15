import { gql } from 'apollo-server';

const PageInfoTypes = gql`
  type PageInfo {
    endCursor: String
    hasNextPage: Boolean
  }
`;

export default { PageInfoTypes };
