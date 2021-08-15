import { gql } from 'apollo-server';

const ProposicaoTypes = gql`
  type Proposicao {
    id: ID!
    ano: Int
    dataApresentacao: String
    descricaoTipo: String
    ementa: String
    ementaDetalhada: String
    idTipo: Int
    justificativa: String
    keywords: String
    numero: Int
    siglaTipo: String
    statusProposicao: StatusProposicao
    texto: String
    uri: String
    uriAutores: String
    uriOrgaoNumerador: String
    uriPropAnterior: String
    uriPropPosterior: String
    uriPropPrincipal: String
    uriUltimoRelator: String
    urlInteiroTeor: String
    urnFinal: String
  }

  type ProposicaoCursor {
    pageInfo: PageInfo
    edges: [ProposicaoEdge]
  }

  type ProposicaoEdge {
    node: Proposicao
    cursor: String
  }

  type StatusProposicao {
    dataHora: String
    descricaoSituacao: String
    descricaoTramitacao: String
    despacho: String
    idSituacao: Int
    idTipoTramitacao: String
    regime: String
    sequencia: Int
    siglaOrgao: String
    uriOrgao: String
    url: String
  }

  type AutorProposicao {
    codTipo: Int
    nome: String
    tipo: String
    uri: String
  }

  type Tramitacao {
    dataHora: String
    descricaoSituacao: String
    descricaoTramitacao: String
    despacho: String
    idSituacao: Int
    idTipoTramitacao: String
    regime: String
    sequencia: Int
    siglaOrgao: String
    uriOrgao: String
    url: String
  }

  type SiglaTipo {
    id: ID!
    descricao: String
    nome: String
    sigla: String
  }
`;

export default { ProposicaoTypes };
