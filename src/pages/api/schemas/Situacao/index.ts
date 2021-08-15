import { gql } from 'apollo-server';

const SituacaoTypes = gql`
  type Situacao {
    id: ID!
    descricao: String
    nome: String
    sigla: String
  }
`;

export default { SituacaoTypes };
