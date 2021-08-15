import { gql } from 'apollo-server';

const VotacaoTypes = gql`
  type Votacao {
    id: ID!
    aprovada: Boolean
    dataHoraFim: String
    dataHoraInicio: String
    despacho: String
    ementaParecer: String
    numPresentes: Int
    numVotantes: Int
    orientacoes: [Orientacao]
    placarAbstencao: Int
    placarNao: Int
    placarSim: Int
    proposicao: ProposicaoVotacao
    relator: Relator
    tipoVotacao: String
    titulo: String
    uri: String
    uriEvento: String
    uriProposicaoPrincipal: String
  }

  type Orientacao {
    nomeBancada: String
    uriBancada: String
    voto: String
  }

  type ProposicaoVotacao {
    id: ID!
    ano: Int
    ementa: String
    idTipo: Int
    numero: Int
    siglaTipo: String
    uri: String
  }

  type Relator {
    id: ID!
    idLegislatura: Int
    nome: String
    siglaPartido: String
    siglaUf: String
    uri: String
    uriPartido: String
    urlFoto: String
  }

  type Voto {
    parlamentar: Parlamentar
    voto: String
  }

  type VotoCursor {
    pageInfo: PageInfo
    edges: [VotoEdge]
  }

  type VotoEdge {
    node: Voto
    cursor: String
  }

  type Parlamentar {
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

export default { VotacaoTypes };
