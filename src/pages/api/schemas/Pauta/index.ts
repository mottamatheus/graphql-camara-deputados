import { gql } from 'apollo-server';

const PautaTypes = gql`
  type Pauta {
    codRegime: Int
    ordem: Int
    proposicao: ProposicaoPauta
    regime: String
    situacaoItem: String
    uriProposicaoRelacionada: String
    uriVotacao: String
  }

  type ProposicaoPauta {
    id: ID!
    ano: Int
    ementa: String
    idTipo: Int
    numero: Int
    siglaTipo: String
    uri: String
  }
`;

export default { PautaTypes };
