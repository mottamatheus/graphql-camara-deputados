import { gql } from 'apollo-server';

const PartidoTypes = gql`
  type Partido {
    id: ID!
    nome: String
    numeroEleitoral: Int
    sigla: String
    status: StatusPartido
    uri: String
    urlFacebook: String
    urlLogo: String
    urlWebSite: String
  }

  type PartidoCursor {
    pageInfo: PageInfo
    edges: [PartidoEdge]
  }

  type PartidoEdge {
    node: Partido
    cursor: String
  }

  type StatusPartido {
    data: String
    idLegislatura: Int
    lider: Lider
    situacao: String
    totalMembros: String
    totalPosse: String
    uriMembros: String
  }

  type Lider {
    idLegislatura: Int
    nome: String
    siglaPartido: String
    uf: String
    uri: String
    uriPartido: String
    urlFoto: String
  }

  type MembroPartido {
    id: ID!
    idLegislatura: Int
    nome: String
    siglaPartido: String
    siglaUf: String
    uri: String
    uriPartido: String
    urlFoto: String
  }
`;

export default { PartidoTypes };
