import { gql } from 'apollo-server';

const LegislaturaTypes = gql`
  type Legislatura {
    id: ID!
    dataFim: String
    dataInicio: String
    uri: String
  }

  type LegislaturaCursor {
    pageInfo: PageInfo!
    edges: [LegislaturaEdge]
  }

  type LegislaturaEdge {
    node: Legislatura
    cursor: String
  }
`;

export default { LegislaturaTypes };
