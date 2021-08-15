import { gql } from 'apollo-server';

const OrgaoTypes = gql`
  type Orgao {
    id: ID!
    apelido: String
    casa: String
    dataFim: String
    dataFimOriginal: String
    dataInicio: String
    dataInstalacao: String
    idTipoOrgao: Int
    nome: String
    sala: String
    sigla: String
    tipoOrgao: String
    uri: String
    urlWebsite: String
  }

  type OrgaoCursor {
    pageInfo: PageInfo
    edges: [OrgaoEdge]
  }

  type OrgaoEdge {
    node: Orgao
    cursor: String
  }

  type MembroOrgao {
    id: ID!
    dataFim: String
    dataInicio: String
    idLegislatura: Int
    idPapel: Int
    nome: String
    nomePapel: String
    siglaPartido: String
    siglaUf: String
    uri: String
    uriPartido: String
    urlFoto: String
  }
`;

export default { OrgaoTypes };
