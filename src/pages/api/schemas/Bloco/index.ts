import { gql } from 'apollo-server';

const BlocoTypes = gql`
  type Bloco {
    id: ID!
    idLegislatura: String
    nome: String
    uri: String
  }

  type BlocoCursor {
    edges: [BlocoEdge]
    pageInfo: PageInfo!
  }

  type BlocoEdge {
    node: Bloco
    cursor: String
  }
`;

export default { BlocoTypes };
